import React, {FC} from 'react';
import s from './Modal.module.scss'
import {typeModalTodos} from "../../appTypes/TodoTypes";
import TodoStore from "../../mobx/Todos/TodoStore";


interface IProps {
    type: typeModalTodos
}

const Modal: FC<IProps> = ({type}) => {

    const buttonChangeClickHandler = () =>{}

    const buttonAddClickHandler = () =>{

        TodoStore.changeModal(false)
    }

    return (
        <div className={s.modal}>
            <div className={s.modal__container} onClick={ (e) => e.stopPropagation() }>
                <div className={s.modal__headline}>
                    <h1><span>{type === "change" ? "Change" : "Add"}</span> Todo</h1>
                    {type === "change" && <p>You can rename your todo</p>}
                    {type !== "change" && <p>You should choose the name to add a new one</p>}
                </div>
                <input type="text" placeholder={"name"}/>
                <div>
                    {type === "change" && <button onClick={() =>TodoStore.changeModal(false)}>Изменить</button>}
                    {type !== "change" && <button onClick={() =>TodoStore.changeModal(false)}>Добавить</button>}
                </div>
            </div>
        </div>
    );
}

export default Modal;