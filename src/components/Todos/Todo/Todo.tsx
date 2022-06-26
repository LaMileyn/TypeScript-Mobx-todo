import React, {FC, useState} from 'react';
import {ITodo} from "../../../appTypes/TodoTypes";
import s from './Todo.module.scss'
import DeleteIcon from "../../Icons/DeleteIcon";
import cn from 'classnames'
import TodoStore from "../../../mobx/Todos/TodoStore";
import CheckBox from "../../CheckBox/CheckBox";
import BlackInput from "../../MyInputs/BlackInput";
import AcceptIcon from "../../Icons/AcceptIcon";
import ExitIcon from "../../Icons/ExitIcon";
import todoStore from "../../../mobx/Todos/TodoStore";

interface IProps {
    todo: ITodo
}

const Todo: FC<IProps> = ({todo}) => {

    const checkBoxHandlerClick = (todo: ITodo) => {
        if (todo.currentState === "done") {
            TodoStore.changeTodoState(todo.id, "process")
        } else {
            TodoStore.changeTodoState(todo.id, "done")
        }

    }


    const [editMode, setEditMode] = useState<boolean>(false)
    const [value, setValue] = useState<string>(todo.name)

    const clickAcceptHandler = (id : number) => {
        if (value.trim()) {
            todoStore.changeTodo(value,id)
            setValue("")
            setEditMode(false)
        }
    }

    return (
        <>
            <div className={cn(s.todo, {[s.completed]: todo.currentState === "done"})}>
                <div>
                    <CheckBox checked={todo.currentState === "done"} onChange={() => checkBoxHandlerClick(todo)}/>
                </div>
                {
                    editMode
                        ? (
                            <div className={s.editSection}>
                                <div className={s.edit__controls}>
                                    <BlackInput value={value}
                                                onChange={  (e) => setValue(e.currentTarget.value)}/>
                                    <div className={s.edit__icon} onClick={ () => clickAcceptHandler(todo.id)}>
                                        <AcceptIcon/>
                                    </div>
                                    <div className={s.edit__icon} onClick={() => setEditMode(false)}>
                                        <ExitIcon/>
                                    </div>
                                </div>
                            </div>
                        )
                        : (
                            <div className={s.todo__text} onClick={ todo.currentState === "process" ? () => setEditMode(true) : undefined}>
                                <div className={s.text__name}>{todo.name}</div>
                                <div className={s.text__date}>{todo.created}</div>
                            </div>
                        )
                }

                <div className={s.todo__deletion}>
                    <div className={s.deletion__img} onClick={() => TodoStore.removeTodo(todo.id)}>
                        <DeleteIcon/>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Todo;