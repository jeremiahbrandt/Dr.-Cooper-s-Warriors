package com.drcooperswarriors.codeathon.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
    @RequestMapping(value = "/app")
    public String index() {
        return "index";
    }
}