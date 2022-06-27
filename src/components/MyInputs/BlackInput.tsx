import React, {FC} from 'react';
import s from './inputs.module.scss'


const BlackInput : FC<React.HTMLProps<HTMLInputElement>> = (props) => {
    return (
        <input type="text" className={s.blackInput} {...props}/>
    );
}

export default BlackInput;