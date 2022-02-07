import Plausible from 'plausible-tracker';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';
import './app/components/globals/globals.scss';
import './app/components/globals/lib-globals.scss';
import './app/components/globals/animations.scss';
import drinks from './assets/data/sorted_final.json';
import './i18n';

Plausible({
	domain: 'demo.boba.watch',
});

let drinkids = drinks.map(drink => {
	localStorage.setItem(drink.id, JSON.stringify(drink));
	return drink.id;
});

localStorage.setItem('drinkids', JSON.stringify(drinkids));
localStorage.setItem(
	'metrics',
	JSON.stringify({
		td: 5,
		tc: 2815,
		ad: 563,
		ctd: 573,
		ctc: 329068,
		cad: 574.2897033158813,
		d: [
			[
				1, 0, 0, 0, 14, 7, 4, 3, 3, 1, 4, 1, 6, 7, 8, 2, 3, 1, 0, 1, 1,
				4, 0, 0,
			],
			[
				0, 0, 0, 3, 10, 4, 7, 8, 9, 2, 5, 5, 10, 3, 7, 3, 2, 6, 0, 1, 0,
				1, 1, 0,
			],
			[
				0, 0, 0, 1, 12, 7, 2, 12, 3, 7, 6, 1, 7, 5, 7, 3, 0, 1, 2, 1, 2,
				1, 0, 0,
			],
			[
				0, 0, 0, 2, 13, 9, 2, 8, 9, 6, 8, 6, 8, 4, 2, 6, 0, 0, 3, 0, 1,
				0, 1, 0,
			],
			[
				0, 0, 1, 4, 9, 9, 4, 5, 12, 6, 6, 4, 3, 9, 3, 1, 4, 4, 0, 3, 1,
				0, 0, 0,
			],
			[
				0, 0, 0, 1, 11, 8, 3, 4, 6, 3, 6, 5, 7, 8, 2, 4, 6, 1, 0, 2, 2,
				2, 0, 0,
			],
			[
				0, 0, 0, 0, 9, 10, 6, 8, 2, 6, 5, 0, 4, 5, 5, 1, 5, 2, 5, 3, 1,
				0, 1, 0,
			],
		],
	})
);

ReactDOM.render(
	<Router basename={process.env.PUBLIC_URL}>
		<App />
	</Router>,
	document.getElementById('root')
);

/**
 * Service worker is activated but doesn't do much other than default
 * react service worker code.
 * Things to be implemented: cache, indexdb, complete offline mode
 */
serviceWorker.register();
