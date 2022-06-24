import React, {FC} from 'react';
import imgDelete from './../../assets/icons/trash.svg'

const DeleteIcon : FC = (props) => {
    return (
        <img src={imgDelete} alt=""/>
    );
}

export default DeleteIcon;