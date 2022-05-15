import React, { useState } from 'react';
import './ColorBox.scss'
// import PropTypes from 'prop-types';

ColorBox.propTypes = {

};

function getRamdomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue']
    const ramdomIndex = Math.trunc(Math.random() * 5)
    return COLOR_LIST[ramdomIndex]
}


function ColorBox() {

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink'
        return initColor
    });
    function handleBoxClick() {
        //get ramdom color  -> set color
        const newColor = getRamdomColor()
        setColor(newColor)

        localStorage.setItem('box_color', newColor)
    }
    return (
        <div className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;