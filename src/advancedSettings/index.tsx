import { ReactElement } from 'react';

interface AdvancedSettingsElementProps {
    codeTheme: string,
    setCodeTheme: Function,
    codeFontFamily: string,
    setCodeFontFamily: Function
}

const AdvancedSettingsElement = ({ setCodeTheme }: AdvancedSettingsElementProps): ReactElement => {
    return(
        <div className='settings-container'>
            <h3>Advanced Settings</h3>
            <div>
                <h4>Set Theme</h4>
                <div className='settings-radio-container'>
                    {/* I will need to remove the defaultChecked and instead use the global app state */}
                    <div className="radio-element-container">
                        <input type="radio" id="default" name="theme" value="Default" defaultChecked={true} onClick={() => setCodeTheme("default")} />
                        <label htmlFor="default">Default</label>
                    </div>
                    <div className="radio-element-container">
                        <input type="radio" id="darkMode" name="theme" value="Dark Mode" onClick={() => setCodeTheme("dark")} />
                        <label htmlFor="darkMode">Dark Mode</label>
                    </div>
                    <div className="radio-element-container">
                        <input type="radio" id="retro" name="theme" value="Retro" onClick={() => setCodeTheme("retro")} />
                        <label htmlFor="retro">Retro</label>
                    </div>
                    <div className="radio-element-container">
                        <input type="radio" id="pixie" name="theme" value="Pixie" onClick={() => setCodeTheme("pixie")} />
                        <label htmlFor="pixie">Pixie</label>
                    </div>
                </div>
            </div>
            {/* What other options do I want for advanced settings? */}
            {/* Maybe I can add in font choices? */}
        </div>
    )
};

export default AdvancedSettingsElement;