import classNames from 'classnames/bind';
import styles from  './intro.module.scss'

const cx = classNames.bind(styles)



function Intro() {
    return (  
        <div className={cx('intro')}>
            INTRO
        </div>
    );
}

export default Intro;