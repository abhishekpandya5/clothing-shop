import React from "react";
import { CustomButtonContainer } from "./CustomButtonStyles";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;



/* import React from 'react';

import './customButton.scss';

const CustomButton = ({ children, inverted, isGoogleSignIn, ...otherProps }) => (
    <button
        className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}>
        {children}
    </button>
)
export default CustomButton;
 */
