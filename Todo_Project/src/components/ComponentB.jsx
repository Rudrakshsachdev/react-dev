import ComponentA from "./ComponentA";
import { createContext } from "react";

export const AppContext = createContext();

const ComponentB = () => {
    return <AppContext.Consumer>
        {
            (context) => {
                return <div>
                    Component B - {context.name}
                </div>
            }
        }
    </AppContext.Consumer>
}

export default ComponentB;