import React from 'react'
import classnames from 'classnames'

const Button = ({ className, ...props }) => {
    const classNames = classnames('button', {
        [className]: className
    })

    return (
        <button {...props} className={classNames} />
    )
}

export default Button