import { render } from 'solid-js/web';
import { Route, Router } from '@solidjs/router';

import './index.css';
import ListPage from './App';

render(
	() => (
		<Router>
			<Route path="/" component={ListPage} />
		</Router>
	),
	document.getElementById('root')!
);
