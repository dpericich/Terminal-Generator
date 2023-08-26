import React, { ReactElement } from 'react';
import { formatTerminalInput, formatCodeEditorInput } from '../utils/codeFormatting';

interface OutputContainerProps {
    codeInput: string;
}

const OutputContainer = ({codeInput}: OutputContainerProps): ReactElement => {
    return(
        <div className="output-continer">
            <div className="output-header">
                <div className="circle close"></div>
                <div className="circle minimize"></div>
                <div className="circle open"></div>
            </div>
            {/* Header */}
            {/* Code */}
            <div>{codeInput}</div>
        </div>
    );
};

export default OutputContainer;