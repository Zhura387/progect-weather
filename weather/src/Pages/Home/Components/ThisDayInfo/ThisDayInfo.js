import React from 'react';
import s from './ThisDayInfo.module.scss'
import { useSelector } from 'react-redux'

const ThisDayInfo = () => {
    let weather = useSelector((state) => state.weathDayInfo.value)

    return (
        <div className={s.ThisDayInfo}>
            <div className={s.ThisDayInfoItems}>
                {weather.map((item) =>
                    <div key={item.icon_id} className={s.item}>
                        <div className={s.indicator}>
                            <div><img src={item.icon_id}/></div>
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