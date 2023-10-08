import React, { ReactElement } from 'react';
import { formatTerminalInput, formatCodeEditorInput } from '../utils/codeFormatting';

interface OutputContainerProps {
    codeInput: string;
    codeType: string;
}

// This is where I will want to pull in the theme from context
const OutputContainer = ({codeInput, codeType }: OutputContainerProps): ReactElement => {
    return(
        <div className={"output-container"}>
            <div className="output-header">
                <div className="circle close"></div>
                <div className="circle minimize"></div>
                <div className="circle open"></div>
            </div>
            <div className="output-body">
                <pre>
                    {codeInput}
                </pre>
            </div>
        </div>
    );
};

export default OutputContainer;