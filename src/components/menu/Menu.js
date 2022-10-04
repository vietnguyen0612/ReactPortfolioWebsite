import classNames from "classnames/bind";
import styles from './menu.module.scss'

const cx = classNames.bind(styles)

function Menu({menuOpen,setMenuOpen}) {
    return (  
        <div className={cx('menu', menuOpen && 'active')}>
           
                <ul>
                    <li onClick={() => setMenuOpen(!menuOpen)}>
                        <a href="#intro">Home</a>
                    </li>
                    <li onClick={() => setMenuOpen(!menuOpen)}>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li onClick={() => setMenuOpen(!menuOpen)}>
                        <a href="#work">Work</a>
                    </li>
                    <li onClick={() => setMenuOpen(!menuOpen)}>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li onClick={() => setMenuOpen(!menuOpen)}>
                        <a href="#contact">Contact</a>
                    </li>
                    
                </ul>

        </div>
    );
}

export default Menu;