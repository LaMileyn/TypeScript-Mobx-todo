import React, {FC} from 'react';
import {ITodo} from "../../../appTypes/TodoTypes";
import s from './Todo.module.scss'
import DeleteIcon from "../../../UI/Icons/DeleteIcon";
import cn from 'classnames'

interface IProps {
    todo: ITodo
}

const Todo: FC<IProps> = ({todo}) => {
    return (
        <div className={cn(s.todo)}>
            <div className={s.todo__checkbox}>
                <input type="checkbox" className={s.checkbox}/>
            </div>
            <div className={s.todo__text}>
                <div className={s.text__name}>Сделать уборку</div>
                <div className={s.text__date}>2022.01.21</div>
            </div>
            <div className={s.todo__deletion}>
                <div className={s.deletion__img}>
                    <DeleteIcon/>
                </div>
            </div>
        </div>
    );
}

export default Todo;