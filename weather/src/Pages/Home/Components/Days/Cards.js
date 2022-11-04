import React from 'react';
import s from './Days.module.scss'

const Cards = ({ day, dayData, icon, temp, tempNight, info }) => {
    return (
        <div className={s.cards}>
            <div className={s.day}>{day}</div>
            <div className={s.dayInfo}>{dayData}</div>
            <div className={s.img}><img src={icon} /></div>
            <div className={s.dayTemp}>{temp}</div>
            <div className={s.nightTemp}>{tempNight}</div>
            <div className={s.dayInfo}>{info}</div>
        </div>
    )
}
export default Cards