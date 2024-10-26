import s from './Button.module.css'

const Button = ({onClick, children, title, disabled, type}) => {
  
  return (
    <button type={type} title={title} onClick={onClick} className={s.button} disabled={(disabled === undefined ? false : true) && (!disabled) }>{children}</button>
  )
}

export default Button