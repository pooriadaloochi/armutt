import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Auth from "../layouts/Auth";
import Landing from "../views/Landing";
import Profile from "../views/Profile";
import {ToastContainer} from "react-toastify";
import Home from "../layouts/Home";

const App = () => {
    return (
        <BrowserRouter basename="/armutttt">
            <Switch>
                <PublicRoute path="/Auth"  component={Auth}/>

                <PrivateRoute path="/" render={() =>
                    <Switch>
                        <Route path="/Home" component={Home}/>
                        <Route path="/landing"  component={Landing}/>
                        <Route path="/profile" component={Profile}/>
                        <Redirect from="/auth" to="/Home"/>
                        <Redirect exact from="/" to="/Home" />
                    </Switch>
                }/>
            </Switch>
            <ToastContainer/>
        </BrowserRouter>

    );
};

const isLogin =()=> !!localStorage.getItem("x-auth-token");
const PublicRoute = ({component, props})=>{
    return <Route {...props} render={(props)=>{
        if (isLogin())
            return <Redirect to={"/"}/>
        else  {
            return React.createElement(component,props)
        }
    }}/>
};

const PrivateRoute = ({render,...props})=>{
    return <Route {...props} render={(props)=>{
        if(isLogin())
            return render(props);
        else return <Redirect to={"/auth"}/>
    }}/>
}


export default App;