import React, {FC, useEffect} from 'react';
import s from './TodoList.module.scss'
import {observer} from "mobx-react-lite";
import Todos from "../Todos/Todos";
import TodoStore from "../../mobx/Todos/TodoStore";
import Modal from "../Modal/Modal";

const TodoList : FC = observer( (props) => {


    return (
        <section className={s.todoList}>
            { TodoStore.modal && (
                <Modal type={TodoStore.modalTodoType}/>
            )}
            <div className={s.todoList__headline}><h2>TodoList</h2></div>
            <div className={s.todoList__filters}>
                <div className={s.filters__title}>filter:</div>
                <div className={s.filters__select}>
                    {/*------*/}

                    <select name="select" id="sel">
                        <option value="">Все</option>
                        <option value="">Выполненные</option>
                        <option value="">Не выполненные</option>
                    </select>

                    {/* ----- */}

                </div>
            </div>
            <Todos todos={TodoStore.todos}/>
        </section>
    );
})

export default TodoList;