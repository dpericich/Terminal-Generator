import React, { ReactElement } from "react";
import './App.css';

const App = (): ReactElement => {
  return(
    <div className="app-container">
      <div className="display-container">
        <h1>Code Snippet Generator</h1>
        <div className="tab-container">
          <div className="tab tab-selected">Code Input</div>
          <div className="tab tab-disabled">Terminal Output</div>
          <div className="tab">Advanced Settings</div>
        </div>
        {/* Will have conditionally rendered components here depending on which tab is selected */}
      </div>
    </div>
  )
};

export default App;