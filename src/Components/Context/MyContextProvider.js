import React, { useReducer } from "react";

let initialValue = {
    counter: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc': {
            return { ...state, counter: state.counter + action.payload };
        }


        case "dec": {
            return { ...state, counter: state.counter - action.payload };
        }


        case "inc5": {
            return { ...state, counter: state.counter + action.payload };
        }


        case "reset": {
            return initialValue
        }


        default: {
            return state
        }

    }
}


export let MyContext = React.createContext()
const MyContextProvider = ({ children }) => {
    let [counter, dispatch] = useReducer(reducer, initialValue)
    return (
        <MyContext.Provider value={{ counter, dispatch }}>
            {children}
        </MyContext.Provider>
    );
}

export default MyContextProvider;