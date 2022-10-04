import classNames from "classnames/bind";
import styles from './portfolioList.module.scss'

const cx = classNames.bind(styles)

function PortfolioList({title,active,setSelected,id}) {
    return (
        <li 
        className={cx('portfolioList', active && 'active')}
        onClick={() => setSelected(id)}
        >
            {title}
        </li>
    );
}

export default PortfolioList;