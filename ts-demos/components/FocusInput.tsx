import { useRef } from "react";

const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    // Function to focus the input
    const handleFocus = () => {
        inputRef.current?.focus();
    }


    return (
        <div>
            <input type="text"
            ref={inputRef}
            placeholder="Enter your name"
            />

            <button onClick={handleFocus}>Focus Input</button>
        </div>
    )
}

export default FocusInput;