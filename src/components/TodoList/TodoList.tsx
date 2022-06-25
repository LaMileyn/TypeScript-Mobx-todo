import React, {ChangeEvent, FC} from 'react';
import s from './TodoList.module.scss'
import {observer} from "mobx-react-lite";
import Todos from "../Todos/Todos";
import TodoStore from "../../mobx/Todos/TodoStore";
import todoStore from "../../mobx/Todos/TodoStore";
import {todoStatesToFilter} from "../../appTypes/TodoTypes";


const TodoList : FC = observer( (props) => {

    const changeSelect = (e : ChangeEvent<HTMLSelectElement>) =>{
        console.log(e.target.value)
        todoStore.changeCurrentStateTodos(e.target.value)
    }
    return (
        <section className={s.todoList}>
            <div className={s.todoList__headline}><h2>TodoList</h2></div>
            <div className={s.todoList__filters}>
                <div className={s.filters__title}>filter:</div>
                <div className={s.filters__select}>
                    {/*------*/}

                    <select name="select" id="sel" value = {TodoStore.currentStateTodos} onChange={ e => changeSelect(e)}>
                        <option value="all">All</option>
                        <option value="done">Done</option>
                        <option value="process">In process</option>
                    </select>

                    {/* ----- */}

                </div>
            </div>
            <Todos todos={TodoStore.currentTodos}/>
        </section>
    );
})

export default TodoList;