import React from 'react'
import style from './DetailShipper.module.css';

function DetailShipper(rows) {
    console.log(rows);
    return (
        <div className={style.Store}>
            <div >
                <div className={style.bill}>
                    <div >
                        <img className={style.img_bill} src={rows.rows.photo} alt="" />
                    </div>
                </div>
                <div className={style.bill_time} >
                    <div className={style.bill_stt}>
                        <span className={style.col1}>Họ tên : </span>
                        <span className={style.col}> {rows.rows.firstName} {rows.rows.lastName}</span>
                    </div>
                </div>
                <div className={style.bill_time} >
                    <div className={style.bill_stt}>
                        <span className={style.col1}>Email : </span>
                        <span className={style.col}> {rows.rows.email}</span>
                    </div>
                </div>
                <div className={style.bill_time} >
                    <div className={style.bill_stt}>
                        <span className={style.col1}>ID giấy phép : </span>
                        <span className={style.col}>{rows.rows.licenseId}</span>
                    </div>
                </div>
                <div className={style.bill_time} >
                    <div className={style.bill_stt}>
                        <span className={style.col1}>Biến số : </span>
                        <span className={style.col}>{rows.rows.vehicleNumber}</span>
                    </div>
                </div>
                <div className={style.bill_time} >
                    <div className={style.bill_stt}>
                        <span className={style.col1}>Loại xe: </span>
                        <span className={style.col}>{rows.rows.vehicleType}</span>
                    </div>
                </div>
                <div className={style.bill_time} >
                    <div className={style.bill_stt}>
                        <span className={style.col1}>Giấy phép xe cộ: </span>
                        <span className={style.col}>{rows.rows.vehicleLicense}</span>
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
        </div >
    )
}

export default DetailShipper
