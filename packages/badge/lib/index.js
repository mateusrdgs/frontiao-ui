import React from 'react'
import classnames from 'classnames'

const Badge = ({ className, ...props }) => {
    const classNames = classnames('badge', {
        [className]: className
    })

    return (
        <div className={classNames} {...props} />
    )
}

export default Badge