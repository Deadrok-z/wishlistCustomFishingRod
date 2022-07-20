import React from 'react';
import './css/buttonTabBar.css';
import {useDispatch, useSelector} from 'react-redux';
import { rodTypesSelector, updateFilterValue } from '../../features/buttonTabBar/buttonTabBarSlice';
export default function ButtonTabBar() {
    const dispatch= useDispatch();
    const rodTypes = useSelector(rodTypesSelector);
    const onSelectType = (type) => {
        dispatch(updateFilterValue(type))
    }
    const typeList = [...rodTypes].map((type) => {
        return <li key={type.ID} className='element' onClick={()=>onSelectType(type.ID)}>{type.Text}</li>;
    })
    return (
        <ul className='list'>
            {typeList}
        </ul>
    );
}