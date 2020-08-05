import React from 'react';

import {
    Header, 
    Footer,
    ComingSoon,
} from '../partials';

const RouteLayout = ({ children }) => {
    return (
        <div className="App">
            <ComingSoon />
            <Header />
                
            { children }

            <Footer/>
        </div>
    )
};

export default RouteLayout;