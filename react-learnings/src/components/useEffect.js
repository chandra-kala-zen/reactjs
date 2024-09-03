import React, { useEffect, useState } from "react";

function UseEffectFun() {
    const [data, setData] = useState(null); // Initialize state to hold fetched data

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.json())
            .then(data => setData(data)) // Set fetched data to state
    }, []); // Empty dependency array ensures the effect runs only once after the component mounts

    return (
        <div>
            <h1>Hello UseEffect</h1>
            {
                data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..." 
                // Conditionally render fetched data or loading message
            }
        </div>
    );
}

export default UseEffectFun;
