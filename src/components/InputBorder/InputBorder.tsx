import React, {FC, useState} from 'react';
import s from './InputBorder.module.scss'
import TodoStore from "../../mobx/Todos/TodoStore";

interface IProps {
    text? : string
}

const InputBorder : FC<IProps> = ({ text }) => {

    const { modalTodoType : type, changeModal, addTodo, changeTodo } = TodoStore

    const [value,setValue] = useState( type === "change" ? text : "")

    return (
        <div className={s['input-border']}>
            <input type="text"
                   className={s.input}
                   placeholder={"Name.."}
            />
            {type === "change" && <button className={s.btn} onClick={() =>changeModal(false)}>Изменить</button>}
            {type !== "change" && <button className={s.btn} onClick={() =>changeModal(false)}>Добавить</button>}
        </div>
    );
}

export default InputBorder;