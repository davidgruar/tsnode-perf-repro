import * as React from "react";

export const MyComponent: React.SFC<{foo: number}> = ({foo}) => {
    return (
        <div>
            The number is {foo}.
        </div>
    )
}