import { useState, useEffect } from "react";

const NumberOfEvents  = ({ setCurrentNOE }) => {
    const [number, setNumber] = useState("32");

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value)
    }

    return (
        <div id="number-of-events">
            <input 
                type='text'
                className="events-options"
                value={number}
                onChange={handleInputChanged}
            /> 
        </div>
    )
}

export default NumberOfEvents;