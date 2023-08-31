import React from 'react'
import s from './SideBar.module.scss'
import UserStore from '../../store/UserStore'
import { observer } from 'mobx-react-lite'

const SideBar = observer(() => {
  return (
	<div className={s.sidebar}>
		<div className={s.items}>
			<div className={s.decor} />
			<div className={s.avatar}>
				<img src={UserStore.getAvatar} alt="avatar" />
			</div>
		</div>
	</div>
  )
})

export default SideBar
