import React from "react";
import { HomepageContainer } from './HomepageStyles';
// import './homePage.scss'

import MenuDirectory from '../../components/menu-directory/MenuDirectory';

const Homepage = () => {
    return (
        <HomepageContainer>
            <MenuDirectory />
        </HomepageContainer>
    );
};

export default Homepage;
