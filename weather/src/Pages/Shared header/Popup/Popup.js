import React from 'react';
import s from './Popup.module.scss'

const Popup = () => {

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

    const days = [
        {
            icon_id: 'sun.png',
        },
    ]

    return (
        <>

            <div className={s.blur}></div>
            <div className={s.popup}>
                {days.map((item) =>
                    <div key={item.icon_id} className={s.day}>
                        <div className={s.dayTemp}>20</div>
                        <div className={s.dayData}>wednesday</div>
                        <div className={s.dayImg}><img src={item.icon_id} /></div>
                        <div className={s.dayTime}>21.45</div>
                        <div className={s.dayCity}>Minsk</div>
                    </div>
                )}
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
                <div className={s.close}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_155_19)">
                        <path d="M17.25 8.25C16.836 8.25 16.5 8.586 16.5 9C16.5 13.1355 13.1355 16.5 9 16.5C4.8645 16.5 1.5 13.1355 1.5 9C1.5 4.8645 4.8645 1.5 9 1.5C11.0134 1.5 12.9034 2.28675 14.322 3.7155C14.6138 4.00912 15.0889 4.011 15.3825 3.71925C15.6765 3.4275 15.678 2.95238 15.3862 2.65838C13.6841 0.94425 11.4157 0 9 0C4.03725 0 0 4.03725 0 9C0 13.9628 4.03725 18 9 18C13.9624 18 18 13.9628 18 9C18 8.586 17.664 8.25 17.25 8.25Z" fill="#4793FF" />
                        <path d="M10.0606 9.00003L11.7804 7.28028C12.0733 6.9874 12.0733 6.51265 11.7804 6.21978C11.4875 5.9269 11.0128 5.9269 10.7199 6.21978L9.00015 7.93953L7.2804 6.21978C6.9879 5.9269 6.5124 5.9269 6.2199 6.21978C5.92703 6.51265 5.92703 6.9874 6.2199 7.28028L7.93965 9.00003L6.2199 10.7198C5.92703 11.0127 5.92703 11.4874 6.2199 11.7803C6.36615 11.9269 6.55815 12 6.75015 12C6.94215 12 7.13415 11.9269 7.2804 11.7803L9.00015 10.0605L10.7199 11.7803C10.8665 11.9269 11.0581 12 11.2501 12C11.4421 12 11.6338 11.9269 11.7804 11.7803C12.0733 11.4874 12.0733 11.0127 11.7804 10.7198L10.0606 9.00003Z" fill="#4793FF" />
                    </g>
                    <defs>
                        <clipPath id="clip0_155_19">
                            <rect width="18" height="18" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                </div>
            </div>
        </>
    )
}
export default Popup