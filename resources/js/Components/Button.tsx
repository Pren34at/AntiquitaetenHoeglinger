import React from 'react'
import {ButtonContent, Button as B, Icon, Label} from 'semantic-ui-react'

interface ButtonProps{
  onClick?: () => void;
  href?: string;
  className?: string;
  children: React.ReactNode;
}


const Button:React.FC<ButtonProps> = ({onClick, href, className, children}) => {
  return(
  <B primary onClick={onClick} className={className}>
    <a href={href}>{children}</a>
  </B>
  )
}

export default Button;