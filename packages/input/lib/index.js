import { useCallback, useState } from 'react'
import classnames from 'classnames'
import Button from '@frontiao/button'

import style from './input.scss'

const Input = ({ className, onSave, defaultValue = '', ...props }) => {
  const [value, setValue] = useState(defaultValue)

  const classNames = classnames(style.input, {
    [className]: className
  })

  const onTodoSave = useCallback(() => {
    onSave(value)
    setValue('')
  }, [setValue, value, onSave])

  return (
    <div>
      <input {...props} className={classNames} value={value} onChange={e => setValue(e.target.value)} />
      <Button className={style.button} onClick={onTodoSave}>Save</Button>
    </div>
  )
}

export default Input