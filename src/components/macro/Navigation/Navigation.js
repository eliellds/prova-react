import React from "react";

export default function Navigation(props) {

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb my-breadcrumb">
                    {props.children}
                </ol>
            </nav>
        </>
    )

}