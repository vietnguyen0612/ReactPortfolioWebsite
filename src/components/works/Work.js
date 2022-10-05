import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './work.module.scss'

const cx = classNames.bind(styles)

function Work() {

    const [currentSlider, setCurrentSlider] = useState(0)

    const data = [
        {
          id: "1",
          icon: "https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/mobile.png",
          title: "Web Design",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          img:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
          id: "2",
          icon: "https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/globe.png",
          title: "Mobile Application",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          icon: "https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/writing.png",
          title: "Branding",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
    ];


    const handleSlider = (wap) => {
        if(wap === 'left') {
            setCurrentSlider(prev => {
                return prev > 0 ? (prev - 1) : 2
            })
        }
        else {
            setCurrentSlider(prev => {
                return prev < (data.length - 1) ? (prev + 1) : 0
            })
        }
    }


    return (  
        <div className={cx('work')} id="work">
            <div 
            className={cx('slider')}
            style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
            >
                {
                    data.map((d) => (
                        <div key={d.id} className={cx('container')}>
                            <div className={cx('item')}>
                                <div className={cx('left')}>
                                    <div className={cx('leftContainer')}>
                                        <div className={cx('imgContainer')}>
                                            <img  src={d.icon} alt=''/>
                                        </div>
                                        <h2>{d.title}</h2>
                                        <p>{d.desc}</p>
                                        <span>Project</span>
                                    </div>
                                </div>
                                <div className={cx('right')}>
                                    <img src={d.img} alt=''/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <img 
            className={cx('arrow', 'left')} 
            src='https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png' alt='' 
            onClick={() => handleSlider('left')}
            />
            <img 
            className={cx('arrow', 'right')} 
            src='https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png' alt='' 
            onClick={() => handleSlider('')}
            />
        </div>
    );
}

export default Work;