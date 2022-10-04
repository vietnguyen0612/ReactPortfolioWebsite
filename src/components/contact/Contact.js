import classNames from 'classnames/bind';
import styles from './contact.module.scss'

const cx = classNames.bind(styles)

function Contact() {
    return (  
        <div className={cx('contact')} id="contact">
            contact
        </div>
    );
}

export default Contact;