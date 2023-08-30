import AuthPage from '../pages/AuthPage/AuthPage'
import DashboardPage from '../pages/DashboardPage/DashboardPage'

export enum AppRoutes {
	AUTH = '/auth',
	DASHBOARD = '/dashboard',
}

export const privateRoutes = [
	{
		path: AppRoutes.DASHBOARD,
		element: <DashboardPage />
	},
	{
		path: '*',
		element: <DashboardPage />
	},
]

export const publicRoutes = [
	{
		path: AppRoutes.AUTH,
		element: <AuthPage />
	},
	{
		path: '*',
		element: <AuthPage />
	},
]