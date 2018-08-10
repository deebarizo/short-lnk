import React from 'react';

import LinksList from '../ui/LinksList';
import PrivateHeader from '../ui/PrivateHeader';
import AddLink from '../ui/AddLink';
import LinksListFilters from '../ui/LinksListFilters';

export default () => {
	return (
		<div>
			<PrivateHeader title="Your Links" />
			<LinksListFilters />
			<AddLink />
			<LinksList />
		</div>
	);
}