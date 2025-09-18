import { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState("#ffffff")

    const onColorChange = e => {
        setColor(e.target.value);
    }

    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="color-input">Pick a color</label>
            <input type="color" id="color-input" value={color} onChange={onColorChange} />
        </div>
    )
}

export default ColorPicker;