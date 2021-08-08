import React from 'react'
import classnames from 'classnames'

const Badge = ({ className, ...props }) => {
    const classNames = classnames('badge', {
        [className]: className
    })

    return (
        <div {...props} className={classNames} />
    )
}

export default Badge