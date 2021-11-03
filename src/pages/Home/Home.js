import React from "react";
import "./Home.css";

import StatisticsCards from "../../components/macro/StatisticsCards/StatisticsCards"
import HomeCards from "../../components/macro/HomeCards/HomeCards"

export default function Home(props) {

    return (
        <>
            <div className="container-fluid content-top-gap">

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb my-breadcrumb">
                        <li className="breadcrumb-item"><a href="/home">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>
                <div className="welcome-msg pt-3 pb-4">
                    <h1>Hi <span className="text-primary">John</span>, Welcome back</h1>
                    <p>Very detailed & featured admin.</p>
                </div>

                {/* <!-- statistics data --> */}
                <div className="statistics">
                    <div className="row">
                        <div className="col-xl-6 pr-xl-2">
                            <div className="row">
                                <StatisticsCards textColor="text-primary" cardImage="lnr-users" cardNumbers='29.75 M' cardTitle="Total Users" />
                                <StatisticsCards textColor="text-secondary" cardImage="lnr-eye" cardNumbers='51.25 K' cardTitle="Daily Visitors" />
                            </div>
                        </div>
                        <div className="col-xl-6 pl-xl-2">
                            <div className="row">
                                <StatisticsCards textColor="text-success" cardImage="lnr-cloud-download" cardNumbers='166.89 M' cardTitle="Downloads" />
                                <StatisticsCards textColor="text-danger" cardImage="lnr-cart" cardNumbers='1,250k' cardTitle="Purchased" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- //statistics data --> */}

                {/* <!-- charts --> */}
                <div className="chart">
                    <div className="row">
                        <HomeCards title="Bar Chart" canvasId="barchart" cardFooter="Updated 2 hours ago" />
                        <div className="col-lg-6 pr-lg-2 chart-grid">
                            <div className="card text-center card_border">
                                <div className="card-header chart-grid__header">
                                    Bar Chart
                                </div>
                                <div className="card-body">
                                    {/* <!-- bar chart --> */}
                                    <div id="container">
                                        <canvas id="barchart"></canvas>
                                    </div>
                                    {/* <!-- //bar chart --> */}
                                </div>
                                <div className="card-footer text-muted chart-grid__footer">
                                    Updated 2 hours ago
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-lg-2 chart-grid">
                            <div className="card text-center card_border">
                                <div className="card-header chart-grid__header">
                                    Line Chart
                                </div>
                                <div className="card-body">
                                    {/* <!-- line chart --> */}
                                    <div id="container">
                                        <canvas id="linechart"></canvas>
                                    </div>
                                    {/* <!-- //line chart --> */}
                                </div>
                                <div className="card-footer text-muted chart-grid__footer">
                                    Updated just now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- //charts --> */}

            </div>
        </>
    )

}