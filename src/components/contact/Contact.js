import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './contact.module.scss'

const cx = classNames.bind(styles)

function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(true)
    }
    return (  
        <div className={cx('contact')} id="contact">
            <div className={cx('left')}>
                <img src='https://raw.githubusercontent.com/safak/youtube/da700015c8a88050fad7b961e99a7039638ab3b2/public/assets/shake.svg' alt='' />
            </div>
            <div className={cx('right')}>
                <h1>Contact</h1>
                <form onSubmit={handleSubmit}>
                    <input className={cx('email')} type='text' placeholder='Email'></input>
                    <textarea className={cx('message')} placeholder='Message'></textarea>
                    <button type='submit'>Send</button>
                    {message &&  <p>Thanks, I'll reply ASAP :) </p>}
                </form>

                
            </div>
        </div>
    );
}

export default Contact;