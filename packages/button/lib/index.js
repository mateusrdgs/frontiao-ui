import React, { useEffect } from 'react'
import classnames from 'classnames'

const Button = ({ className, ...props }) => {
    const classNames = classnames('button', {
        [className]: className
    })

    useEffect(() => {
        console.log('hello world')
    }, [])

    return (
        <button {...props} className={classNames} />
    )
}

export default Button