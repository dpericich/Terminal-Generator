import React, { ReactElement } from 'react';
import { formatTerminalInput, formatCodeEditorInput } from '../utils/codeFormatting';

interface OutputContainerProps {
    codeInput: string;
    themeValue: string;
    codeType: string;
    codeFontFamily: string;
}

const OutputContainer = ({codeInput, themeValue}: OutputContainerProps): ReactElement => {
    return(
        <div className={`output-container ${themeValue}`}>
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