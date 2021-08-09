import React from 'react'
import classnames from 'classnames'

console.log('testing build again 3')

const Badge = ({ className, ...props }) => {
    const classNames = classnames('badge', {
        [className]: className
    })

    return (
        <div {...props} className={classNames} />
    )
}

export default Badge