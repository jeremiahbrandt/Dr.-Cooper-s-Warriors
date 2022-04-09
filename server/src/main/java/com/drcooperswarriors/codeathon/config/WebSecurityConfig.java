package com.drcooperswarriors.codeathon.config;

import com.drcooperswarriors.codeathon.payload.response.JwtResponse;
import com.drcooperswarriors.codeathon.security.CustomOAuth2User;
import com.drcooperswarriors.codeathon.security.JwtUtils;
import com.drcooperswarriors.codeathon.service.CustomOAuth2UserService;
import com.drcooperswarriors.codeathon.service.UserDetailsServiceImpl;
import com.drcooperswarriors.codeathon.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.dao.*;
import org.springframework.security.config.annotation.authentication.builders.*;
import org.springframework.security.config.annotation.web.builders.*;
import org.springframework.security.config.annotation.web.configuration.*;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    public UserService userService;

    @Autowired
    JwtUtils jwtUtils;

    @Bean
    public UserDetailsService userDetailsService() {
        return new UserDetailsServiceImpl();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());

        return authProvider;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authenticationProvider());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
//        // Enable CORS and disable CSRF
//        http = http.cors().and().csrf().disable();
//
//        // Set session management to stateless
//        http = http
//                .sessionManagement()
//                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                .and();
//
//        // Set unauthorized requests exception handler
//        http = http
//                .exceptionHandling()
//                .authenticationEntryPoint(
//                        (request, response, ex) -> {
//                            response.sendError(
//                                    HttpServletResponse.SC_UNAUTHORIZED,
//                                    ex.getMessage()
//                            );
//                        }
//                )
//                .and();
//
//        // Set permissions on endpoints
//        http.authorizeRequests()
//                // Our public endpoints
//                .antMatchers("/api/public/**").permitAll()
//                .antMatchers(HttpMethod.GET, "/api/author/**").permitAll()
//                .antMatchers(HttpMethod.POST, "/api/author/search").permitAll()
//                .antMatchers(HttpMethod.GET, "/api/book/**").permitAll()
//                .antMatchers(HttpMethod.POST, "/api/book/search").permitAll()
//                // Our private endpoints
//                .anyRequest().authenticated();
//
//        // Add JWT token filter
//        http.addFilterBefore(
//                jwtTokenFilter,
//                UsernamePasswordAuthenticationFilter.class
//        );

        http.csrf().disable().authorizeRequests()
                //...
                .antMatchers(
                        HttpMethod.GET,
                        "/index*", "/static/**", "/*.js", "/*.json", "/*.ico", "/login/oauth2/code/google")
                .permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin().loginPage("/login")
                .loginProcessingUrl("/perform_login")
                .defaultSuccessUrl("http://localhost:3000/",true)
                .failureUrl("/login?error=true")
                .and()
                .oauth2Login()
                .userInfoEndpoint()
                .userService(oauthUserService)
                .and()
                .successHandler(new AuthenticationSuccessHandler() {
                    @Override
                    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
                        CustomOAuth2User oauthUser = (CustomOAuth2User) authentication.getPrincipal();
                        userService.processOAuthPostLogin(oauthUser.getEmail());
                        String jwt = jwtUtils.generateJwtToken(authentication);
                        String token = (new JwtResponse(jwt, new Long(1), oauthUser.getEmail(), oauthUser.getName(), new ArrayList<>())).getAccessToken();
                        System.out.println(token);
                        response.setHeader("Authorization", token);
                        response.sendRedirect("http://localhost:3000/");
                    }
                });
    }

    @Autowired
    private CustomOAuth2UserService oauthUserService;
}
