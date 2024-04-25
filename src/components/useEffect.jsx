import React, { useEffect,useState } from 'react';
import axios from 'axios';

function useEffectt() {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
            setData(response.data[0].email);
            console.log("API WAS CALLED");
        })
    }, [count]);

    return(
        <div>
            <h1>Hello World {data}</h1>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1);
            }}> Click Here </button>
        </div>
    )
}

export default useEffectt;