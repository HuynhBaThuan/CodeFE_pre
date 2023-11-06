import React, { useState, useEffect } from 'react';
import '../../assets/css/header.css'
import logo from '../../assets/img/logo.png'
import emptycart from '../../assets/img/no_cart.png'
import dishincart from '../../assets/img/food.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../../assets/fonts/fontawesome-free-6.2.0-web/css/all.min.css'
import '../../assets/fonts/fontawesome-free-6.2.0-web/css/fontawesome.min.css'
import { useNavigate } from "react-router-dom";
import CartModal from '../Modal/cart';
import { useAuth, useLogout } from '../../services/authContext';
import { useCity } from '../../services/CityContext';
import { useLang } from '../../services/languageContext';
import { useTranslation } from "react-i18next";


const Header = () => {
    const { t } = useTranslation();
    const { isLoggedIn, setIsLoggedIn, userName, setUserName, img, setImg } = useAuth()
    const { selectedLocation, updateLocation, key, updateKey } = useCity();
    const { selectedLang, updateLang } = useLang();
    const [isDropdownLocationOpen, setDropdownLocationOpen] = useState(false);
    const [isDropdownInfoOpen, setDropdownInfoOpen] = useState(false);
    const [isDropdownLangOpen, setDropdownLangOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('icon icon-lag-vn');

    const toggleDropdownLocation = () => {
        setDropdownLocationOpen(!isDropdownLocationOpen);
    };
    const toggleDropdownInfo = () => {
        setDropdownInfoOpen(!isDropdownInfoOpen);
    };
    const toggleDropdownLang = () => {
        setDropdownLangOpen(!isDropdownLangOpen);
    };

    const [showModal, setShowModal] = useState(false);


    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const navigate = useNavigate();

    const handleNav = ({ nav }) => {
        navigate(`/${nav}`);
    };
    const goHome = () => {
        navigate("/")
    }

    const logout = useLogout();
    function handleLogout() {
        logout();
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        // setIsLoggedIn(false)
        navigate("/")
    }
    
    const cities = ['Hà Nội','Hồ Chí Minh','Hải Phòng','Cần Thơ','Đà Nẵng','Bắc Ninh','Bắc Giang','Hà Tĩnh','Thái Bình','Nam Định','Ninh Bình','Hòa Bình','Lào Cai','Sơn La','Lai Châu','Điện Biên','Lạng Sơn','Bắc Kạn','Lâm Đồng','Bình Dương','Đồng Nai','Bà Rịa - Vũng Tàu','An Giang','Bạc Liêu','Bến Tre','Bình Định','Bình Phước','Bình Thuận','Cà Mau','Hà Nam','Hà Giang','Hà Tây','Hà Đông','Hà Nội','Hải Dương','Hải Phòng','Hà Tĩnh','Hòa Bình','Hưng Yên','Khánh Hòa','Kiên Giang','Kon Tum','Lai Châu','Lâm Đồng','Lạng Sơn','Lào Cai','Long An','Nam Định','Nghệ An','Ninh Bình','Ninh Thuận','Phú Thọ','Phú Yên','Quảng Bình','Quảng Nam','Quảng Ngãi','Quảng Ninh','Quảng Trị','Sóc Trăng','Sơn La','Tây Ninh','Thái Bình','Thái Nguyên','Thanh Hóa','Thừa Thiên-Huế','Tiền Giang','Trà Vinh','Tuyên Quang','Vĩnh Long','Vĩnh Phúc','Yên Bái']
    const handleLocationSelect = (location) => {
        updateLocation(location);
        setDropdownLocationOpen(false)
    }

    const handleSelectLanguage = (iconName, lng) => {
        updateLang(lng)
        setSelectedLanguage(iconName);
        setDropdownLangOpen(false)
    };

    const [tempKey, setTempKey] = useState('');
    const handleSearch = () => {
        updateKey(tempKey)
        setTempKey('')
        console.log('Search value:', key);
      };
    
      const handleInputChange = (event) => {
        setTempKey(event.target.value);
      };
    
      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleSearch();
        }
      };


    useEffect(() => {
        console.log(isLoggedIn)

        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (token) {
                    setIsLoggedIn(true)
                    const savedUser = localStorage.getItem('user');
                    if (savedUser) {
                        const user = (JSON.parse(savedUser));
                        console.log(user.firstName + user.lastName);
                        setUserName(user.firstName + user.lastName)
                        setImg(user.photo)
                    }
                } else {
                    console.error("Token không tồn tại trong local storage");
                }
            } catch (error) {
                console.error("Lỗi khi lấy thông tin người dùng:", error);
            }
        }
        fetchData();
    },);

    const [productsCount, setProductsCount] = useState(0);
    const [cart, setCart] = useState(null);

  useEffect(() => {
    // Lắng nghe sự kiện 'cartUpdated' để cập nhật số lượng sản phẩm
    const updateCartCount = () => {
      const cartdata = JSON.parse(localStorage.getItem('cart'));
      if (cartdata && cartdata.products) {
        // Nếu cart tồn tại và có thuộc tính 'products', thì mới cập nhật productsCount
        const count = cartdata.products.length;
        setProductsCount(count);
        setCart(cartdata)
        console.log(cartdata)
      }
    }

    window.addEventListener('cartUpdated', updateCartCount);
    updateCartCount(); // Cập nhật ban đầu

    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    }
  }, []);

    return (
        <div>

            <header class="main-header">
                <div class="container-header">
                    <div class="container">
                        <div class="header-content navbar row justify-content-between align-items-center">
                            <div class="logo-now col-auto">
                                <span onClick={goHome}><img
                                    style={{ width: '100px', height: '50px', backgroundColor: 'white', borderRadius: '5px' }}
                                    src={logo}
                                    alt="FALTH"
                                /></span>
                            </div>
                            <div class="select-local col-auto">
                                <div class="dropdown">
                                    <div
                                        class="dropdown-toggle"
                                        role="button"
                                        id="local-dropdown"
                                        data-toggle="dropdown"
                                        tabindex="0"
                                        aria-haspopup="true"
                                        aria-expanded={isDropdownLocationOpen}
                                        onClick={toggleDropdownLocation}
                                    >                                       
                                        {selectedLocation ? selectedLocation : t("headLocation")}
                                    </div>
                                    {isDropdownLocationOpen && (
                                        <div class="dropdown-menu" style={{height:'200px', overflow:'auto'}}>
                                            <button onClick={() => handleLocationSelect('')} style={{ width: '100%',textAlign:'left' }}>
                                                <div class="dropdown-item">
                                                    <span class="name col" >{t("headLocation")}</span>
                                                </div>
                                            </button>
                                            {cities.map((city, index) => (
                                                <button onClick={() => handleLocationSelect(city)} style={{ width: '100%',textAlign:'left' }}>
                                                    <div class="dropdown-item">
                                                        <span class="name col" >{city}</span>
                                                    </div>
                                                </button>
                                            ))}                                           
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div class="main-nav col">
                                <div class="header__search">
                                    <div class="header__search-input-wrap">
                                        <input 
                                            type="text" 
                                            class="header__search-input" 
                                            placeholder={t("headSearch")}
                                            value={tempKey}
                                            onChange={handleInputChange}
                                            onKeyDown={handleKeyPress}
                                        ></input>
                                        {/* Search history */}
                                        {/* <div class="header__search-history">
                                            <h3 class="header__search-history-heading">Lịch sử tìm kiếm</h3>
                                            <ul class="header__search-history-list">
                                                <li class="header__search-history-item">
                                                    <a href="./">gà rán</a>
                                                </li>
                                                <li class="header__search-history-item">
                                                    <a href="./">bánh canh cua</a>
                                                </li>
                                            </ul>
                                        </div> */}
                                    </div>
                                    <button class="header__search-btn" onClick={handleSearch}>
                                        <i class="header__search-btn-icon fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="language dropdown col-auto"
                                style={{ backgroundColor: "white", padding: '2px 5px', borderRadius: '5px', marginRight: '5px' }}
                                aria-expanded={isDropdownLangOpen}
                                onClick={toggleDropdownLang}>
                                <div className='dropdown'>
                                    <div 
                                        class="dropdown-toggle" 
                                        role='button'
                                        id="dropdownMenuButton" 
                                        data-toggle="dropdown" 
                                        tabindex="0"
                                        aria-haspopup="true"
                                        aria-expanded={isDropdownLangOpen}
                                        onClick={toggleDropdownLang}
                                    >
                                        <span class={selectedLanguage}></span>
                                    </div>
                                    {isDropdownLangOpen && (
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                                            <button onClick={() => handleSelectLanguage('icon icon-lag-vn', 'vi')} style={{ width: '100%',textAlign:'left' }}>
                                                <div class="dropdown-item">
                                                    <span class="icon icon-lag-vn"></span>
                                                    <span class="language-item">Vietnamese</span>
                                                </div>
                                            </button>
                                            <button onClick={() => handleSelectLanguage('icon icon-lag-en', 'en')} style={{ width: '100%'}}>
                                                <div class="dropdown-item">
                                                    <span class="icon icon-lag-en"></span>
                                                    <span class="language-item">English</span>
                                                </div>
                                            </button>                                           
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div class="user-acc col-auto">
                                {isLoggedIn ? (
                                    <div class="dropdown">
                                        <div
                                            className="dropdown-toggle"
                                            role="button"
                                            id="user-dropdown"
                                            data-toggle="dropdown"
                                            tabIndex="0"
                                            aria-haspopup="true"
                                            aria-expanded={isDropdownInfoOpen}
                                            onClick={toggleDropdownInfo}
                                        >
                                            <div class="img">
                                                <img src={img} alt={userName} />
                                            </div>
                                            <span class="name">{userName}</span>
                                        </div>
                                        {isDropdownInfoOpen && (
                                            <div class="dropdown-menu" aria-labelledby="user-dropdown">
                                                <button onClick={() => handleNav({ nav: "user/orderHistory" })} style={{ width: '100%' }}>

                                                    <div class="dropdown-item" >
                                                        <FontAwesomeIcon style={{ paddingRight: '5px' }} icon={faHistory} />{' '}
                                                        <span class="text">{t("headOrderHis")}</span>
                                                    </div>
                                                </button>
                                                <button onClick={() => handleNav({ nav: "user/profile" })} style={{ width: '100%' }}>

                                                    <div class="dropdown-item">
                                                        <FontAwesomeIcon style={{ paddingRight: '5px' }} icon={faUser} />{' '}
                                                        <span class="text">{t("headInfo")}</span>
                                                    </div>
                                                </button>
                                                <button style={{ width: '100%' }}>

                                                    <div class="dropdown-item" onClick={handleLogout} >
                                                        <FontAwesomeIcon style={{ paddingRight: '5px' }} icon={faSignOutAlt} />{' '}
                                                        <span class="text">{t("Logout")}</span>
                                                    </div>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <button type="button" class="btn btn-none-bg btn-login" onClick={() => handleNav({ nav: "signin" })}>{t("title_SI")}</button>
                                )}

                            </div>
                            <div class="header__cart">
                                <div class="header__cart-wrap">
                                    <i class="header__cart-icon fas fa-shopping-cart" onClick={openModal}></i>
                                    <span class="header__cart-notice" onClick={openModal}>{productsCount}</span>
                                    {/* <!-- No cart: header__cart-list--no-cart --> */}
                                    <div class="header__cart-list">
                                        <img src={emptycart} alt="" class="header__cart-no-cart-img" />
                                        <span class="header__cart-list-no-cart-msg">{t("headEmptyCart")}</span>

                                        <h4 class="header__cart-heading">{t("headCartTitle")}</h4>
                                        <h4 class="header__cart-heading" style={{color:"black"}}>{cart.nameStore}</h4>
                                        <ul class="header__cart-list-item">
                                            {cart.products.map((product) => (
                                                <li class="header__cart-item">
                                                    <img src={product.image} alt="" class="header__cart-img" />
                                                    <div class="header__cart-item-info">
                                                        <div class="header__cart-item-head">
                                                            <h5 class="header__cart-item-name">{product.name}</h5>
                                                            <div class="header__cart-item-price-wrap">
                                                                <span class="header__cart-item-price">{product.price}đ</span>
                                                                <span class="header__cart-item-mul">x</span>
                                                                <span class="header__cart-item-qnt">{product.amount}</span>
                                                            </div>
                                                        </div>
                                                        <div class="header__cart-item-body">
                                                            <span class="header__cart-item-description">
                                                                {t("headCartRequire")}
                                                            </span>
                                                            <span class="header__cart-item-del">{t("delete")}</span>
                                                        </div>
                                                    </div>
                                                </li>        
                                            ))}
                                            
                                        </ul>

                                        <button class="header__cart-view btn btn--primary" style={{ backgroundColor: '#fd5c63', border: 'none' }} onClick={openModal}>{t("headViewCart")}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {showModal && (
                <CartModal show={showModal} handleClose={closeModal} />
            )}
        </div>
    );
};

export default Header;
