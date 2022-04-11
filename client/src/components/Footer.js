import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./CssPages/Footer.css";

const Footer = () => {

    return (
        <div className="footer-container">
            <footer className="footer-sec">
                <Container >
                    <Row>
                        <Col>
                            <div className="foot-col" >
                                Terms & Conditions
                            </div>
                        </Col>
                        <Col>
                            <div className="foot-col">
                                Contact Us
                            </div>
                        </Col>
                        <Col>
                            <div className="foot-col">
                                © 2022 Dr. Coopers Warriors Inc.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>

    );
};
export default Footer;