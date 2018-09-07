import React from "react";
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import "./Navigation.css";

const Navigation = () =>
    <AuthUserContext.Consumer>
        {authUser => authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </AuthUserContext.Consumer>

const NavigationAuth = () =>
    <div>
        <ul className="content">
            <li><Link to={routes.LANDING}>Landing</Link></li>
            <li><Link to={routes.HOME}>Home</Link></li>
            <li><Link to={routes.ACCOUNT}>Account</Link></li>
            <li><SignOutButton /></li>
        </ul>
    </div>

//reminder, I took out a link to Landing here below

const NavigationNonAuth = () =>
    <div className="container">
        <div className="row1">
            <div className="col"><Link to={routes.LANDING} className="home">Sheridan Brew</Link></div>
        </div>
        <div className="row">
            <div className="col"><Link to={routes.SIGN_IN} className="signIn">Sign In / Sign Up</Link></div>
        </div>
    </div>
    
export default Navigation;