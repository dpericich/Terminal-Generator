import React, { ReactElement } from 'react';

const AdvancedSettingsElement = (): ReactElement => {
    return(
        <div className='settings-container'>
            <h3>Advanced Settings</h3>
            <div>
                <h4>Set Theme</h4>
                <div className='settings-radio-container'>
                    {/* I will need to remove the defaultChecked and instead use the global app state */}
                    <input type="radio" id="default" name="theme" value="Default" defaultChecked={true} />
                    <label htmlFor="default">Default</label>
                    <input type="radio" id="darkMode" name="theme" value="Dark Mode" />
                    <label htmlFor="darkMode">Dark Mode</label>
                    <input type="radio" id="retro" name="theme" value="Retro" />
                    <label htmlFor="retro">Retro</label>
                    <input type="radio" id="pixie" name="theme" value="Pixie" />
                    <label htmlFor="pixie">Pixie</label>
                </div>
            </div>
            {/* What other options do I want for advanced settings? */}
            {/* Maybe I can add in font choices? */}
        </div>
    )
};

export default AdvancedSettingsElement;