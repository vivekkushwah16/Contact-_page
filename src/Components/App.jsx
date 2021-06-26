import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Contact from "./Contact";
function App(){
    return(
        <>
        <div id='wrapper'>
            <div className="left">
             <Contact/>
            </div>
            <div className="right">
                <div id='showcase'>
                    <div className="showcase-content">
                        <h1 className="showcase-text">Let's create future <strong>together</strong></h1>
                        <a href="#" className="secondary-btn">Start a FREE  10-days trial</a>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
};
export default App;
