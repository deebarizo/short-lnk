import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

import { routes, onAuthChange } from '../imports/routes/routes';

Tracker.autorun(() => {
	const isAuthenticated = !!Meteor.userId();
	onAuthChange(isAuthenticated);

	console.log('isAuthenticated', isAuthenticated);
});

Meteor.startup(() => {
	Meteor.call('greetUser', 'Mike', (err, res) => {
		console.log('greetUser arguments', err, res);
	});

	ReactDOM.render(routes, document.getElementById('app'));	
});