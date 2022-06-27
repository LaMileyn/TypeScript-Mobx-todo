import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import s from './InputAddTodo.module.scss'
import AcceptIcon from "../Icons/AcceptIcon";
import ExitIcon from "../Icons/ExitIcon";
import todoStore from "../../mobx/Todos/TodoStore";


interface IProps{
    cancel : Dispatch<SetStateAction<boolean>>
}
const InputAddTodo: FC<IProps> = ({ cancel }) => {

    const [value, setValue] = useState<string>("")
    const [error, setError] = useState<boolean>(false)
    const clickAcceptHandler = () => {
        if (value.trim()) {
            todoStore.addTodo(value)
            setValue("")
            cancel(false)
        }else{
            setError(true)
        }
    }

    return (
        <div className={s['add-new-todo']}>
            <h2>Добавить новую задачу</h2>
            <div className={s.input}>
                <div className={s.input__area}>
                    <input type="text" value={value}
                           onChange={(e) => setValue(e.target.value)}
                           placeholder={"Введите название"}
                    />
                    { error && <span className={s.input__error}>Поле не должно быть пустым</span>}

                </div>
                <div onClick={clickAcceptHandler} className={s.input__icon}>
                    <AcceptIcon/></div>
                <div className={s.input__icon} onClick={ () => cancel(false)}>
                    <ExitIcon/></div>
            </div>
        </div>
    );
}

export default InputAddTodo;