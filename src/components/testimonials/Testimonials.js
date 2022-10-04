import classNames from 'classnames/bind';
import styles from'./testimonials.module.scss'

const cx = classNames.bind(styles)


function Testimonials() {
    return (  
        <div className={cx('testimonials')} id="testimonials">
            Testimonials
        </div>
    );
}

export default Testimonials;