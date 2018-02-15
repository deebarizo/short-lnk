import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Router, Switch, Route } from 'react-router-dom';
import { Tracker } from 'meteor/tracker';
import history from './../imports/history';

import Login from './../imports/ui/Login';
import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
let isUnauthenticatedPage = true;
let isAuthenticatedPage = false;

const routes = (
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
 					return Meteor.userId() ? <Link /> : <Redirect to="/signup" />
 				}} />
	            <Route component={NotFound} />
	        </Switch>
        </div>
    </Router>
);

Tracker.autorun(() => {
	const isAuthenticated = !!Meteor.userId();

	console.log('isAuthenticated', isAuthenticated);

    const pathname = history.location.pathname;
    isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    isAuthenticatedPage = authenticatedPages.includes(pathname);
	
	if (isAuthenticated) {
		if (isUnauthenticatedPage) {
			console.log('push to /links');
			history.push('/links');
		}
	} else if (isAuthenticatedPage) {
		console.log('push to /');
		history.push('/');
	}
});

Meteor.startup(() => {
	ReactDOM.render(routes, document.getElementById('app'));	
});