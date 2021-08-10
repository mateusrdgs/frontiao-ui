import React, { useEffect } from 'react'
import classnames from 'classnames'

const Badge = ({ className, ...props }) => {
    const classNames = classnames('badge', {
        [className]: className
    })

    useEffect(() => {
        console.log('testing useEffect')
    }, [])

    return (
        <div {...props} className={classNames} />
    )
}

export default Badge