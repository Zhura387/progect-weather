import React from 'react';
import { useDispatch } from 'react-redux'
import { addWeatherToDay } from '../../Redux/Slices/weathToDaySlice'
import { addDayInfo } from '../../Redux/Slices/weathDayInfoSlice'
import { addTabs } from '../../Redux/Slices/tabsSlice'
import { addDayWeek } from '../../Redux/Slices/weathDayWeekSlice'


const ObjectWeather = () => {
  const dispatch = useDispatch()

  const day = [
    {
      day: 'Сегодня',
      day_info: '28 авг',
      icon_id: 'sun.png',
      temp: '+18',
      city: 'Минск',
      info: 'Облачно',
    }
  ]
  dispatch(addWeatherToDay(day))


  const dayInfo = [
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
  dispatch(addDayInfo(dayInfo))

  const tabs = [
    {
      value: 'На неделю',
    },
    {
      value: 'На 10 дней',
    },
    {
      value: 'На месяц',
    },
  ];

  dispatch(addTabs(tabs))

  const daysWeek = [
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

  dispatch(addDayWeek(daysWeek))

  return (
    <></>
  )
}
export default ObjectWeather;