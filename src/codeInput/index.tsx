import React, { ReactElement } from 'react';

interface codeInputElementProps {
    codeInput: string,
    setCodeInput: any,
    setCurrentTab: any
}

const CodeInputElement = <codeInput, setCodeInput, setCurrentTab>(props: codeInputElementProps): ReactElement => {
    return(
        <div>
            <h3>Enter Your Code Here:</h3>
            <div>
                <input type="radio" id="commandLine" name="codeType" value="CommandLine" defaultChecked={true} />
                <label htmlFor="commandLine">Command Line</label>
                <input type="radio" id="code" name="codeType" />
                <label htmlFor="code">Code Editor</label>
            </div>
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
            <div className="button" onClick={() => props.setCurrentTab("terminalOutput")}>Generate Code</div>
        </div>
    );
};

export default CodeInputElement;