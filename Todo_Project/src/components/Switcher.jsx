import { useState } from "react";

const Switcher = () => {
    const [sw, Setsw] = useState(false);

    return <div>
        {
            sw ? (
                <span>
                    The switch is ON
                </span>
            ) : (
                <span>
                    The switch is OFF
                </span>
            )
        }

        <br />

        <input type="text" key={sw ? "on" : "off"} placeholder="Type something..." />

        <br />
        <button onClick={() => Setsw((s) => !s)}>Toggle Switch</button>
    </div>
}

export default Switcher;