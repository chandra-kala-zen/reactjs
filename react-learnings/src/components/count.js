import { useState } from "react";


function Counter(){
    // usestate variables
    const [counter,setCounter] = useState(0);
    const [text,setText] = useState("");
    function HandleIncrease(){
        setCounter(counter +1);
    }

    return(
        <div>
            <input onChange={(e) => setText(e.target.value)}  placeholder="type here" type="text" />
            <h1>{text},{counter}</h1>
            <button onClick={HandleIncrease}>Increase</button>

        </div>
    )
}
export default Counter;