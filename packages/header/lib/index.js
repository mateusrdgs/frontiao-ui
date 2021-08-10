import classnames from 'classnames'

import style from './header.scss';

const Header = ({ className, ...props }) => {
  const classNames = classnames(style.header, {
    [className]: className
  })

  return (
    <header {...props} className={classNames} />
  )
}

export default Header