import React from 'react';
import s from './ThisDayInfo.module.scss'

const ThisDayInfo = () => {



    const items = [
       
        {
            icon_id: 'temp.png',
            name: 'Температура',
            value: '20° - ощущается как 17°',
        },
        {
            icon_id: 'pressure.png',
            name: 'Давление',
            value: '765 мм ртутного столба - нормальное',
        },
        {
            icon_id: 'precipitation.png',
            name: 'Осадки',
            value: 'Без осадков',
        },
        {
            icon_id: 'wind.png',

            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер',
        },
    ];



    return (
        <div className={s.ThisDayInfo}>
            <div className={s.ThisDayInfoItems}>
                {items.map((item) =>
                    <div key={item.icon_id} className={s.item}>
                        <div className={s.indicator}>
                            <div><img src={item.icon_id} /></div>
                        </div>
                        <div className={s.indicatorName}>{item.name}</div>
                        <div className={s.indicatorValue}>{item.value}</div>
                    </div>
                )}
            </div>
            <img className={s.cloudImg} src='./1.png' alt='cloud'/>
        </div>
    )
}
export default ThisDayInfo