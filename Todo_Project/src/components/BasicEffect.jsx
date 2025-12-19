import { useState, useEffect } from "react";


const BasicEffect = () => {
    const [val, SetVal] = useState(0);

    useEffect(() => {
        console.log("Effect Ran!!!!!");
    }, [val]);


    return <div>
        <h1>{val}</h1>
        <button onClick={() => SetVal(val + 1)}>Increase Val</button>
    </div>
}

export default BasicEffect;