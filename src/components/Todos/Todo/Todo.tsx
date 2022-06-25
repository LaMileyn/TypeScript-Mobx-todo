import React, {FC} from 'react';
import {ITodo} from "../../../appTypes/TodoTypes";
import s from './Todo.module.scss'
import DeleteIcon from "../../Icons/DeleteIcon";
import cn from 'classnames'
import TodoStore from "../../../mobx/Todos/TodoStore";
import {observer} from "mobx-react-lite";

interface IProps {
    todo: ITodo
}

const Todo: FC<IProps> = observer(({todo}) => {
    return (
        <>
            <div className={cn(s.todo)}>
                <div className={s.todo__checkbox}>
                    <input type="checkbox" className={s.checkbox}/>
                </div>
                <div className={s.todo__text}>
                    <div className={s.text__name}>{todo.name}</div>
                    <div className={s.text__date}>{todo.dateCreated}</div>
                </div>
                <div className={s.todo__deletion}>
                    <div className={s.deletion__img} onClick={ () => TodoStore.removeTodo(todo.id)}>
                        <DeleteIcon/>
                    </div>
                </div>
            </div>
        </>

    );
})

export default Todo;