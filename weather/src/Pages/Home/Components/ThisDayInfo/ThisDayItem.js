import React from 'react';
import s from './ThisDayInfo.module.scss';


export const ThisDayItem = ({ item }) => {
  const { icon_id, name, value } = item;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <div><img src={icon_id} /></div>
      </div>
      <div className={s.indicator__name}>{name}</div>
      <div className={s.indicator__value}>{value}</div>
    </div>
  );
};