import style from './task.scss'

const Task = ({ id, description, done, onCheck }) => {
  return (
    <li className={style.task}>
      <input className={style.input} type="checkbox" id={id} defaultChecked={done} onChange={onCheck(id)} />
      <span className={style.mark} onClick={onCheck(id)} />
      <label className={style.label} htmlFor={id}>
        { description }
      </label>
    </li>
  )
}

export default Task