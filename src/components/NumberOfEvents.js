import { useState } from "react";

const NumberOfEvents  = ({ setCurrentNOE, setErrorAlert }) => {
    const [number, setNumber] = useState("32");

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value)
        setCurrentNOE(value)

        let errorText;
        if (isNaN(number) || number < 1 || number > 32) {
        errorText = "Please chose a number between 1 and 32"
        } else {
        errorText = ""
        }
        setErrorAlert(errorText);
    }

    return (
        <div id="number-of-events">
            <input 
                type='text'
                className="events-options"
                placeholder="Select list length"
                value={number}
                onChange={handleInputChanged}
            /> 
        </div>
    )
}

export default NumberOfEvents;