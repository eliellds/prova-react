import React from "react";

export default function NavigationList(props) {

    if (props.active) {

        return (
            <>
                <li className={`breadcrumb-item ` + props.active} aria-current="page">{props.name}</li>
            </>
        )
    } else {

        return (
            <>
                <li className="breadcrumb-item"><a href={props.refLink}>{props.name}</a></li>
            </>
        )
    }

}