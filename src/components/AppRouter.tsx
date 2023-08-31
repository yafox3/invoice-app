import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes/routes'
import { observer } from 'mobx-react-lite'
import UserStore from '../store/UserStore'

const AppRouter = observer(() => {
	const isAuth = UserStore.getUser
	return (
		<Routes>
			{isAuth.email
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
})

export default AppRouter
