import React, { useState, useEffect } from "react";
import CartModal from "../../Components/Modal/cart";
import { useLocation } from "react-router-dom";
import { getAllCategoryByStoreId } from "../../services/userServices";
import { useTranslation } from "react-i18next";
import MenuGroup from "../../Components/Item/menuGroup";
import { Link, Element } from "react-scroll";
import LoadingModal from "../../Components/Loading/Loading";
import axios from "axios";
const StoreDetail = () => {
    const { t } = useTranslation()
    const [showModal, setShowModal] = useState(false);
    const [categories, setCategories] = useState([]);
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(false)
    const store = location.state.store.store;
    // const data = [
    //     {
    //         id: '1',
    //         catName: "Món nướng",
    //         photo: "photo1.jpg",
    //     },
    //     {
    //         id: '2',
    //         catName: "Ăn vặt",
    //         photo: "photo2.jpg",
    //     },
    //     {
    //         id: '3',
    //         catName: "Món lẩu",
    //         photo: "photo3.jpg",
    //     },
    // ];
    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                // setCategories(data)
                const data = await getAllCategoryByStoreId(store._id)
                setCategories(data.data)

            } catch (error) {
                console.error("Lỗi khi lấy thông tin quán ăn:", error);
            }
            setIsLoading(false)
        }
        fetchData();
    }, []);

    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
    };

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

                            <div class="kind-restaurant"><span> {t("store")}</span></div>
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
                                <span class="number-rating">{store.ratingAverage}</span>{t("ratingInFALTH")}
                            </div>
                            <div class="view-more-rating">
                                <span
                                    // href="https://foody.vn/da-nang/sau-nuong-lau-nuong-tran-dai-nghia"
                                    rel="noopener noreferrer nofollow"
                                    target="_blank"
                                    class="number-review"
                                >{store.description}</span>
                            </div>
                            <div class="status-restaurant">
                                <div class="opentime-status">
                                    <span class="stt online" title={t("storeActive")}></span>
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
                            <div class="item active">{t("menu")}</div>
                        </div>
                        <div class="menu-restaurant-content-tab">
                            <div class="menu-restaurant-container">
                                <div class="menu-restaurant-category">
                                    <div class="list-category" id="scroll-spy">
                                        <div class="scrollbar-container ps">
                                            {categories.map((category) => (
                                                <Link to={category.catName} spy={true} smooth={true} duration={500} offset={-150}>

                                                    <div className="item" key={category.id}>
                                                        <span
                                                            // id={`category-link-${category.id}`}
                                                            title={category.catName}
                                                            className={`item-link ${category.id === activeCategory ? 'active' : ''
                                                                }`}
                                                            onClick={() => handleCategoryClick(category.id)}
                                                        >
                                                            {category.catName}
                                                        </span>
                                                    </div>
                                                </Link>
                                            ))}
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
                                                    placeholder={t("searchDish")}
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

                                                    {categories.map((category) => (
                                                        <Element name={category.catName} className="element">

                                                            <MenuGroup
                                                                category={category}
                                                                openModal={openModal}
                                                                store={store}
                                                            />
                                                        </Element>
                                                    ))}

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
                <CartModal show={showModal} handleClose={closeModal} handleOpen={openModal} />
            )}
            {isLoading && (<LoadingModal />)}
        </div>
    )
}

export default StoreDetail