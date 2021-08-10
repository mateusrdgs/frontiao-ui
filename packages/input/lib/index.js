import { useCallback, useState } from 'react'
import classnames from 'classnames'
import Button from '@frontiao/button'

import style from './input.scss'

const Input = ({ className, onSave, ...props }) => {
  const [value, setValue] = useState('')

  const classNames = classnames(style.input, {
    [className]: className
  })

  const onTodoSave = useCallback(() => {
    onSave(value)
  }, [value, onSave])

  return (
    <div>
      <input {...props} className={classNames} onChange={e => setValue(e.target.value)} />
      <Button className={style.button} onClick={onTodoSave}>Save</Button>
    </div>
  )
}

export default Input