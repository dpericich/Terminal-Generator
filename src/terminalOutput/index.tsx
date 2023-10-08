import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows} from '@fortawesome/free-brands-svg-icons';
import OutputContainer from '../components/OutputContainer';
interface outputContainerProps {
    codeInput: string;
    codeType: string;
}

// This will either accept props or get the input from the store
const TerminalOutputElement = ({ codeInput, codeType }: 
    outputContainerProps): ReactElement => {
        return(
            <div>
                <h3>Your Terminal Output</h3>
                <OutputContainer 
                    codeInput={codeInput} 
                    codeType={codeType}
                />
                <br />
                <h3>How to Take a Screenshot</h3>
                <span>For PC: <span className='text-bold'>
                    Shift + Windows key <FontAwesomeIcon icon={faWindows} /> + S</span>
                </span>
                {/* Add font awesome here */}
                <p>For Mac: <span className='text-bold'>Command + Shift + 4</span></p>
                <p>For Linux: <span className='text-bold'>PrintScreen</span></p>
            </div>
        )
};

export default TerminalOutputElement;