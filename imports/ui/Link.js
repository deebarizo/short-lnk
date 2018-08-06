import React from 'react';

import { Links } from '../api/links';
import LinksList from '../ui/LinksList';
import PrivateHeader from '../ui/PrivateHeader';
import AddLink from '../ui/AddLink';

export default () => {
	return (
		<div>
			<PrivateHeader title="Your Links" />
			<LinksList />
			<AddLink />
		</div>
	);
}