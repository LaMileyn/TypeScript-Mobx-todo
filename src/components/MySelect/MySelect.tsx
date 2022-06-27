import React, {FC} from 'react';
import style from './MySelect.module.scss'

export interface IMySelectData {
    value : string,
    name : string
}
interface MySelect{
    data : Array<IMySelectData>,
    onChange : (value : string) => void,
    value : string
}
const MySelect : FC<MySelect> = ({ data,onChange, value}) => {
    return (
        <select value={value}
                className={style.mySelect}
                onChange = {(event) => onChange(event.target.value)
                }>
            { data.map( element => (
                <option key={element.value} value={element.value}>{element.name}</option>
            ))}
        </select>
    );
}

export default MySelect;