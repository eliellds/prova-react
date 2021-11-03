import React, { useState } from "react";
import './Menu.css'

import Logo from "../../../assets/images/menu/logo.png"

export default function Menu(props) {

    return (
        <>
            <div class="sidebar-menu noscroll sticky-sidebar-menu">

                {/* <!-- logo start --> */}
                <div class="logo">
                    <h1><a href="/home">Collective</a></h1>
                </div>

                {/* <!-- if logo is image enable this --> */}
                {/* <!-- image logo --
                <div class="logo">
                    <a href="index.html">
                        <img src="image-path" alt="Your logo" title="Your logo" class="img-fluid" style="height:35px;" />
                    </a>
                </div>--> */}
                {/* <!-- //image logo --> */}

                <div class="logo-icon text-center">
                    <a href="/home" title="logo"><img src={Logo} alt="logo-icon"/> </a>
                </div>
                {/* <!-- //logo end --> */}

                <div class="sidebar-menu-inner">

                    {/* <!-- sidebar nav start --> */}
                    <ul class="nav nav-pills nav-stacked custom-nav">
                        <li><a href="/home"><i class="fa fa-tachometer"></i><span> Dashboard</span></a>
                        </li>
                        <li><a href="/cards"><i class="fa fa-cogs"></i> <span>Default cards</span></a></li>
                        <li><a href="/pricing"><i class="fa fa-table"></i> <span>Pricing tables</span></a></li>
                        <li><a href="/blocks"><i class="fa fa-th"></i> <span>Content blocks</span></a></li>
                        <li><a href="/forms"><i class="fa fa-file-text"></i> <span>Forms</span></a></li>
                    </ul>
                    {/* <!-- //sidebar nav end --> */}
                    {/* <!-- toggle button start --> */}
                    <a class="toggle-btn" onclick="toggleMenu()">
                        <i class="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
                        <i class="fa fa-angle-double-right menu-collapsed__right"></i>
                    </a>
                    {/* <!-- //toggle button end --> */}
                </div>
            </div>
        </>
    )

}