import { ReactElement } from 'react';

interface AdvancedSettingsElementProps {
    codeTheme: string,
    setCodeTheme: Function,
    codeFontFamily: string,
    setCodeFontFamily: Function
}

const AdvancedSettingsElement = ({ setCodeTheme, codeTheme, codeFontFamily, setCodeFontFamily }: AdvancedSettingsElementProps)
    : ReactElement => {
        return(
            <div className='settings-container'>
                <h3>Advanced Settings</h3>
                <div>
                    <h4>Set Theme</h4>
                    <div className='radio-container'>
                        {/* I will need to remove the defaultChecked and instead use the global app state */}
                        <div className="radio-element-container">
                            <input 
                                type="radio" 
                                id="default" 
                                name="theme" 
                                value="Default" 
                                defaultChecked={true} 
                                onClick={() => setCodeTheme("default")} 
                            />
                            <label htmlFor="default">Default</label>
                        </div>
                        <div className="radio-element-container">
                            <input 
                                type="radio" 
                                id="darkMode" 
                                name="theme" 
                                value="Dark Mode" 
                                onClick={() => setCodeTheme("dark")} 
                            />
                            <label htmlFor="darkMode">Dark Mode</label>
                        </div>
                        <div className="radio-element-container">
                            <input 
                                type="radio" 
                                id="retro" 
                                name="theme" 
                                value="Retro" 
                                onClick={() => setCodeTheme("retro")} 
                            />
                            <label htmlFor="retro">Retro</label>
                        </div>
                        <div className="radio-element-container">
                            <input 
                                type="radio" 
                                id="pixie" 
                                name="theme" 
                                value="Pixie" 
                                onClick={() => setCodeTheme("pixie")} 
                            />
                            <label htmlFor="pixie">Pixie</label>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Set Font Family</h4>
                    <div className="radio-container">
                        <div className="radio-element-container">
                            <input 
                                type="radio" 
                                id="-apple-system" 
                                name="font" 
                                value="-apple-system" 
                                checked={codeFontFamily === '-apple-system'}
                                onClick={() => {setCodeFontFamily('-apple-system')}} 
                            />
                            <label htmlFor="-apple-system">Default</label>
                        </div>
                        <div className="radio-element-container">
                            <input 
                                type="radio"
                                id="impact" 
                                name="font" 
                                value="impact"
                                checked={codeFontFamily === "Impact"}
                                onClick={() => {setCodeFontFamily('Impact')}} 
                            />
                            <label htmlFor="impact">Impact</label>
                        </div>
                        <div className="radio-element-container">
                            <input 
                                type="radio" 
                                id="monospace" 
                                name="font" 
                                value="Monospace"
                                checked={codeFontFamily === "Monospace"} 
                                onClick={() => {setCodeFontFamily('Monospace')}}
                            />
                            <label htmlFor="monospace">Monospace</label>
                        </div>
                        <div className="radio-element-container">
                            <input 
                                type="radio" 
                                id="comic-sans-ms" 
                                name="font" 
                                value="comic-sans-ms" 
                                checked={codeFontFamily === "Comic Sans MS"}
                                onClick={() => {setCodeFontFamily("Comic Sans MS")}} 
                            />
                            <label htmlFor="cominc-sans-ms">Comic Sans MS</label>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default AdvancedSettingsElement;