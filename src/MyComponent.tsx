import * as React from "react";
import { getMessage } from "./getMessage";

export const MyComponent: React.SFC<{foo: number}> = ({foo}) => {
    return (
        <div>
            {getMessage(foo)}
        </div>
    )
}