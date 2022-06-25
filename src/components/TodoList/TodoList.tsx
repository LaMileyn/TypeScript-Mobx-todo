import React, {FC} from 'react';
import s from './TodoList.module.scss'
import {observer} from "mobx-react-lite";
import Todos from "../Todos/Todos";
import TodoStore from "../../mobx/Todos/TodoStore";


const TodoList : FC = observer( (props) => {


    return (
        <section className={s.todoList}>
            <div className={s.todoList__headline}><h2>TodoList</h2></div>
            <div className={s.todoList__filters}>
                <div className={s.filters__title}>filter:</div>
                <div className={s.filters__select}>
                    {/*------*/}

                    <select name="select" id="sel" value = {TodoStore.currentTypeTodos}>
                        <option value="">All</option>
                        <option value="">Done</option>
                        <option value="">In process</option>
                    </select>

                    {/* ----- */}

                </div>
            </div>
            <Todos todos={TodoStore.currentTodos}/>
        </section>
    );
})

export default TodoList;