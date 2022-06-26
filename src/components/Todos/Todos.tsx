import React, {FC, useState} from 'react';
import {ITodo} from "../../appTypes/TodoTypes";
import Todo from "./Todo/Todo";
import s from './Todos.module.scss'
import PlusIcon from "../Icons/PlusIcon";
import {observer} from "mobx-react-lite";
import BlackInput from "../MyInputs/BlackInput";
import AcceptIcon from "../Icons/AcceptIcon";
import ExitIcon from "../Icons/ExitIcon";
import todoStore from "../../mobx/Todos/TodoStore";


interface IProps {
    todos: Array<ITodo>
}

const Todos: FC<IProps> = observer(({todos}) => {

    // new todo
    const [adding, setAdding] = useState<boolean>(false)
    // new todo Value
    const [value, setValue] = useState<string>("")
    // new todo Value
    const [error, setError] = useState<boolean>(false)
    // clickAccept
    const clickAcceptHandler = () => {
        if (value.trim()) {
            todoStore.addTodo(value)
            setValue("")
            setError(false)
            setAdding(false)
        } else {
            setError(true)
        }
    }
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
                        <div className={s.inputAdding}>
                            <div className={s.input}>
                                <BlackInput placeholder={"Введите название"} value={value}
                                            autoFocus
                                            onChange={(event) => setValue(event.currentTarget.value)}
                                />
                                <div onClick={clickAcceptHandler} className={s.input__icon}>
                                    <AcceptIcon/></div>
                                <div className={s.input__icon} onClick={() => setAdding(false)}>
                                    <ExitIcon/></div>
                            </div>
                            {error && <span className={s.input__error}>Поле не должно быть пустым</span>}
                        </div>
                    )
                    : (
                        <div className={s.todos__add} onClick={() => setAdding(true)}>
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