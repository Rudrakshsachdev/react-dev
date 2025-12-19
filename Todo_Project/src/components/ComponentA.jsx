import { createContext } from "react";

export const AppContext = createContext();

const ComponentA = () => {
    return <AppContext.Provider value={{ name: "ReactJS" }}>
        <div>
            Component A
        </div>
    </AppContext.Provider>
}

export default ComponentA;