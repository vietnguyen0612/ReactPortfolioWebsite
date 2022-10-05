import classNames from 'classnames/bind';
import styles from'./testimonials.module.scss'

const cx = classNames.bind(styles)


function Testimonials() {


    const data = [
        {
          id: 1,
          name: "Tom Durden",
          title: "Senior Developer",
          img:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/twitter.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "Alex Kalinski",
          title: "Co-Founder of DELKA",
          img:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/youtube.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
        {
          id: 3,
          name: "Martin Harold",
          title: "CEO of ALBI",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/linkedin.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
    ];


    return (  
        <div className={cx('testimonials')} id="testimonials">
            <h1 className={cx('title')}>Testimonials</h1>
            <div className={cx('container')}>
                {/* <div className={cx('tag')}>
                    <div className={cx('header')}>
                        <img src='https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/right-arrow.png' alt='' />
                        <img src={data[0].img} alt='' />
                        <img src={data[0].icon} alt='' />
                    </div>
                    <div  className={cx('content')}>{data[0].desc}</div>
                    <div className={cx('footer')}>
                        <div className={cx('name')}>{data[0].name}</div>
                        <div className={cx("jobDes")}>{data[0].title}</div>
                    </div>
                </div> */}

                {
                    data.map((d) => (
                        <div className={cx('tag')}>
                            <div className={cx('header')}>
                                <img src='https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/right-arrow.png' alt='' />
                                <img src={d.img} alt='' />
                                <img src={d.icon} alt='' />
                            </div>
                            <div  className={cx('content')}>{d.desc}</div>
                            <div className={cx('footer')}>
                                <div className={cx('name')}>{d.name}</div>
                                <div className={cx("jobDes")}>{d.title}</div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    );
}

export default Testimonials;