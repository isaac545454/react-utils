import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './routes-user'
import { Home } from '@/presentation/pages/Home'
import { Grid } from '@/presentation/pages/Grid'
import { Voice } from '@/presentation/pages/Voice'
import { Post } from '@/presentation/pages/Posts'
import { Example } from '@/presentation/pages/example'
import { Accessibility } from '@/presentation/pages/accessibility'
import { DataList } from '@/presentation/pages/test'
import { ArrayPage } from '@/presentation/pages/Array'
import { Reducer } from '@/presentation/pages/XSS'
import { MultiForm } from '@/presentation/pages/MultiForm'

export const router = createBrowserRouter([
	{
		path: ROUTES.HOME,
		element: <Home />,
	},
	{
		path: ROUTES.GRID,
		element: <Grid state="AA" />,
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
	{
		path: ROUTES.XSS,
		element: <Reducer />,
	},
	{
		path: ROUTES.MULTIFORM,
		element: <MultiForm />,
	},
	{
		path: ROUTES.MULTIFORMEDIT,
		element: <MultiForm />,
	},
])
