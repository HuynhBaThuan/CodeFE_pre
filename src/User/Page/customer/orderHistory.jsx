import React, { useRef, useEffect, useState } from 'react';
// import './customer.css'
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { getAllOder, viewOrder } from '../../services/userServices';
import RatingShipper from '../../Components/Modal/ratingShipper';
import RatingStore from '../../Components/Modal/ratingStore';
const OrderHistory = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const fromDateRef = useRef(null);
    const toDateRef = useRef(null);

    useEffect(() => {
        flatpickr(fromDateRef.current, {
            dateFormat: 'Y-m-d', // Định dạng ngày tháng
        });

        flatpickr(toDateRef.current, {
            dateFormat: 'Y-m-d', // Định dạng ngày tháng
        });
        const getOrder = async () => {
            try {
                const response1 = await getAllOder()
                const response2 = await viewOrder("65546ead65254f0008541b84")
            } catch (error) {
                
            }
        }
        getOrder()
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShowModal1 = () => {
        setShowModal1(true);
        console.log("Mở modal")
    };
    const handleCloseModal1 = () => {
        setShowModal1(false);
    };
    const handleShowModal2 = () => {
        setShowModal1(false); // Tắt modal 1
        setShowModal2(true); // Hiển thị modal 2
    };

    const handleCloseModal2 = () => {
        setShowModal2(false); // Tắt modal 2
        setShowModal1(false); // Tắt modal 1
    };
    const handleReturnModal1 = () => {
        setShowModal2(false); // Tắt modal 2
        setShowModal1(true); // Tắt modal 1
    };
    

    const handleBack = () => {
        navigate("/user/profile")
    }

    return (
        <div>
            <div class="block-section">
                <div class="container">
                    <h1 class="block-title mb-4 text-center">{t("orderHis")}</h1>
                    <div class="history-switch">
                        <div class="item now active">FALTH</div>
                    </div>
                    <div class="history-table-container">
                        <div class="filter-table">
                            <div class="filter-table-item">
                                <div class="text-nowrap">
                                    <span class="filter-table-label">{t("status")}</span><select name="" class="form-control filter-table-input">
                                        <option value="-1" selected="">{t("all")}</option>
                                        <option value="4">{t("complete")}</option>
                                        <option value="8">{t("cancel")}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="filter-table-item">
                                <div class="text-nowrap">
                                    <span class="filter-table-label">{t("from")}</span>
                                    <input ref={fromDateRef} class="input--style-2 js-datepicker" type="text" style={{ width: '255px' }} />
                                </div>
                            </div>

                            <div class="filter-table-item">
                                <div class="text-nowrap">
                                    <span class="filter-table-label">{t("to")}</span>
                                    <input
                                        ref={toDateRef}
                                        class="flatpickr-input input--style-2 js-datepicker"
                                        type="text"
                                        style={{ width: '255px' }}
                                    />
                                </div>
                            </div>
                            <div class="filter-table-item">
                                <button type="button" class="btn btn-sm">{t("search")}</button>
                            </div>
                        </div>
                        <div class="history-table">
                            <div class="history-table-row history-table-heading">
                                <div class="history-table-cell history-table-col1">STT</div>
                                <div class="history-table-cell history-table-col3">
                                    {t("time")}
                                </div>
                                <div class="history-table-cell history-table-col4">
                                    {t("place")}
                                </div>
                                <div class="history-table-cell history-table-col5">
                                    {t("staff")}
                                </div>
                                <div class="history-table-cell history-table-col6">
                                    {t("total")}
                                </div>
                                <div class="history-table-cell history-table-col7">
                                    {t("status")}
                                </div>
                                <div class="history-table-cell history-table-col8">
                                    {t("detail")}
                                </div>
                                <div class="history-table-cell history-table-col8">
                                    {t("action")}
                                </div>
                            </div>
                            <div class="history-table-row">
                                <div class="history-table-cell history-table-col1">1</div>
                                <div class="history-table-cell history-table-col3">
                                    <div>{t("orderTime")}: 10/09/2023 13:56</div>
                                    <div>{t("receiveTime")}: 10/09/2023 14:10</div>
                                </div>
                                <div class="history-table-cell history-table-col4">
                                    <a
                                        href="/da-nang/coco-che"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    ><div class="text-body">
                                            <strong class="d-block text-truncate"
                                            >Coco Chè - Hồ Xuân Hương</strong><span class="d-block text-truncate"
                                            >82 Hồ Xuân Hương, P. Khuê Mỹ, Quận Ngũ Hành Sơn, Đà
                                                Nẵng</span>
                                        </div></a>
                                </div>
                                <div class="history-table-cell history-table-col5">
                                    <strong class="d-block text-truncate">Tôn Long Tiến</strong>
                                </div>
                                <div class="history-table-cell history-table-col6">
                                    <div style={{ fontWeight: 'bold' }}><span>171,550đ</span></div>
                                    <div style={{ color: 'green', fontWeight: 'bold' }}>
                                        Thanh toán trực tuyến
                                    </div>
                                </div>
                                <div class="history-table-cell history-table-col7">
                                    <div class="font-weight-bold history-table-status"  style={{color:'#6cc942'}}>
                                        Complete
                                    </div>
                                </div>
                                <div class="history-table-cell history-table-col8">
                                    <button className="d-block mb-1" onClick={handleShowModal} style={{color:'#0288d1', fontWeight:'600'}}>
                                        {t("orderDetail")}
                                    </button>
                                </div>
                                <div class="history-table-cell history-table-col8">
                                    <button
                                        class="font-weight-bold history-table-status gray pointer"
                                        style={{backgroundColor:'#e81f1b', color:'white'}}
                                    >
                                        {t('cancel')}
                                    </button>
                                    <button
                                        class="font-weight-bold history-table-status gray pointer"
                                        style={{backgroundColor:'#0288d1', color:'white'}}
                                        onClick={handleShowModal1}
                                    >
                                        {t('rating')}
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                        <div class="filter-table-item" style={{float:"right", marginTop:'30px'}}>
                                <button type="button" class="btn btn-sm" onClick={handleBack}>{t("back")}</button>
                            </div>
                    </div>
                </div>
            </div>
            <Modal className="modal fade bd-example-modal-lg " show={showModal} onHide={handleCloseModal} size="lg">

                <Modal.Body>
                    <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content">
                            <div
                                class="modal-header modal-header-transparent justify-content-center"
                            >
                                <h5 class="modal-title">Chi tiết đơn hàng</h5>
                            </div>
                            <div class="modal-body">
                                <div class="row no-gutters">
                                    <div class="col">
                                        Đơn của bạn tại&nbsp;<strong>Coco Chè - Hồ Xuân Hương</strong>
                                    </div>
                                    <div class="col-auto">
                                        <div
                                            class="font-weight-bold mb-0 text-danger history-customer-total"
                                        >
                                            Tổng cộng: 171,550đ
                                        </div>
                                    </div>
                                </div>
                                <div class="history-table history-customer-order">
                                    <div class="history-table-row history-table-heading">
                                        <div class="history-table-cell history-table-col1">
                                            Thành viên
                                        </div>
                                        <div class="history-table-cell history-table-col2">món</div>
                                        <div class="history-table-cell history-table-col3">Số lượng</div>
                                        <div class="history-table-cell history-table-col4">Giá</div>
                                        <div class="history-table-cell history-table-col5">phí</div>
                                        {/* <div class="history-table-cell history-table-col6">Giảm giá</div> */}
                                        <div class="history-table-cell history-table-col7">Tổng cộng</div>
                                        <div class="history-table-cell history-table-col8"></div>
                                    </div>
                                    <div class="history-table-scroll">
                                        <div class="history-table-row">
                                            <div class="history-table-cell history-table-col1">
                                                <div class="customer-order row no-gutters align-items-center">
                                                    <div class="customer-order-avatar col-auto">
                                                        <img
                                                            src="http://media-test.foody.vn/default/s160/shopeefood-user-default-female.png"
                                                            alt=""
                                                            class="w-100 d-block"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="history-table-cell history-table-col2">
                                                <div class="mb-1 history-order">
                                                    <span class="circle-status sm"></span>
                                                    <span class="txt-bold">2 Chè khoai dẻo Co co</span>
                                                    <span class="history-table-note"></span>
                                                </div>
                                                <div class="mb-1 history-order">
                                                    <span class="circle-status sm"></span>
                                                    <span class="txt-bold">1 Chè khoai dẻo đậu</span><span class="history-table-note"></span>
                                                </div>
                                                <div class="mb-1 history-order">
                                                    <span class="circle-status sm"></span>
                                                    <span class="txt-bold">2 Chè khoai dẻo trân châu</span><span class="history-table-note"></span>
                                                </div>
                                            </div>
                                            <div class="history-table-cell history-table-col3">5 Items</div>
                                            <div class="history-table-cell history-table-col4">
                                                145,000<span
                                                    style={{
                                                        fontWeight: '400',
                                                        position: 'relative',
                                                        top: '-9px',
                                                        fontSize: '10px',
                                                        right: '0',
                                                    }}>đ</span>
                                            </div>
                                            <div class="history-table-cell history-table-col5">
                                                46,550<span
                                                    style={{
                                                        fontWeight: '400',
                                                        position: 'relative',
                                                        top: '-9px',
                                                        fontSize: '10px',
                                                        right: '0',
                                                    }}
                                                >đ</span>
                                            </div>
                                            {/* <div class="history-table-cell history-table-col6">
                                                -<span
                                                >20,000<span
                                                    style={{
                                                        fontWeight: '400',
                                                        position: 'relative',
                                                        top: '-9px',
                                                        fontSize: '10px',
                                                        right: '0',
                                                    }}>đ</span></span>
                                            </div> */}
                                            <div class="history-table-cell history-table-col7">
                                                <strong class="text-danger">171,550đ</strong>
                                            </div>
                                            <div class="history-table-cell history-table-col8">
                                                <div class="custom-checkbox">
                                                    <input type="checkbox" id="district-1" /><label
                                                        for="district-1"
                                                    ></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer content-center">
                                <div class="relative">
                                    <button
                                        type="button"
                                        class="btn btn-danger btn-width-long"
                                        onClick={handleCloseModal}
                                    >
                                        Đóng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <RatingShipper show={showModal1} handleClose={handleCloseModal1} handleShowRatingStore={handleShowModal2}/>
            <RatingStore show={showModal2} handleClose={handleCloseModal2}/>
            {/* <Modal className="modal fade modal-customer-feeback" show={showModal1} onHide={handleCloseModal1} size="lg">
                <Modal.Header>
                    <span class="close" style={{ fontSize: '24px' }} onClick={handleCloseModal1}
                    >x</span>
                    <div class="modal-header" style={{ color: 'white' }}>Đánh giá Tài xế</div>
                </Modal.Header>
                <Modal.Body>
                    <div class="modal-dialog modal-noti" role="document">
                        <div class="modal-content">

                            <div class="modal-body">
                                <div class="slick-slider slick-initialized" dir="ltr">
                                    <div class="slick-list">
                                        <div
                                            class="slick-track"
                                            style={{
                                                opacity: 1,
                                                transform: 'translate3d(0px, 0px, 0px)',
                                                width: '1620px',
                                            }}


                                        >
                                            <div
                                                data-index="0"
                                                class="slick-slide slick-active slick-current"
                                                tabindex="-1"
                                                aria-hidden="false"
                                                style={{ outline: 'none' }}
                                            >
                                                <div>
                                                    <div style={{ width: '540px' }}>
                                                        <div class="review-section">
                                                            <img
                                                                class="image"
                                                                src={ava}
                                                                alt=""
                                                            />
                                                            <div class="shipper-name">Tôn Long Tiến</div>
                                                            <div >
                                                                <select defaultValue="" className="custom-select" id="" value={rating} onChange={(e) => setRating(e.target.value)}>
                                                                    <option value="" selected="selected" disabled>Đánh giá theo số sao</option>
                                                                    <option value={1}>1 sao</option>
                                                                    <option value={2}>2 sao</option>
                                                                    <option value={3}>3 sao</option>
                                                                    <option value={4}>4 sao</option>
                                                                    <option value={5}>5 sao</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="block-comment">
                                                            <textarea
                                                                name=""
                                                                id=""
                                                                placeholder="Chia sẻ đánh giá của bạn. Đánh giá và bình luận của bạn sẽ được giữ dưới chế độ ẩn danh."
                                                                maxlength="300"
                                                                value={reviewText} onChange={(e) => setReviewText(e.target.value)}
                                                            ></textarea>
                                                            <div class="upload-image">
                                                                <div class="item-upload btn-up">
                                                                    <label
                                                                    ><span class="fa-solid fa-upload" style={{ fontSize: '30px' }}></span><input
                                                                            type="file"
                                                                            multiple=""
                                                                            accept=".png,.jpg,.jpeg"
                                                                            style={{ visibility: 'hidden' }}
                                                                            value={reviewText} onChange={(e) => setSelectedImage(e.target.value)}
                                                                        /></label>
                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                        <div class="submit-section">
                                                            <button type="button" class="btn btn-submit" variant="primary" onClick={handleShowModal2}>
                                                                Tiếp tục
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-backdrop fade under-modal"></div>
                </Modal.Body>
            </Modal> */}
            {/* <Modal className="modal fade modal-customer-feeback" show={showModal2} onHide={handleCloseModal2} size="lg">
                <Modal.Header>
                    <span class="close" style={{ fontSize: '24px' }} onClick={handleCloseModal2}
                    >x</span>
                    <div class="modal-header" style={{ color: 'white' }}>Đánh giá quán</div>
                </Modal.Header>
                <Modal.Body>
                    <div class="modal-dialog modal-noti" role="document">
                        <div class="modal-content">

                            <div class="modal-body">
                                <div class="slick-slider slick-initialized" dir="ltr">
                                    <div class="slick-list">
                                        <div
                                            class="slick-track"
                                            style={{
                                                opacity: 1,
                                                transform: 'translate3d(0px, 0px, 0px)',
                                                width: '1620px',
                                            }}


                                        >
                                            <div
                                                data-index="0"
                                                class="slick-slide slick-active slick-current"
                                                tabindex="-1"
                                                aria-hidden="false"
                                                style={{ outline: 'none' }}
                                            >
                                                <div>
                                                    <div style={{ width: '540px' }}>
                                                        <div class="review-section">
                                                            <img
                                                                class="image"
                                                                src={ava}
                                                                alt=""
                                                            />
                                                            <div class="shipper-name">
                                                                Coco Chè - Hồ Xuân Hương
                                                            </div>
                                                            <div class="rating-star-container">
                                                                <select defaultValue="" className="custom-select" id="" value={rating} onChange={(e) => setRating(e.target.value)}>
                                                                    <option value="" selected="selected" disabled>Đánh giá theo số sao</option>
                                                                    <option value={1}>1 sao</option>
                                                                    <option value={2}>2 sao</option>
                                                                    <option value={3}>3 sao</option>
                                                                    <option value={4}>4 sao</option>
                                                                    <option value={5}>5 sao</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="block-comment">
                                                            <textarea
                                                                name=""
                                                                id=""
                                                                placeholder="Chia sẻ đánh giá của bạn. Đánh giá và bình luận của bạn sẽ được giữ dưới chế độ ẩn danh."
                                                                maxlength="300"
                                                                value={reviewText} onChange={(e) => setReviewText(e.target.value)}
                                                            ></textarea>
                                                            <div class="upload-image">
                                                                <div class="item-upload btn-up">
                                                                    <label
                                                                    ><span class="fa-solid fa-upload" style={{ fontSize: '30px' }}></span><input
                                                                            type="file"
                                                                            multiple=""
                                                                            accept=".png,.jpg,.jpeg"
                                                                            style={{ visibility: 'hidden' }}
                                                                            value={reviewText} onChange={(e) => setSelectedImage(e.target.value)}
                                                                        /></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="submit-section">
                                                            <button type="button" class="btn btn-cancel" onClick={handleReturnModal1}>Quay lại</button>
                                                                <button
                                                                    type="button"
                                                                    disabled=""
                                                                    class="btn btn-submit"
                                                                >
                                                                Gửi đánh giá
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-backdrop fade under-modal"></div>
                </Modal.Body>
            </Modal> */}
        </div>
    )
}

export default OrderHistory