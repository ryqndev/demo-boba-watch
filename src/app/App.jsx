import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import clsx from 'clsx';
import AuthUserContext from './controller/contexts/AuthUserContext';
import useTheme from './controller/hooks/useTheme';
import { Blog } from './pages';
import Navigation from './components/Navigation';
import UserIcon from './components/UserIcon';
import cn from './App.module.scss';
import 'react-markdown-editor-lite/lib/index.css';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const History = lazy(() => import('./pages/History'));
const Add = lazy(() => import('./pages/Add'));
const Locator = lazy(() => import('./pages/Locator'));

const App = () => {
	const [user, setUser] = useState({
		profile: {
			budget: 10000,
			limit: 15,
			sharing: false,
		}
	});
	const { theme, ...themeOptions } = useTheme();

	return (
		<AuthUserContext.Provider value={[user, setUser]}>
			<Suspense fallback={<div></div>}>
				<UserIcon theme={{ theme, ...themeOptions }} />
				<Suspense
					fallback={<div className={cn['page-background']}></div>}
				>
					<Routes>
						<Route
							path='history'
							element={<History theme={theme} />}
						/>
						<Route path='add' element={<Add />} />
						<Route path='edit/:id' element={<Add />} />
						<Route path='map' element={<Locator theme={theme} />} />
						<Route path='blog' element={<Blog />} />
						<Route path='*' element={<Dashboard theme={theme} />} />
					</Routes>
				</Suspense>
				<Navigation />{' '}
			</Suspense>
		</AuthUserContext.Provider>
	);
};

export default App;
