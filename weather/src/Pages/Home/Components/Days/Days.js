import React from 'react';
import s from './Days.module.scss'
import Cards from './Cards';
import Tabs from './Tabs';

const Days =()=>{

    const days = [
        {
          day: 'Сегодня',
          day_info: '28 авг',
          icon_id: 'sun.png',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Завтра',
          day_info: '29 авг',
          icon_id: 'small_rain_sun.png',
          temp_day: '+18',
          temp_night: '+15',
          info: 'небольшой дождь и солнце',
        },
        {
          day: 'Ср',
          day_info: '30 авг',
          icon_id: 'small_rain.png',
          temp_day: '+18',
          temp_night: '+15',
          info: 'небольшой дождь',
        },
        {
          day: 'Чт',
          day_info: '28 авг',
          icon_id: 'mainly_cloudy.png',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Пт',
          day_info: '28 авг',
          icon_id: 'rain.png',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Сб',
          day_info: '28 авг',
          icon_id: 'sun.png',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Вс',
          day_info: '28 авг',
          icon_id: 'sun.png',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
      ];

return(
    <>
    <Tabs/>
<div className={s.days}>
{days.map((item=>
<Cards 
day={item.day}
dayData={item.day_info}
icon={item.icon_id}
temp={item.temp_day}
tempNight={item.temp_night}
info={item.info}
/>
    ))}
</div>
</>
)
}
export default Days