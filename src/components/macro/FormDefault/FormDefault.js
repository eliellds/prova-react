import React from "react";

export default function FormDefault(props) {

    if (props.title) {

        return (
            <>
                <div className="card card_border py-2 mb-4">
                    <div className="cards__heading">
                        <h3>{props.title} <span></span></h3>
                    </div>
                    <div className="card-body">
                        <form action={props.action} method={props.method}>
                            {props.children}
                        </form>
                    </div>
                </div>
            </>
        )
    } else {

        return (
            <>
                <div className="card card_border py-2 mb-4">
                    <div className="card-body">
                    <form action={props.action} method={props.method}>
                            {props.children}
                        </form>
                    </div>
                </div>
            </>
        )
    }

}