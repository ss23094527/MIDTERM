import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './styles/Parallax.css';
import React, { useState } from "react";





function TextBlock() {

    return (

        <div id="textblock">

            <div id="textblock-container">
                <h1 id="textblock-title">TRANCE</h1>
                <div id="textblock-content">
                    <model-viewer 
                    classname="model-viewer" src="model/CD.glb" alt="A " camera-controls>

                    </model-viewer>
                </div>

            </div>

        </div>


    );
}

export default TextBlock;