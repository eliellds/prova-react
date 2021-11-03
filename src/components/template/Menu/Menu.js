import React, { useState } from "react";
import './Menu.css'

import Logo from "../../../assets/images/menu/logo.png"

export default function Menu(props) {

    return (
        <>
            <div className="sidebar-menu noscroll sticky-sidebar-menu">

                {/* <!-- logo start --> */}
                <div className="logo">
                    <h1><a href="/home">Collective</a></h1>
                </div>

                {/* <!-- if logo is image enable this --> */}
                {/* <!-- image logo --
                <div className="logo">
                    <a href="index.html">
                        <img src="image-path" alt="Your logo" title="Your logo" className="img-fluid" style="height:35px;" />
                    </a>
                </div>--> */}
                {/* <!-- //image logo --> */}

                <div className="logo-icon text-center">
                    <a href="/home" title="logo"><img src={Logo} alt="logo-icon"/> </a>
                </div>
                {/* <!-- //logo end --> */}

                <div className="sidebar-menu-inner">

                    {/* <!-- sidebar nav start --> */}
                    <ul className="nav nav-pills nav-stacked custom-nav">
                        <li><a href="/home"><i className="fa fa-tachometer"></i><span> Dashboard</span></a>
                        </li>
                        <li><a href="/cards"><i className="fa fa-cogs"></i> <span>Default cards</span></a></li>
                        <li><a href="/pricing"><i className="fa fa-table"></i> <span>Pricing tables</span></a></li>
                        <li><a href="/blocks"><i className="fa fa-th"></i> <span>Content blocks</span></a></li>
                        <li><a href="/forms"><i className="fa fa-file-text"></i> <span>Forms</span></a></li>
                    </ul>
                    {/* <!-- //sidebar nav end --> */}
                    {/* <!-- toggle button start --> */}
                    <a className="toggle-btn" onclick="toggleMenu()">
                        <i className="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
                        <i className="fa fa-angle-double-right menu-collapsed__right"></i>
                    </a>
                    {/* <!-- //toggle button end --> */}
                </div>
            </div>
        </>
    )

}