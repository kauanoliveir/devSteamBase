import style from "./button.module.css"

const Button = ({children, fullwidth, ...props }) => {
  return (
    <div className={`${style.button} ${fullwidth && style.fullWidht}`} {...props}>
        {children}
    </div>
  )
}

export default Button