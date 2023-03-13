import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import './App.css';
import Home from './routes/home';
import Meteors from './routes/meteors';
import Events from './routes/events';
import About from './routes/about';
import Rover from './routes/rover';
import ErrorPage from './routes/errorPage';

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
