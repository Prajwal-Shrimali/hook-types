import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1, showText: state.showText};
        case "toggleShowText":
            return {count: state.count, showText: !state.showText};
        default:
            return state;
    }
}

function useReduce() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        showText: true ,
    });

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => {
                dispatch({ type: "INCREMENT"});
                dispatch({ type: "toggleShowText"});
            }}>
                Click Here
            </button>

            {state.showText && <p>This is Text</p>}
        </div>
    );
}

export default useReduce;