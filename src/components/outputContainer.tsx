import { ReactElement, useContext } from 'react';
import { themeSettings } from '../data/appConfig';
import { ThemeContext, FontFamilyContext } from '../App'

interface OutputContainerProps {
    codeInput: string;
};

type ThemeSettingsType = typeof themeSettings;


const OutputContainer = ({ codeInput }: OutputContainerProps): ReactElement => {
    const theme = useContext(ThemeContext);
    const { terminalPrimary, terminalSecondary, close, minimize, open } = themeSettings[theme as keyof ThemeSettingsType];
    const fontFamily = useContext(FontFamilyContext);

    return(
        <div className="output-container" style={{backgroundColor: terminalPrimary, color: terminalSecondary }}>
            <div className="output-header" style={{ borderColor: terminalSecondary }}>
                <div className="circle close" style={{ backgroundColor: close }} ></div>
                <div className="circle minimize" style={{ backgroundColor: minimize }}></div>
                <div className="circle open" style={{ backgroundColor: open }}></div>
            </div>
            <div className="output-body">
                <pre style={{ fontFamily: fontFamily }}>
                    {codeInput}
                </pre>
            </div>
        </div>
    );
};

export default OutputContainer;