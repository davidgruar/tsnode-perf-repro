import * as React from "react";
import { MyComponent } from "./MyComponent";

export const App: React.SFC = () => {
    return (
        <div>
            <MyComponent foo={42} />
            <MyComponent foo={43} />
        </div>
    )
}