import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from  './portfolio.module.scss'
import PortfolioList from '../portfolioList/PortfolioList';

import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio
} from '../../data'

const cx = classNames.bind(styles)

function Portfolio () {
    const [selected, setSelected] = useState('featured')
    const [data, setData] = useState([])

    const lists = [
        {
            id: 'featured',
            title: 'Featured'
        },
        {
            id: 'web',
            title: 'Web App'
        },
        {
            id: 'mobile',
            title: 'Mobile App'
        },
        {
            id: 'design',
            title: 'Design'
        },
        {
            id: 'content',
            title: 'Content'
        }
    ]

    useEffect(()=> {
        switch(selected){
            case 'featured':
                setData(featuredPortfolio);
                break;
            case 'web':
                setData(webPortfolio);
                break;
            case 'mobile':
                setData(mobilePortfolio);
                break;
            case 'design':
                setData(designPortfolio);
                break;
            case 'content':
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio)
        }
    },[selected])

    return (  
        <div className={cx('portfolio')} id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {
                    lists.map((list) => (
                        <PortfolioList 
                        key={list.id} 
                        title={list.title} 
                        active={selected === list.id}
                        setSelected={setSelected}
                        id={list.id} 
                        />
                    ))
                }
            </ul>

            <div className={cx('container')}>
                {data.map((d) => (
                    <div key={d.id} className={cx('item')}>
                        <img src={d.img} alt=''/>
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;