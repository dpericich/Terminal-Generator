import { ReactElement, useState, useEffect } from "react";
import './App.css';
import CodeInputElement from "./codeInput";
import AdvancedSettingsElement from "./advancedSettings";
import TerminalOutputElement from "./terminalOutput";

const App = (): ReactElement => {
  const [currentTab, setCurrentTab] = useState("codeInput");
  const [codeInput, setCodeInput] = useState("");
  const [codeSubmitted, setCodeSubmitted] = useState("false");
  const [codeType, setCodeType] = useState("codeEditor");
  const [codeTheme, setCodeTheme] = useState("default");
  const [codeFontFamily, setCodeFontFamily] = useState("-apple-system");
  const toggleButtonSelect = (tabName: string): string => {
    const isCurrentTab = tabName === currentTab ? "tab-selected" : "";
    return isCurrentTab;
  }

  const showComponent = (tabName: string): boolean => {
    const displayComponent = (tabName === currentTab);
    return displayComponent;
  }

  // Create a wrapper function for on submit
  // should set submitted to true and change the currentTab to terminalOutput

  return(
    <div className="app-container" style={{ fontFamily: codeFontFamily }}>
      <div className="display-container">
        <h1>TERMINAL GENERATOR</h1>
        <div className="tab-container">
          <div className={`tab ${toggleButtonSelect("codeInput")}`}  onClick={() => setCurrentTab("codeInput")}>
            Code Input
          </div>
          <div className={`tab ${toggleButtonSelect("terminalOutput")}`} onClick={() => setCurrentTab("terminalOutput")}>
            Terminal Output
          </div>
          <div className={`tab ${toggleButtonSelect("advancedSettings")}`} onClick={() => setCurrentTab("advancedSettings")}>
            Advanced Settings
          </div>
        </div>
        { showComponent('codeInput') && <CodeInputElement 
                                          codeInput={codeInput} 
                                          setCodeInput={setCodeInput} 
                                          setCurrentTab={setCurrentTab} 
                                          setCodeSubmitted={setCodeSubmitted}
                                          setCodeType={setCodeType}
                                        /> } 
        { showComponent('advancedSettings') && <AdvancedSettingsElement 
                                                codeTheme={codeTheme} 
                                                setCodeTheme={setCodeTheme}
                                                codeFontFamily={codeFontFamily}
                                                setCodeFontFamily={setCodeFontFamily}
                                               /> }
        { showComponent('terminalOutput') && <TerminalOutputElement 
                                              codeInput={codeInput}
                                              codeType={codeType}
                                              codeTheme={codeTheme}
                                              codeFontFamily={codeFontFamily}
                                             /> }
      </div>
    </div>
  )
};

export default App;