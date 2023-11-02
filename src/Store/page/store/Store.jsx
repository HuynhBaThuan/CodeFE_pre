import { useState, useRef, useEffect } from 'react'
import Features from '../../compenents/Features/Features'
import Navbar from '../../compenents/Navbar/Navbar'
import style from './Store.module.css'
import Slide from '../../compenents/Slide/Slide'
function Store() {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const formRef = useRef();
  return (
    <div className={style.container}>
      <Features />
      <div className={style.container1}>
        <div className={style.up}>
          <div className={style.up_left}>
            <div className={style.Store_image}>
              <img src="./vav.png" alt="" className={style.img_store} />
            </div>
            <div className={style.Store_name}>
              <span className={style.desc}>Jollibee - EC Ngô Văn Sở</span>
            </div>
            <div className={style.Store_adress}>
              <span>Noole & Cogge</span>
            </div>
            <div className={style.Store_feedback}>
              <span>4.4</span>
              <div className={style.cc}>
                <span>20 mins</span>
                <span>6.6km</span>
              </div>
            </div>
            <div className={style.time}>
              <span className={style.time_title}>Opening Hours</span>
              <span className={style.date}>Today 09:00-21:00</span>
            </div>
          </div>
          <div className={style.up_right}>
            up_right
          </div>
        </div>
        <div className={style.down}>
          <div className={style.down_left}>
            <div className={style.listcategory}>
              <div className={style.category} onClick={() => { setOpen1(true); setOpen2(false); setOpen3(false) }}>
                <img src="./vav.png" alt="" className={style.img_category} />
                <span className={style.name_category}>Đồ ăn</span>
              </div>
              <div className={style.category} onClick={() => { setOpen2(true); setOpen1(false); setOpen3(false) }}>
                <img src="./vav.png" alt="" className={style.img_category} />
                <span className={style.name_category}>Đồ uống</span>
              </div>
              <div className={style.category} onClick={() => { setOpen2(false); setOpen1(false); setOpen3(true) }}>
                <img src="./vav.png" alt="" className={style.img_category} />
                <span className={style.name_category}>Khác</span>
              </div>

            </div>
            <div>
              <span className={style.name_category_title}>Sản Phẩm</span>
            </div>
            {open1 && (
              <div>
                <Slide slidesToShow={3} arrowsScroll={1} />
              </div>)}
            {open2 && (
              <div>
                <Slide slidesToShow={3} arrowsScroll={1} />
              </div>)}
            {open3 && (
              <div>
                <Slide slidesToShow={3} arrowsScroll={1} />
              </div>)}
          </div>
          <div className={style.down_right}>
            dow_right
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store
