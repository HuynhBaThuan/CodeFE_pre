import React, {useState, useEffect} from "react";
import CartModal from "../../Components/Modal/cart";
import { useLocation } from "react-router-dom";
import { getStoreById } from "../../services/userServices";
const StoreDetail = () => {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation()
    const store = location.state.store.store;
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
        try {
            // const storeData = await getStoreById(id);
            console.log(store)
        } catch (error) {
            console.error("Lỗi khi lấy thông tin quán ăn:", error);
        }
    }
    fetchData();
  }, []);
    return (
        <div>
            <div class="wrapper">
                <div class="now-detail-restaurant clearfix">
                    <div class="container">
                        <div class="detail-restaurant-img">
                            <img
                                // src="https://images.foody.vn/res/g119/1184583/prof/s640x400/foody-upload-api-foody-mobile-37-80aba800-230914093440.jpeg"
                                src={store.image}
                                alt={store.name}
                                class=""
                            />
                        </div>
                        <div class="detail-restaurant-info">

                            <div class="kind-restaurant"><span> Quán ăn</span></div>
                            <h1 class="name-restaurant">
                                {store.name}
                            </h1>
                            <div class="address-restaurant">
                               {store.address}
                            </div>
                            <div class="rating">
                                <div class="stars">
                                    <span class=""><i class="fas fa-solid fa-star"></i></span>
                                </div>
                                <span class="number-rating">{store.ratingAverage}</span>đánh giá trên FALTH
                            </div>
                            <div class="view-more-rating">
                                <a
                                    href="https://foody.vn/da-nang/sau-nuong-lau-nuong-tran-dai-nghia"
                                    rel="noopener noreferrer nofollow"
                                    target="_blank"
                                    class="number-review"
                                >{store.description}</a>
                            </div>
                            <div class="status-restaurant">
                                <div class="opentime-status">
                                    <span class="stt online" title="Mở cửa"></span>
                                </div>
                                <div class="time"><i class="far fa-clock"></i>{store.openAt} - {store.closeAt}</div>
                            </div>

                            <div class="share-social clearfix">
                                <div class="share-social-box">
                                    <div
                                        class="fb-like"
                                        data-layout="button"
                                        data-action="like"
                                        data-size="small"
                                        data-show-faces="false"
                                        data-share="true"
                                        data-colorscheme="light"
                                        data-kid-directed-site="false"
                                    ></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="container relative clearfix">
                    <div class="now-menu-restaurant">
                        <div class="menu-restaurant-tab">
                            <div class="item active">Thực đơn</div>
                        </div>
                        <div class="menu-restaurant-content-tab">
                            <div class="menu-restaurant-container">
                                <div class="menu-restaurant-category">
                                    <div class="list-category" id="scroll-spy">
                                        <div class="scrollbar-container ps">
                                            <div class="item">
                                                <span
                                                    id="6936699"
                                                    title="Món Nướng"
                                                    class="item-link active"
                                                >Món Nướng</span>
                                            </div>
                                            <div class="item">
                                                <span id="6936706" title="Menu Ăn Vặt" class="item-link"
                                                >Menu Ăn Vặt</span>
                                            </div>
                                            <div class="item">
                                                <span id="6936704" title="Món Lẩu" class="item-link"
                                                >Món Lẩu</span>
                                            </div>
                                            <div class="item">
                                                <span id="6938990" title="Menu Ăn Nhậu" class="item-link"
                                                >Menu Ăn Nhậu</span>
                                            </div>
                                            <div class="item">
                                                <span id="6936696" title="Đồ Uống" class="item-link"
                                                >Đồ Uống</span>
                                            </div>
                                            <div class="ps__rail-x" style={{ left: '0px', bottom: '0px' }}>
                                                <div
                                                    class="ps__thumb-x"
                                                    tabindex="0"
                                                    style={{ left: '0px', width: '0px' }}
                                                ></div>
                                            </div>
                                            <div class="ps__rail-y" style={{ top: '0px', right: '0px' }}>
                                                <div
                                                    class="ps__thumb-y"
                                                    tabindex="0"
                                                    style={{ top: '0px', height: '0px' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="menu-restaurant-detail">

                                    <div class="menu-restaurant-list">
                                        <div class="search-items">
                                            <p class="input-group">
                                                <i class="fas fa-search"></i><input
                                                    type="search"
                                                    name="searchKey"
                                                    placeholder="Tìm món"
                                                    value=""
                                                />
                                            </p>
                                        </div>
                                        <div id="restaurant-item">
                                            <div
                                                aria-label="grid"
                                                aria-readonly="true"
                                                class="ReactVirtualized__Grid ReactVirtualized__List"
                                                role="grid"
                                                tabindex="0"
                                                style={{
                                                    boxSizing: 'border-box',
                                                    direction: 'ltr',
                                                    height: 'auto',
                                                    position: 'relative',
                                                    width: '558px',
                                                    willChange: 'transform',
                                                    overflow: 'auto',
                                                    outline: 'none',
                                                }}
                                            >
                                                <div
                                                    class="ReactVirtualized__Grid__innerScrollContainer"
                                                    role="rowgroup"
                                                    style={{
                                                        width: 'auto',
                                                        height: '2719px',
                                                        maxWidth: '558px',
                                                        maxHeight: '2719px',
                                                        overflow: 'hidden',
                                                        position: 'relative',
                                                    }}
                                                >
                                                    <div
                                                        class="menu-group"
                                                        id="section-group-menu-6936699"
                                                        style={{
                                                            height: '56px',
                                                            left: '0px',
                                                            position: 'absolute',
                                                            top: '0px',
                                                            width: '100%',
                                                        }}
                                                    >
                                                        <div class="title-menu">Món Nướng</div>
                                                    </div>
                                                    <div
                                                        class="item-restaurant-row"
                                                        style={{
                                                            height: '84px',
                                                            left: '0px',
                                                            position: 'absolute',
                                                            top: '56px',
                                                            width: '100%',
                                                        }}
                                                    >
                                                        <div class="row">
                                                            <div class="col-auto item-restaurant-img">
                                                                <button class="inline">
                                                                    <img
                                                                        src="https://images.foody.vn/res/g119/1184583/s120x120/1ac0a724-a306-458e-9c99-6f35250c-a122a597-230914133729.jpeg"
                                                                        alt="Chân gà nướng muối ớt"
                                                                        width="60"
                                                                        height="60"
                                                                    />
                                                                </button>
                                                            </div>
                                                            <div class="col item-restaurant-info">
                                                                <h2 class="item-restaurant-name">
                                                                    Chân gà nướng muối ớt
                                                                </h2>
                                                                <div class="item-restaurant-desc">8 chân</div>
                                                                <div class="item-restaurant-total">
                                                                    Đã được đặt<span class="txt-bold"
                                                                    >&nbsp;10+&nbsp;</span>lần
                                                                </div>
                                                            </div>
                                                            <div class="col-auto item-restaurant-more">
                                                                <div class="row">
                                                                    <div class="col-auto product-price">
                                                                        <div class="current-price">
                                                                            39,000<span
                                                                                style={{
                                                                                    fontWeight: '400',
                                                                                    position: 'relative',
                                                                                    top: '-9px',
                                                                                    fontSize: '10px',
                                                                                    right: '0',
                                                                                }}
                                                                            >đ</span>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="col-auto adding-food-cart txt-right"
                                                                    >
                                                                        <div class="btn-adding" onClick={openModal}>+</div>
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
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            {showModal && (
        <CartModal show={showModal} handleClose={closeModal} />
      )}
        </div>
    )
}

export default StoreDetail