import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './routes-user'
import { Home } from '@pages/Home'
import { Grid } from '@pages/Grid'
import { Voice } from '@pages/Voice'
import { Post } from '@pages/Posts'
import { Example } from '@pages/example'
import { Accessibility } from '@pages/accessibility'
import { DataList } from '@pages/test'
import { ArrayPage } from '@pages/Array'

export const router = createBrowserRouter([
	{
		path: ROUTES.HOME,
		element: <Home />,
	},
	{
		path: ROUTES.GRID,
		element: <Grid />,
	},
	{
		path: ROUTES.VOICE,
		element: <Voice />,
	},
	{
		path: ROUTES.POSTS,
		element: <Post />,
	},
	{
		path: ROUTES.EXAMPLE,
		element: <Example />,
	},
	{
		path: ROUTES.ACCESSIBILITY,
		element: <Accessibility />,
	},
	{
		path: ROUTES.TEST,
		element: <DataList />,
	},
	{
		path: ROUTES.ARRAY,
		element: <ArrayPage />,
	},
])
