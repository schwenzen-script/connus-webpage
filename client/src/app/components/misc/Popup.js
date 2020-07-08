import React, { Fragment, useState } from 'react';
import Parser from 'html-react-parser';

import { useToolbox, useDatabase } from '../../services';
import { SectionTitle, Text } from '../typography';
import { Switch, PrimaryButton } from '../buttons';
import InputField from './InputField';

import Exit from '../../assets/icons/exit.png';

const Popup = (props) => {
    const { setPage, getCookie } = useToolbox();
    const { newsletterSignUp } = useDatabase();

    const switchAction = (status) => {
        setPage(status);
    };

    const onSubmit = () => {
        const email = document.getElementById('email-input').value;

        newsletterSignUp({
            "email": email,
            "target": getCookie("preferedPage") || "influencer",
        });
        document.getElementById('subscribe-feedback').innerHTML = "Subscribed!"
    };

    const exit = () => {
        if (!getCookie('preferedPage')) {
            setPage("influencer");
        };

        window.location.reload();
    };

    return (
        <Fragment>
            <div className="popup-fullscreen"></div>
            <div className="popup-container">
                <div className="popup"> 

                <div className="popup-exit">
                    <img src={Exit} alt="exit" onClick={exit}/>
                </div>
                    <SectionTitle 
                        text="Welcome"
                        color="blue-font"
                    />

                    <div className="popup__page-type">
                        <Text 
                            text="I am a"
                            color="blue-font"
                        />
                        <Switch
                            valueOne="brand"
                            valueTwo="influencer"
                            onSwitch={switchAction}
                            defaultValue={(getCookie('preferedPage') === "brand" ? 0 : 1 )}
                        />
                    </div>

                    <div className="popup__email">
                        <Text 
                            text="Stay up-to-date!"
                            color="blue-font"
                        />

                        <Text 
                            text={Parser("Our platform is rapidly developing. <br> Always stay up-to-date by signing up for our emails.")}
                        />   

                        <InputField placeholder="name@example.com" id="email-input" />
                        <div className="popup-email__feedback" >
                            <p id="subscribe-feedback"></p>
                        </div>
                              
                    </div>
                    <PrimaryButton onClick={onSubmit} text="Submit" />
                </div>
            </div>
        </Fragment>
    );
}

export default Popup;