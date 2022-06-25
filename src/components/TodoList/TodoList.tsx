import React, { FC } from 'react';
import s from './TodoList.module.scss'
import {observer} from "mobx-react-lite";
import Todos from "../Todos/Todos";
import TodoStore from "../../mobx/Todos/TodoStore";
import todoStore from "../../mobx/Todos/TodoStore";
import MySelect, {IMySelectData} from "../MySelect/MySelect";


const TodoList : FC = observer( (props) => {

    const changeSelect = (text : string) =>{
        todoStore.changeCurrentStateTodos(text)
    }
    const selectData : IMySelectData[] =
        [ { name : "Все", value : "all"}, { name: "Выполненные", value: "done"}, { name: "Не выполненные", value: "process"}]
    return (
        <section className={s.todoList}>
            <div className={s.todoList__headline}><h2>TodoList</h2></div>
            <div className={s.todoList__filters}>
                <div className={s.filters__title}>filter:</div>
                <div className={s.filters__select}>
                    <MySelect  data={selectData} onChange={changeSelect} value={TodoStore.currentStateTodos}/>
                </div>
            </div>
            <Todos todos={TodoStore.currentTodos}/>
        </section>
    );
})

export default TodoList;