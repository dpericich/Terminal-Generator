import React, { ReactElement } from 'react';

interface codeInputElementProps {
    codeInput: string,
    setCodeInput: Function,
    setCurrentTab: Function,
    setCodeSubmitted: Function,
    setCodeType: Function
}

const CodeInputElement = (props: codeInputElementProps): ReactElement => {
    return(
        <div>
            {/* Commenting out currently bc I don't support syntax coloring */}
            {/* <div className='radio-container'>
                <div className="radio-element-container">
                    <input type="radio" id="commandLine" name="codeType" value="CommandLine" defaultChecked={true} onClick={() => {props.setCodeType("commandLine")}}/>
                    <label htmlFor="commandLine">Command Line</label>    
                </div>
                <div className="radio-element-container">
                    <input type="radio" id="code" name="codeType" onClick={() => {props.setCodeType("code")}}/>
                    <label htmlFor="code">Code Editor</label>
                </div>
            </div> */}
            <textarea 
                style={{resize:'none'}} 
                name="" 
                id="" 
                cols={90} 
                rows={20} 
                placeholder="Enter your code here..."
                value={props.codeInput}
                onChange={(e) => {props.setCodeInput(e.target.value)}}
            >
            </textarea>
            <div className="button" onClick={() => {props.setCurrentTab("terminalOutput"); props.setCodeSubmitted(true)}}>
                Generate Code
            </div>
        </div>
    );
};

export default CodeInputElement;