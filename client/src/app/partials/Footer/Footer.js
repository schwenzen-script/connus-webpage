import React from 'react';
import Parser from 'html-react-parser';

import { useLanguage, useToolbox } from '../../services';

import { Container, Row, Col, CenterRow } from '../Layout';
import { SocialButtons } from '../Buttons';
import { LightButton, SocialButton } from '../../components';
import { NewsletterForm } from '../Newsletter';

import Facebook from '../../assets/icons/facebook.png';
import Instagram from '../../assets/icons/instagram.png';
import Linkedin from '../../assets/icons/linkedin.png';

const Footer = ({target}) => {
    const { getCookie } = useToolbox();
    const { getText } = useLanguage(); 

    const preferedPage = getCookie('preferedPage');
    const text = getText(preferedPage);

    return (
        <div className="footer">
            <Container>
                <CenterRow>
                    <Col className="footer col-12" sizes="col-12 col-md-6">
                        {/* <NewsletterForm 
                            target={preferedPage}
                            title={Parser(text["newsletter_title"])}
                            text={Parser(text["newsletter_info"])}
                            button={Parser(text["newsletter_button"])}
                            subscribed={Parser(text["newsletter_subscribed"])}
                        /> */}
                        <h3 className="mini-title title-white">Alexandre Goossens</h3>
                        <p className="light-text-blue">+32 4 76 01 51 56</p>
                    </Col>
                    <Col className="footer col-12" sizes="col-12 col-md-6">
                        <h3 className="mini-title title-white">Tibo Verdonck</h3>
                        <p className="light-text-blue">+32 4 73 82 56 87</p>
                    </Col>
                </CenterRow>
                <CenterRow>
                    <a className="light-button" href="mailto:info@connus.app">info@connus.app</a>
                </CenterRow>
                <CenterRow>
                    {/* <Col sizes="col-12 col-md-6"> */}
                        {/* <LanguageButtons /> */}
                    {/* </Col> */}
                    <Col sizes="col-12 col-md-6 d-md-flex justify-content-md-end">
                        <LightButton text="Privacy Policy" pageRef="/privacy-policy"/>
                    </Col>

                    <Col sizes="col-12 col-md-6 d-md-flex align-items-center">
                        <SocialButtons>
                            <SocialButton img={Linkedin} pageRef={"https://www.linkedin.com/company/connus-be/?originalSubdomain=be"} />
                            <SocialButton img={Facebook} pageRef={"https://www.facebook.com/pages/category/Computer-Company/Connus-104463651083787/"} />
                            <SocialButton img={Instagram} pageRef={"https://www.instagram.com/connus_be/"}/>
                        </SocialButtons>
                    </Col>
                </CenterRow>
            </Container>
        </div>
    )
};

export default Footer;