import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import './App.css';
import Home from './views/home';
import Meteors from './views/meteors';
import Events from './views/events';
import About from './views/about';
import Rover from './views/rover';
import ErrorPage from './views/errorPage';

const AppLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'meteors',
				element: <Meteors />,
			},
			{
				path: 'events',
				element: <Events />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'rover',
				element: <Rover />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
