import React from "react";

export default function Input(props) {

    if (props.help) {

        return (
            <>
                <label for={props.inputId} className="input__label">{props.labelName}</label>
                <input type={props.inputType} className="form-control input-style" id={props.inputId}
                    aria-describedby={props.help} placeholder={props.inputPlaceholder} />
                <small id={props.help} className="form-text text-muted">{props.helpText}</small>
            </>
        )
    } else if (props.check) {

        return (
            <>
                <input type={props.inputType} className="form-check-input checkbox" id={props.inputId} />
                <label className="form-check-label checkmark" for={props.inputId}>{props.labelName}</label>
            </>
        )
    } else {

        return (
            <>
                <label for={props.inputId} className="input__label">{props.labelName}</label>
                <input type={props.inputType} className="form-control input-style" id={props.inputId}
                    aria-describedby={props.help} placeholder={props.inputPlaceholder} />
            </>
        )
    }


}