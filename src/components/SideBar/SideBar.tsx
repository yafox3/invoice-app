import React from 'react'
import s from './SideBar.module.scss'

const SideBar = () => {
  return (
	<div className={s.sidebar}>
		<div className={s.items}>
			<div className={s.decor}></div>
			<div className={s.avatar}>
				<img src="https://placehold.co/120" alt="avatar" />
			</div>
		</div>
	</div>
  )
}

export default SideBar
