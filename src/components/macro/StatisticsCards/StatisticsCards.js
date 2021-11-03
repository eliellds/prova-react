import React from "react";

export default function StatisticsCards(props) {

    return (
        <>
            <div className="col-sm-6 pr-sm-2 statistics-grid">
                <div className="card card_border border-primary-top p-4">
                    <i className={`lnr ` + props.cardImage}> </i>
                    <h3 className={props.textColor + ` number`}>{props.cardNumbers}</h3>
                    <p className="stat-text">{props.cardTitle}</p>
                </div>
            </div>
        </>
    )

}