import React from "react";

export default function HomeCards(props) {

    return (
        <>
            <div className="col-lg-6 pr-lg-2 chart-grid">
                <div className="card text-center card_border">
                    <div className="card-header chart-grid__header">
                        {props.title}
                    </div>
                    <div className="card-body">
                        {/* <!-- bar chart --> */}
                        <div id="container">
                            <canvas id={props.canvasId}></canvas>
                        </div>
                        {/* <!-- //bar chart --> */}
                    </div>
                    <div className="card-footer text-muted chart-grid__footer">
                        {props.cardFooter}
                    </div>
                </div>
            </div>
        </>
    )

}