import React, {FC} from 'react';
import {ITodo} from "../../appTypes/TodoTypes";
import Todo from "./Todo/Todo";
import s from './Todos.module.scss'
import PlusIcon from "../Icons/PlusIcon";
import TodoStore from "../../mobx/Todos/TodoStore";


interface IProps {
    todos: Array<ITodo>
}

const Todos: FC<IProps> = ({todos}) => {
    return (
        <div className={s.todos}>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo}/>
            ))}
            <div className={s.todos__add}>
                <div className={s.add__icon}>
                    <PlusIcon/>
                </div>
                <span onClick={ () => TodoStore.changeModal(true)}>Add more</span>
            </div>
        </div>

    );
}

export default Todos;