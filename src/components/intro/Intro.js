import classNames from 'classnames/bind';
import styles from  './intro.module.scss'
import { init } from 'ityped'
import { useEffect,useRef } from 'react';

const cx = classNames.bind(styles)



function Intro() {
    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['HTML', 'CSS','Javascript','ReactJS','NodeJS' ] },
        )},[])
    return (  
        <div className={cx('intro')} id='intro'>
            <div className={cx('left')}>
                <div className={cx('imageContainer')}>
                    <img src='https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/man.png' alt='' />
                </div>
            </div>
            <div className={cx('right')}>
                <div className={cx('wrapper')}>
                    <h2>Hi There, I'm</h2>
                    <h1>Viet Nguyen</h1>
                    <h3>Web Developer <span ref={textRef}></span></h3>
                </div>
                <a href='#portfolio'>
                    <img src='https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/down.png' alt=''/>
                </a>
            </div>
        </div>
    );
}

export default Intro;