import React from "react";


export default function ReactIf(props: {condition: boolean | undefined; children: React.ReactNode}): JSX.Element {
    return props.condition === undefined || !props.condition ? <></>: <>{props.children}</>;
}