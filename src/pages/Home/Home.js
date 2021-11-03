import React from "react";
import "./Home.css";

import StatisticsCards from "../../components/macro/StatisticsCards/StatisticsCards"
import HomeCards from "../../components/macro/HomeCards/HomeCards"
import Navigation from "../../components/macro/Navigation/Navigation";
import NavigationList from "../../components/micro/NavigationList/NavigationList";

export default function Home(props) {

    return (
        <>
            <div className="container-fluid content-top-gap">

                <Navigation>
                        <NavigationList refLink="/home" name="Home" />
                        <NavigationList active="active" name="Dashboard" />
                </Navigation>

                
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
                        <HomeCards title="Line Chart" canvasId="linechart" cardFooter="Updated just now" />
                    </div>
                </div>
                {/* <!-- //charts --> */}

            </div>
        </>
    )

}