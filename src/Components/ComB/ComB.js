import { useContext } from "react";
import { MyContext } from "../Context/MyContextProvider"

const ComB = () => {
    let { counter, dispatch } = useContext(MyContext);
    return (
        <div className="col-6 offset-3 p-5 text-white mt-3 bg-dark text-center">
            <h3>counter:{counter.counter}</h3>
            <button onClick={() => dispatch({ type: "inc", payload: 1 })}>+</button>
            <button onClick={() => dispatch({ type: "dec", payload: 1 })} >-</button>
            <button onClick={() => dispatch({ type: "inc5", payload: 5 })} >5</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
}

export default ComB;