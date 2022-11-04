import React from 'react';
import s from './Home.module.scss'
import ThisDay from './Components/ThisDay/ThisDay';
import ThisDayInfo from './Components/ThisDayInfo/ThisDayInfo';
const Home =()=>{
return(
<div className={s.home}>
    <div className={s.wrapper}>
<ThisDay/>
<ThisDayInfo/>
</div>
</div>
)
}
export default Home