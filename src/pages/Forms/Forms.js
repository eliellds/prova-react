import React from "react";
import "./Forms.css";

import Navigation from "../../components/macro/Navigation/Navigation";
import NavigationList from "../../components/micro/NavigationList/NavigationList";
import FormDefault from "../../components/macro/FormDefault/FormDefault";
import Input from "../../components/micro/Input/Input";

export default function Forms(props) {

    return (
        <>
            <div className="container-fluid content-top-gap">

                {/* <!-- breadcrumbs --> */}
                <Navigation>
                    <NavigationList refLink="/home" name="Home" />
                    <NavigationList active="active" name="Forms" />
                </Navigation>
                {/* <!-- //breadcrumbs --> */}
                {/* <!-- forms --> */}
                <section className="forms">
                    {/* <!-- forms 1 --> */}
                    <FormDefault title="Forms" action="#" method="post">
                        <div className="form-group">
                            <Input inputId="exampleInputEmail1" labelName="Email address" inputType="email"
                                inputPlaceholder="Enter email" help="emailHelp" helpText="We'll never share your email with anyone else." />

                        </div>
                        <div className="form-group">
                            <Input inputId="exampleInputPassword1" labelName="Password" inputType="password" inputPlaceholder="Password" />

                        </div>
                        <div className="form-check check-remember check-me-out">
                            <Input check="true" inputId="exampleCheck1" labelName="Check me out" inputType="checkbox" />

                        </div>
                        <button type="submit" className="btn btn-primary btn-style mt-4">Submit</button>
                    </FormDefault>

                    {/* <!-- //forms 1 --> */}

                    {/* <!-- forms 2 --> */}
                    <FormDefault action="#" method="post">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <Input inputId="inputEmail4" labelName="Email" inputType="email"
                                    inputPlaceholder="Email" />
                                
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4" className="input__label">Password</label>
                                <input type="password" className="form-control input-style" id="inputPassword4" placeholder="Password" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress" className="input__label">Address</label>
                            <input type="text" className="form-control input-style" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="form-group">
                            <label for="inputAddress2" className="input__label">Address 2</label>
                            <input type="text" className="form-control input-style" id="inputAddress2"
                                placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputCity" className="input__label">City</label>
                                <input type="text" className="form-control input-style" id="inputCity" />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState" className="input__label">State</label>
                                <select id="inputState" className="form-control input-style">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label for="inputZip" className="input__label">Zip</label>
                                <input type="text" className="form-control input-style" id="inputZip" />
                            </div>
                        </div>
                        <div className="form-check check-remember check-me-out">
                            <input className="form-check-input checkbox" type="checkbox" id="gridCheck" />
                            <label className="form-check-label checkmark" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-style mt-4">Sign in</button>
                    </FormDefault>
                    {/* <!-- //forms 2 --> */}

                </section>
                {/* <!-- //forms --> */}

            </div>
        </>
    )

}