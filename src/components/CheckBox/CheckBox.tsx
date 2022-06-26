import React, {FC} from 'react';
import s from './CheckBox.module.scss'

interface ICheckBox{
    checked : boolean,
    onChange : () => void
}
const CheckBox : FC<ICheckBox> = ({checked,onChange}) => {
    return (
        <label className={s.check}>
            <input type="checkbox" checked={checked}
                   onChange={onChange}
                   className={s.check__input}/>
            <span className={s.checkbox}></span>
        </label>
    );
}

export default CheckBox;