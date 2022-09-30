import classNames from 'classnames/bind';
import styles from  './portfolio.module.scss'

const cx = classNames.bind(styles)

function Portfolio () {
    return (  
        <div className={cx('portfolio')}>
            Portfolio
        </div>
    );
}

export default Portfolio;