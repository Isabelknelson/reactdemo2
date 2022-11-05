import { useState } from "react";


const Counter = () => {
    
    const [countState, setCountState] = useState[77]
    
    function intCount(){
        setCountState(countState + props.incBy)
    }

    return (
        <div>
            <div>{countState}</div>
            <button onClick={incCount}>+{props.incBy}</button>
        </div>
    )
}
export default Counter;