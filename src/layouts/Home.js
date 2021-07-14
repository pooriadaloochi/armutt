import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

// components

import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterHome from "components/Footers/FooterHome.js";

// views

import Settings from "views/Home/Settings.js";
import Tables from "views/Home/Tables.js";
import AllProduct from "views/Home/AllProduct/AllProduct.js";
import SingleProduct from "../views/Home/singleProfuct/SingleProduct";

export default function Home() {
    return (
        <>
            <Sidebar/>
            <div className="relative md:ml-64 bg-blueGray-100">
                <HeaderStats/>
                <Switch>
                    <Route exact path="/Home/AllProduct" component={AllProduct}/>
                    <Route exact path="/Home/AllProduct/SingleProduct" component={SingleProduct}/>
                    <Route exact path="/Home/settings" component={Settings}/>
                    <Route exact path="/Home/tables" component={Tables}/>
                    <Redirect exact from="/Home" to="/Home/AllProduct"/>
                </Switch>
                <FooterHome/>
            </div>
        </>
    );
}
