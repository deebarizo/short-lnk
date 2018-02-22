import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Redirect, Router, Switch, Route } from 'react-router-dom';
import history from './../history';

import Login from './../ui/Login';
import Signup from './../ui/Signup';
import Link from './../ui/Link';
import NotFound from './../ui/NotFound';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
let isUnauthenticatedPage = true;
let isAuthenticatedPage = false;

export const onAuthChange = (isAuthenticated) => {
    const pathname = history.location.pathname;
    isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    isAuthenticatedPage = authenticatedPages.includes(pathname);
	
	if (isAuthenticated) {
		if (isUnauthenticatedPage) {
			console.log('push to /links');
			history.replace('/links');
		}
	} else if (isAuthenticatedPage) {
		console.log('push to /');
		history.replace('/');
	}
};

export const routes = (
    <Router history={history}>
    	<div>
	        <Switch>
	        	<Route exact path="/" render={() => {
 					return Meteor.userId() ? <Redirect to="/links" /> : <Login />
 				}} />
	            <Route path="/signup" render={() => {
 					return Meteor.userId() ? <Redirect to="/links" /> : <Signup />
 				}} />
	            <Route path="/links" render={() => {
 					return Meteor.userId() ? <Link /> : <Redirect to="/" />
 				}} />
	            <Route component={NotFound} />
	        </Switch>
        </div>
    </Router>
);