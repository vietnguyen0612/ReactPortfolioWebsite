import classNames from 'classnames/bind'
import styles from './topbar.module.scss'

import { faUser,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles)

function Topbar({menuOpen,setMenuOpen}) {
    return (  
        <div className={cx('topbar', menuOpen && 'active')} id="topbar">
            <div className={cx('wrapper')}>
                <div className={cx('left')}>
                    <a href='#intro' className={cx('username')}>Web Developer</a>
                    <div className={cx('item', 'phone')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faUser} /> +379514810
                    </div>
                    <div className={cx('item', 'email')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} /> vanvietn73@gmail.com
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('hamburger')} onClick={() => setMenuOpen(!menuOpen)}>
                        <span className={cx('line1')}></span>
                        <span className={cx('line2')}></span>
                        <span className={cx('line3')}></span>
                    </div>
                    
                </div>


            </div>
        </div>
    );
}

export default Topbar;