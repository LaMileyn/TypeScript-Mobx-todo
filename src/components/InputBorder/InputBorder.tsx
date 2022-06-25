import React, {FC} from 'react';
import s from './InputBorder.module.scss'

const InputBorder : FC = (props) => {
    return (
        <div className={s['input-border']}>
            <input type="text"/>
        </div>
    );
}

export default InputBorder;