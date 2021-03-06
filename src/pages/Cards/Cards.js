import React from "react";
import "./Cards.css"

import Navigation from "../../components/macro/Navigation/Navigation";
import NavigationList from "../../components/micro/NavigationList/NavigationList";

export default function Cards(props) {

    return (
        <>
            <div className="container-fluid content-top-gap">
                {/* <!-- breadcrumbs --> */}
                <Navigation>
                        <NavigationList refLink="/home" name="Home" />
                        <NavigationList refLink="#" name="Elements" />
                        <NavigationList active="active" name="Cards" />
                </Navigation>
                {/* <!-- //breadcrumbs --> */}
                {/* <!-- cards --> */}
                <section className="template-cards">
                    {/* <!-- Card Columns --> */}
                    <div className="card card_border mb-5">
                        <div className="cards__heading">
                            <h3>Card Columns</h3>
                        </div>
                        <div className="card-body">
                            <div className="card-columns">
                                <div className="card">
                                    <img src="assets/images/cart.jpg" className="card-img-top" alt="..."/>
                                    <div className ="card-body">
                                    <h5 className ="card-title">Card title that wraps to a new line</h5>
                                    <p className ="card-text mb-4">This is a longer card with supporting text below as a natural lead-in to
                                    additional content.This content is a little bit longer.</p>
                                    </div>
                                </div>
                                <div className="card p-3">
                                    <blockquote className="blockquote mb-0 card-body">
                                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                            ante.
                                        </p>
                                        <footer className="blockquote-footer">
                                            <small className="text-muted">
                                                Someone famous in <cite title="Source Title">Source Title</cite>
                                            </small>
                                        </footer>
                                    </blockquote>
                                </div>
                                <div className="card">
                                    <img src="assets/images/template2.jpg" className="card-img-top" alt="..."/>
                                    <div className ="card-body">
                                    <h5 className ="card-title">Card title</h5>
                                    <p className ="card-text  mb-4">This card has supporting text below as a natural lead-in to additional
                                    content.
                                    </p>
                                    <p className ="card-text"><small className ="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div className="card bg-primary text-white text-center p-3">
                                    <blockquote className="blockquote mb-0">
                                        <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                            erat.
                                        </p>
                                        <footer className="blockquote-footer text-white">
                                            <small>
                                                Someone famous in <cite title="Source Title">Source Title</cite>
                                            </small>
                                        </footer>
                                    </blockquote>
                                </div>
                                <div className="card text-center">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text  mb-4">This card has a regular title and short paragraphy of text below it.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="assets/images/dashboard.jpg" className="card-img-top" alt="..."/>
                                </div>
                                <div className="card p-3 text-right">
                                    <blockquote className="blockquote mb-0">
                                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                            ante.
                                        </p>
                                        <footer className="blockquote-footer">
                                            <small className="text-muted">
                                                Someone famous in <cite title="Source Title">Source Title</cite>
                                            </small>
                                        </footer>
                                    </blockquote>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text  mb-4">This is another card with title and supporting text below. This card has
                                            some
                                            additional content to make it slightly taller overall.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Card Columns --> */}

                    {/* <!-- Grid Columns --> */}
                    <div className="card card_border mb-5">
                        <div className="cards__heading">
                            <h3>Grid Columns</h3>
                        </div>
                        <div className="card-body">
                            <div className="row row-cols-1 row-cols-md-2">
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="assets/images/template2.jpg" className="card-img-top" alt="..."/>
                                        <div className ="card-body">
                                        <h5 className ="card-title">Card title</h5>
                                        <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to
                                        additional
                                        content.This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="assets/images/desk.jpg" className="card-img-top" alt="..."/>
                                        <div className ="card-body">
                                        <h5 className ="card-title">Card title</h5>
                                        <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to
                                        additional
                                        content.This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="assets/images/cart.jpg" className="card-img-top" alt="..."/>
                                        <div className ="card-body">
                                        <h5 className ="card-title">Card title</h5>
                                        <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to
                                        additional
                                        content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="assets/images/dashboard.jpg" className="card-img-top" alt="..."/>
                                        <div className ="card-body">
                                        <h5 className ="card-title">Card title</h5>
                                        <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to
                                        additional
                                        content.This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Grid Columns --> */}

                </section>
                {/* <!-- //cards --> */}

            </div>
        </>
    )

}