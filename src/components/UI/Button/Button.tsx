import React from 'react'
import s from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'danger' | 'default'
	children: React.ReactNode
}

const Button = ({ children, variant = 'default', ...props }: ButtonProps) => {
  return (
	<button className={s.btn.concat(' ', s[variant])} {...props}>
	  {children}
	</button>
  )
}

export default Button
