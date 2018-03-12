import React from "react";
import "./Display.css";
export default function Display( { value } ) {
    return (
        <div className="display">
            <div className="buttons-container">
                <div />
                <div />
                <div />
            </div>
            { value }
        </div>
    );
}
