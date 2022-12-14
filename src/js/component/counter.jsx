import React, {useState, useEffect} from "react"
import ClockDigits from "./clockdigits.jsx"



const Counter = () => {
    const [seconds, setSeconds] = useState(0);
    let singleDigit = Math.floor((seconds / 1) % 10)
    let tensDigit = Math.floor((seconds / 10) % 10)
    let hundredsDigit = Math.floor((seconds / 100) % 10)
    let thousandsDigit = Math.floor((seconds / 1000) % 10)

        // useEffect(() => {}, []) useEffect hook

    useEffect(() => {
      setTimeout(() => {
            setSeconds((seconds) => seconds + 1);
        }, 1000);
    },
    );


    return (
        <div>
		<div className="d-flex flex-row clock-BG">
          <div className="clock-indices">
          <h1>
          <i className="fas fa-clock"></i>
          </h1>
          </div>
           <ClockDigits value={thousandsDigit}/>
           <ClockDigits value={hundredsDigit}/>
           <ClockDigits value={tensDigit}/>
           <ClockDigits value={singleDigit}/>
        </div>
        </div>
	);
}

export default Counter;
