import classNames from 'classnames/bind';
import styles from './work.module.scss'

const cx = classNames.bind(styles)

function Work() {
    return (  
        <div className={cx('work')} id="work">
            Work
        </div>
    );
}

export default Work;