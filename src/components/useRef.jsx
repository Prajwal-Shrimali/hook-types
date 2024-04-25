import React, { useRef } from 'react'

function Ref() {
    const inputRef = useRef(null);

    return (
        <div>
            <h1>Prajwal</h1>
            <input type="text" placeholder='Ex..' ref={inputRef}/>
            <button onClick={() => {
                console.log(inputRef.current.value);
                inputRef.current.focus();
            }}>Change Name</button>
        </div>
    );
}

export default Ref;