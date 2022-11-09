import React from 'react';
import s from './Header.module.scss'
import Select from 'react-select'
import ObjectWeather from './ObjectWeather';
const Header = () => {

    const [theme, setTheme] = React.useState('light');

    const themeChenge = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        console.log(setTheme)
    }

    const components = [
        'body-background',
        'components-background',
        'card-background',
        'card-shadow',
        'text-color',
    ];

    React.useEffect(() => {
        return () => {
            const root = document.querySelector(':root');
            components.forEach(component => {
                root.style.setProperty(
                    `--${component}-default`,
                    `var(--${component}-${theme})`
                )
            }, [theme]);
        }
    })
    const options = [
        { value: 'city-1', label: 'Minsk' },
        { value: 'city-2', label: 'Moscow' },
        { value: 'city-3', label: 'Kiev' }
    ]

    const colorStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: 0 ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        })
    }
    const singleValue = {
        control: (styles) => ({
            ...styles,
            Color: 0 ? '#fff' : '#000',
        })
    }


    return (
        <header className={s.Header}>
            <div className={s.wrapper}>
                <div className={s.logo}><svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2_444)">
                        <path d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65Z" fill="#4793FF" />
                        <path d="M65 32.5C65 29.8954 64.6916 27.3631 64.113 24.9358L54.3423 15.1651L53.0241 15.7211L48.3235 11.1622C48.3235 11.1622 46.5495 14.0707 44.5394 12.8754L41.3829 9.79712L41.1963 14.2822L8.78809 46.265L27.0688 64.5458C28.8351 64.843 30.6492 65 32.5 65C50.4493 65 65 50.4493 65 32.5Z" fill="#424FDD" />
                        <path d="M58.3388 29.0023L59.7103 28.1252L58.2387 27.1841C56.6468 26.1659 56.217 24.03 57.2916 22.4755L58.2847 21.0387L56.6808 20.7601C54.8077 20.4347 53.5845 18.6126 53.9927 16.7559L54.3422 15.1659L52.6363 15.541C50.7905 15.9467 48.9765 14.7403 48.637 12.8812L48.3233 11.163L46.9922 12.1001C45.4377 13.1946 43.2843 12.7711 42.26 11.1694L41.3829 9.79797L40.4418 11.2695C39.4237 12.8615 37.2878 13.2912 35.7333 12.2167L34.2964 11.2235L34.0179 12.8275C33.6925 14.7005 31.8705 15.9237 30.0136 15.5156L28.4237 15.1661L28.7987 16.8719C29.2044 18.7177 27.998 20.5317 26.1389 20.8712L24.4207 21.1849L25.3579 22.516C26.4524 24.0705 26.0288 26.2239 24.4272 27.2482L23.0557 28.1253L24.5271 29.0664C26.1192 30.0846 26.5488 32.2204 25.4743 33.775L24.4812 35.2118L26.0851 35.4904C27.9581 35.8157 29.1813 37.6379 28.7732 39.4946L28.4237 41.0845L30.1296 40.7095C31.9753 40.3038 33.7894 41.5102 34.1288 43.3693L34.4425 45.0876L35.7736 44.1505C37.3282 43.056 39.4816 43.4795 40.5058 45.0812L41.3829 46.4526L42.324 44.9811C43.3422 43.3891 45.4781 42.9594 47.0326 44.0339L48.4695 45.0271L48.748 43.4231C49.0734 41.5501 50.8955 40.3269 52.7522 40.735L54.3422 41.0845L53.9672 39.3787C53.5614 37.5329 54.7678 35.7189 56.627 35.3794L58.3453 35.0657L57.4081 33.7346C56.3136 32.1801 56.7371 30.0265 58.3388 29.0023V29.0023Z" fill="#FDBF2D" />
                        <path d="M57.4082 33.734L58.3451 35.0645L56.6275 35.3781C54.7676 35.7183 53.5615 37.5324 53.9678 39.3783L54.3423 41.0833L52.7529 40.7342C50.8955 40.3254 49.0738 41.5492 48.7475 43.4218L48.4695 45.0265L47.0323 44.0324C45.4784 42.9584 43.3418 43.3875 42.3237 44.9795L41.3829 46.4522V9.797L42.2602 11.1681C43.2847 12.7702 45.4378 13.1943 46.9917 12.0987L48.3235 11.1617L48.637 12.8807C48.976 14.7393 50.7902 15.9453 52.6361 15.5404L54.3423 15.1646L53.9932 16.7553C53.5844 18.6114 54.8082 20.4344 56.6808 20.7594L58.2842 21.0374L57.2914 22.4745C56.2174 24.0297 56.6465 26.1651 58.2385 27.1832L59.7099 28.1239L58.3388 29.0012C56.7366 30.0257 56.3139 32.1788 57.4082 33.734Z" fill="#FD9827" />
                        <path d="M41.383 40.9705C48.4777 40.9705 54.2291 35.2191 54.2291 28.1243C54.2291 21.0296 48.4777 15.2782 41.383 15.2782C34.2883 15.2782 28.5369 21.0296 28.5369 28.1243C28.5369 35.2191 34.2883 40.9705 41.383 40.9705Z" fill="#FFE05F" />
                        <path d="M54.2293 28.1239C54.2293 35.2193 48.4771 40.9703 41.3829 40.9703V15.2788C48.4771 15.2788 54.2293 21.0298 54.2293 28.1239V28.1239Z" fill="#F9CB0D" />
                        <path d="M42.5274 32.242C42.1958 32.242 41.8694 32.2633 41.5478 32.3006C41.5794 31.9404 41.5966 31.5761 41.5966 31.2077C41.5966 24.3886 36.0687 18.8606 29.2495 18.8606C23.5703 18.8606 18.7873 22.6953 17.3468 27.9164C16.8894 27.8562 16.4229 27.8248 15.9491 27.8248C10.0886 27.8248 5.33777 32.5756 5.33777 38.4361C5.33777 44.2967 10.0886 49.0475 15.9491 49.0475H42.5274C47.1682 49.0475 50.9302 45.2854 50.9302 40.6447C50.9302 36.004 47.1682 32.242 42.5274 32.242V32.242Z" fill="white" />
                        <path d="M50.9302 40.6436C50.9302 45.2846 47.1684 49.0466 42.5272 49.0466H28.134V18.9097C28.5016 18.8759 28.8735 18.8596 29.2498 18.8596C36.0691 18.8596 41.5969 24.3873 41.5969 31.2066C41.5969 31.5753 41.5795 31.9395 41.5478 32.2996C41.8696 32.2625 42.1956 32.2407 42.5272 32.2407C47.1684 32.2407 50.9302 36.0036 50.9302 40.6436V40.6436Z" fill="#DAEFEC" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2_444">
                            <rect width="65" height="65" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.chengeTheme} ><svg onClick={() => themeChenge()} width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6667 4.09792V24.7917C6.83958 24.7917 2.91667 20.9562 2.91667 16.2312C2.91667 13.9562 3.82083 11.8125 5.46875 10.1937L11.6667 4.09792ZM11.6667 0L3.42708 8.10833C1.3125 10.1937 0 13.0667 0 16.2312C0 22.575 5.22083 27.7083 11.6667 27.7083C18.1125 27.7083 23.3333 22.575 23.3333 16.2312C23.3333 13.0667 22.0208 10.1937 19.9062 8.10833L11.6667 0Z" fill="#4793FF" />
                </svg>
                </div>
                <Select defaultValue={options[0]} styles={colorStyles && singleValue} options={options} />
                <ObjectWeather />
            </div>
        </header>
    )
}
export default Header