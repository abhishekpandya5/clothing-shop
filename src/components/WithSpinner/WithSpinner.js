import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './withSpinnerStyles';

const WithSpinner = (WrappedComponent) => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
                <WrappedComponent {...otherProps} />
            )
    };
    return Spinner;
}

export default WithSpinner

// const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps}) => {
//     return isLoading ? () : ()
// }