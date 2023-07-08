import React, { ReactElement } from 'react';

const CodeInputElement = (): ReactElement => {
    return(
        <div>
            <h3>Enter Your Code Here:</h3>
            <div>
                <input type="radio" id="commandLine" name="codeType" value="CommandLine" defaultChecked={true} />
                <label htmlFor="commandLine">Command Line</label>
                <input type="radio" id="code" name="codeType" value="Code" />
                <label htmlFor="code">Code</label>
            </div>
            <textarea name="" id="" cols={90} rows={20}></textarea>
        </div>
    )
};

export default CodeInputElement;