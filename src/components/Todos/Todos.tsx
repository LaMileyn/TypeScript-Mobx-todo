import React, {FC, useState} from 'react';
import {ITodo} from "../../appTypes/TodoTypes";
import Todo from "./Todo/Todo";
import s from './Todos.module.scss'
import PlusIcon from "../Icons/PlusIcon";
import TodoStore from "../../mobx/Todos/TodoStore";
import InputAddTodo from "../inputAddTodo/InputAddTodo";
import {observer} from "mobx-react-lite";


interface IProps {
    todos: Array<ITodo>
}

const Todos: FC<IProps> = observer(({todos}) => {

    // new todo
    const [adding, setAdding] = useState<boolean>(false)

    return (
        <div className={s.todos}>
            {
                !todos.length && <div className={s.todos__empty}>Туду пока что нет...</div>
            }
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo}/>
            ))}
            {
                adding
                    ? (
                        <div>
                            <InputAddTodo cancel ={setAdding} />
                        </div>
                    )
                    : (
                        <div className={s.todos__add} onClick={ () => setAdding(true)}>
                            <div className={s.add__icon}>
                                <PlusIcon/>
                            </div>
                            <span>Add more</span>
                        </div>
                    )
            }


        </div>

    );
})

export default Todos;