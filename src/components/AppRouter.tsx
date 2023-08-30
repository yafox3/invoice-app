import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes/routes'

const AppRouter = () => {
	const isAuth = true
	return (
		<Routes>
			{isAuth
				? privateRoutes.map(route => (
						<Route
							key={route.path}
							{...route}
						/>
				  ))
				: publicRoutes.map(route => (
						<Route
							key={route.path}
							{...route}
						/>
				  ))}
		</Routes>
	)
}

export default AppRouter
