import React, { ReactElement } from 'react';
// Need to import the helper functions for this here

// This will either accept props or get the input from the store
const TerminalOutputElement = (): ReactElement => {
    return(
        <div>
            <h3>Your Terminal Output</h3>
            <p>The output render will go here</p>
            <br />
            <h3>How to Take a Screenshot</h3>
            <p>For PC: <span className='text-bold'></span></p>
            {/* Add font awesome here */}
            <p>For Mac: <span className='text-bold'>Command + Shift + 4</span></p>
            <p>For Linux: <span className='text-bold'>PrintScreen</span></p>
        </div>
    )
};

export default TerminalOutputElement;