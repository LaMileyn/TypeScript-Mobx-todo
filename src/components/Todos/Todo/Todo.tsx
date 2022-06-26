import React, {FC} from 'react';
import {ITodo} from "../../../appTypes/TodoTypes";
import s from './Todo.module.scss'
import DeleteIcon from "../../Icons/DeleteIcon";
import cn from 'classnames'
import TodoStore from "../../../mobx/Todos/TodoStore";
import CheckBox from "../../CheckBox/CheckBox";

interface IProps {
    todo: ITodo
}

const Todo: FC<IProps> = ({todo}) => {

    const checkBoxHandlerClick = (todo : ITodo) =>{
        if ( todo.currentState === "done") {
            TodoStore.changeTodoState(todo.id,"process")
        }else{
            TodoStore.changeTodoState(todo.id,"done")
        }

    }

    return (
        <>
            <div className={cn(s.todo, { [s.completed] : todo.currentState === "done"})}>
                <div >
                    <CheckBox checked={todo.currentState === "done"} onChange={() => checkBoxHandlerClick(todo) }  />
                </div>
                <div className={s.todo__text}>
                    <div className={s.text__name}>{todo.name}</div>
                    <div className={s.text__date}>{todo.created}</div>
                </div>
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