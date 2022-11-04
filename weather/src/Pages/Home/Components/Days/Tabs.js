import React from 'react';
import s from './Days.module.scss'

const Tabs = () => {

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

  return (
    <div className={s.tabs}>
      <div className={s.tabsWrapper}>
        {tabs.map((item) =>
          <div className={s.tab + ' ' + s.active}>{item.value}</div>
        )}
      </div>
      <div className={s.cancel}>отменить</div>
    </div>
  )
}
export default Tabs