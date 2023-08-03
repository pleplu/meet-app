import { useState } from "react";

const NumberOfEvents  = ({ setCurrentNOE, setErrorAlert }) => {
    const [number, setNumber] = useState("32");

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value)
        setCurrentNOE(value)

        let errorText;
        if (isNaN(number) || number < 1) {
        errorText = "Please chose a valid number"
        } else {
        errorText = ""
        }
        setErrorAlert(errorText);
    }

    return (
        <div id="number-of-events">
            <p>Number of events:</p>
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