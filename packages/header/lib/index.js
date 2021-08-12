import classnames from 'classnames'
import Button from '@frontiao/button'

import style from './header.scss';

const Header = ({ className, children, ...props }) => {
  const classNames = classnames(style.header, {
    [className]: className
  })

  return (
    <header className={classNames} {...props}>
      { children }
      <Button>novo botao</Button>
    </header>
  )
}

export default Header