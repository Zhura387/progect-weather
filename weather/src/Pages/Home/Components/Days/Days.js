import React from 'react';
import s from './Days.module.scss'
import Cards from './Cards';
import Tabs from './Tabs';
import { useSelector } from 'react-redux'

const Days = () => {
  const weatherToWeek = useSelector((state) => state.weathDayWeek.value)
  console.log(weatherToWeek)

  return (
    <>
      <Tabs />
      <div className={s.days}>
        {weatherToWeek && weatherToWeek.map((item =>
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