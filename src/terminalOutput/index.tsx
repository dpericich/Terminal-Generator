import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows} from '@fortawesome/free-brands-svg-icons';
import OutputContainer from '../components/OutputContainer';
interface outputContainerProps {
    codeInput: string;
}

const TerminalOutputElement = ({ codeInput }: 
    outputContainerProps): ReactElement => {
        return(
            <div>
                <h3>Your Terminal Output</h3>
                <OutputContainer 
                    codeInput={codeInput} 
                />
                <br />
                <a href="https://www.buymeacoffee.com/danielperi9" target="_blank" style={{marginTop: "30px"}}>
                    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style={{height: "60px", width: "217px"}} />
                </a>
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