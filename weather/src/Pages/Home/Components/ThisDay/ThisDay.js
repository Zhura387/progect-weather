import React from 'react';
import s from './ThisDay.module.scss'
import { useSelector } from 'react-redux'

const ThisDay = () => {
    const weatherToDay = useSelector((state) => state.weathToDay.value)
    console.log(weatherToDay)
    return (
        <>
            {weatherToDay && weatherToDay.map((item) => (
                <div className={s.thisDay}>
                    <div className={s.topBlock}>
                        <div className={s.topBlockWrapper}>
                            <div className={s.thisDayTemp}>{item.temp}</div>
                            <div className={s.thisDayData}>{item.day}</div>
                        </div>
                        <div><svg width="119" height="119" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M59.5229 88.0144C75.2638 88.0144 88.0243 75.2545 88.0243 59.5144C88.0243 43.7742 75.2638 31.0143 59.5229 31.0143C43.782 31.0143 31.0215 43.7742 31.0215 59.5144C31.0215 75.2545 43.782 88.0144 59.5229 88.0144Z" fill="url(#paint0_linear_2_179)" />
                            <path d="M86.3084 5.95127L79.6106 22.1222C77.4274 27.389 69.5268 24.1172 71.71 18.8504L78.4078 2.67947C80.591 -2.58734 88.4916 0.684466 86.3084 5.95127ZM47.2843 100.155L40.5865 116.326C38.4033 121.593 30.5027 118.321 32.6859 113.054L39.3837 96.8835C41.5669 91.6167 49.4675 94.8885 47.2843 100.155V100.155ZM116.326 40.5959L100.154 47.2934C94.8873 49.4765 91.6154 41.5763 96.8824 39.3932L113.054 32.6957C118.321 30.5126 121.593 38.4128 116.326 40.5959V40.5959ZM22.1176 79.6182L5.94586 86.3157C0.6788 88.4988 -2.59316 80.5986 2.6739 78.4155L18.8456 71.718C24.1127 69.5349 27.3846 77.4351 22.1176 79.6182V79.6182ZM113.054 86.3214L96.8824 79.6239C91.6154 77.4408 94.8873 69.5406 100.154 71.7237L116.326 78.4212C121.593 80.6043 118.321 88.5045 113.054 86.3214ZM18.8456 47.2991L2.6739 40.6016C-2.59316 38.4185 0.6788 30.5183 5.94586 32.7014L22.1176 39.3989C27.3846 41.582 24.1127 49.4822 18.8456 47.2991V47.2991ZM40.5808 2.67377L47.2786 18.8447C49.4618 24.1115 41.5612 27.3833 39.378 22.1165L32.6802 5.94557C30.497 0.678766 38.3976 -2.59304 40.5808 2.67377V2.67377ZM79.6049 96.8778L86.3027 113.049C88.4859 118.316 80.5853 121.587 78.4021 116.321L71.7043 100.15C69.5211 94.8828 77.4217 91.611 79.6049 96.8778V96.8778Z" fill="#FFB300" />
                            <defs>
                                <linearGradient id="paint0_linear_2_179" x1="59.5229" y1="31.0143" x2="59.5229" y2="87.2546" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFC227" />
                                    <stop offset="1" stop-color="#FFB300" />
                                </linearGradient>
                            </defs>
                        </svg>

                        </div>
                    </div>
                    <div className={s.bottomBlock}>
                        <div className={s.thisDayTime}>{item.city}<span>{ }
                        </span></div>
                        <div className={s.thisDayCity}><span>{item.day_info}</span></div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default ThisDay