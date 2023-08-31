import { signInWithPopup } from 'firebase/auth'
import Button from '../../components/UI/Button/Button'
import { auth, googleProvider } from '../../firebase/firebase'
import s from './AuthPage.module.scss'
import UserStore from '../../store/UserStore'
import { observer } from "mobx-react-lite"

const AuthPage = observer(() => {
	const loginHandler = async () => {
		try {
			const { user } = await signInWithPopup(auth, googleProvider)
			UserStore.login({
				email: user.email ?? '',
				avatar: user.photoURL ?? '',
				invoices: []
			})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className={s.auth}>
			<div className='container'>
				<h2 className={s.title}>Invoice App</h2>
				<div className={s.body}>
					<div className={s.bodyTitle}>Authentification</div>
					<Button
						onClick={loginHandler}
						variant='primary'>
						Login with{' '}
						<img
							style={{ paddingLeft: 8, width: 25 }}
							src='https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg'
							alt='google icon'
						/>
					</Button>
				</div>
			</div>
		</div>
	)
})

export default AuthPage
