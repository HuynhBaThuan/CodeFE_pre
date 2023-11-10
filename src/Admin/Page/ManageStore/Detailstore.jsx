import React from 'react'
import style from './Detailstore.module.css';

function Bill(rows) {
    console.log(rows.rows);
    return (
        <>
            <div >
                <div className={style.Store}>
                    <div className={style.Name_store}>
                        <div >
                            <span>{rows.rows.name}</span>
                        </div>
                    </div>
                    <div className={style.addres_store}>
                        <div >
                            <span>SĐT: {rows.rows.phoneNumber}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.Store}>
                <div >
                    <div className={style.bill}>
                        <div >
                            <img className={style.img_bill} src={rows.rows.image} alt="" />
                        </div>
                    </div>
                    <div className={style.bill_time} >
                        <div className={style.bill_stt}>
                            <span className={style.col1}>Địa chỉ : </span>
                            <span className={style.col}> {rows.rows.address}</span>
                        </div>
                    </div>
                    <div className={style.bill_time} >
                        <div className={style.bill_stt}>
                            <span className={style.col1}>Mô tả : </span>
                            <span className={style.col}> {rows.rows.description}</span>
                        </div>
                    </div>
                    <div className={style.bill_time} >
                        <div className={style.bill_stt}>
                            <span className={style.col1}>Giờ mỡ cửa : </span>
                            <span className={style.col}>{rows.rows.openAt}</span>
                        </div>
                    </div>
                    <div className={style.bill_time} >
                        <div className={style.bill_stt}>
                            <span className={style.col1}>Giờ đóng cửa : </span>
                            <span className={style.col}>{rows.rows.closeAt}</span>
                        </div>
                    </div>
                    <div className={style.bill_time} >
                        <div className={style.bill_stt}>
                            <a href=""><span >Xem đánh giá</span></a>
                        </div>
                    </div>


                    <div className={style.feedback}>
                        <div className={style.bill_time} >
                            <div className={style.bill_stt}>
                                <span> <i class="fa-regular fa-comment"></i></span>
                                <span >10</span>
                            </div>
                        </div>
                        <div className={style.bill_time} >
                            <div className={style.bill_stt}>
                                <span><i class="fa-regular fa-thumbs-up"></i> </span>
                                <span >10</span>
                            </div>
                        </div>
                        <div className={style.bill_time} >
                            <div className={style.bill_stt}>
                                <span><i className="fa-solid fa-star" style={{ color: 'gold' }}></i> </span>
                                <span >{rows.rows.ratingAverage}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div ></>

    )
}

export default Bill
