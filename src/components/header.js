import React from 'react';
import '../ui-toolkit/css/nm-cx/main.css';

export const MockAPIHeader = (props) => {
    return (
        <div>
            <div id="headerRow" className="row">
                <div className="small-1 columns">
                    &nbsp;
                </div>
                <div id="mockAPITitleColumn" className="small-2 columns">
                    <h1>
                       MockAPI Project
                    </h1>
                </div>
                <div id="mockAPITitleSpacerColumn" className="small-9 columns">
                    &nbsp;
                </div>
            </div>
            <div id="headerSpacerRow" className="row">
                <div className="small-12 columns">
                    &nbsp;
                </div>
            </div>
        </div>
        );
}