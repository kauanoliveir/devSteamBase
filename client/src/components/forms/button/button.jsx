import style from "./button.module.css"

const Button = ({children, fullwidth}) => {
  return (
    <div className={`${style.button} ${fullwidth && style.fullWidht}`}>
        {children}
    </div>
  )
}

export default Button