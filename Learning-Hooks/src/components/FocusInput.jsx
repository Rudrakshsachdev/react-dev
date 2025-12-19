import { useRef } from "react";


const FocusInput = () => { {

    const inputRef = useRef(null);

    //console.log(inputRef);

  return (
    <div>
        <h1>Focus Input Component</h1>
        <input type="text" ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  )
}
}

export default FocusInput;