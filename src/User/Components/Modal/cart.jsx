import React, { useState, useEffect } from 'react';
import nocart from '../../assets/img/no_cart.png'
import CartItem from '../Item/cartItem';
import AddDish from './addDish';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../services/authContext';
import { useTranslation } from 'react-i18next';
const CartModal = ({ show, handleClose }) => {
    const {t} = useTranslation();
    const {isLoggedIn} = useAuth();
    const [total, setTotal] = useState(0); // Số tiền tổng ban đầu là 0

    // Hàm này được gọi từ mỗi CartItem để cập nhật tổng tiền
    // const updateTotalPrice = (id, activity, totalPrice) => {
    //     console.log("update")
    //     if(activity === "-")
    //         setTotal((prevTotal) => prevTotal - totalPrice);
    //     else if(activity === "+"){
    //         setTotal((prevTotal) => prevTotal + totalPrice);
    //     }
    //     else {
    //         setTotal((prevTotal) => prevTotal - totalPrice);
    //     }
    // };
    const navigate = useNavigate();

    const handleOrder = (activity) => {
        if(activity === "order") {
            handleClose()
            navigate("/user/order")
        } else {
            handleClose()
            navigate("/signin")
        }
        
    }
    const [cart, setCart] = useState({
        idStore : "",
        nameStore : "",
        products : []
    });

  useEffect(() => {
    const updateCart = () => {
        const cartdata = JSON.parse(localStorage.getItem('cart'));
      if (cartdata && cartdata.products) {
        setCart({
            ...cart,
            idStore: cartdata.idStore,
            nameStore: cartdata.nameStore,
            products: cartdata.products
          });
          let temp = 0;
          cartdata.products.forEach(product => {
            // Lấy số lượng và giá của sản phẩm
            const quantity = product.amount;
            const price = product.price;
        
            // Tính giá trị cho sản phẩm hiện tại và cộng vào tổng
            const productTotal = quantity * price;
            temp += productTotal
            // console.log(total)
        });  
        setTotal(temp) 
      }
    }

    updateCart(); // Cập nhật ban đầu
    window.addEventListener('cartUpdated', updateCart);

    return () => {
      window.removeEventListener('cartUpdated', updateCart);
    }
    
  }, []);

  const updateTotalPrice = (id, quantity, price) => {
    // Tìm sản phẩm có id tương ứng trong giỏ hàng
    const updatedProducts = cart.products.map(product => {
      if (product.id === id) {
        product.amount = quantity;
      }
      return product;
    });

    // Cập nhật giỏ hàng với sản phẩm đã được cập nhật
    setCart({
      ...cart,
      products: updatedProducts
    });

    // Tính lại tổng tiền
    let tempTotal = 0;
    updatedProducts.forEach(product => {
      const productTotal = product.amount * product.price;
      tempTotal += productTotal;
    });

    setTotal(tempTotal);
  };


    return (
        <div>
            {/* {showModal && ( */}
            <div className={`ant-drawer ant-drawer-right ant-drawer-open DrawerWrapper___3chn_ DrawerWrapper--custom`}>
                <div className="ant-drawer-mask" onClick={handleClose}></div>

                <div className="ant-drawer-content-wrapper" style={{ width: '256px' }}>
                    <div className="ant-drawer-content">
                        <div className="ant-drawer-wrapper-body" style={{ overflow: 'auto', height: '100%' }}>
                        {cart.products.length > 0 ? (
                            <div class="ant-drawer-body">
                                <div class="Container___3hdF4">
                                    <div class="Header___1IY4t">
                                        <div class="Close___3j6yl" role="button" tabindex="0"
                                        ><div role="button" tabIndex="0" style={{ fontSize: '25px', fontWeight: '300', color: 'black', cursor: 'pointer' }} onClick={handleClose}>x</div></div>
                                        <div class="BlockTitle___2pGA_">
                                            <div class="title___3Sq4y" style={{fontSize:'30px'}}>{t("cartName")}</div>
                                            {/* <div class="subtitle___1Stq2">
                                                <div class="small___1YhlN CartHeader-Caption-Clock___cBpaH"><i class="fa-regular fa-clock"></i></div>
                                                <span>{t("timeDelivery")} 15 {t("minutes")} ({t("distance")} 1,2 km)</span>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="BodyWrapper___31bjI">
                                        <div class="BodyScroller___2bUgC">
                                            <div class="Body___20FKF CartBody___3v3rN">
                                                <div class="CartMerchantList___3GwGF">
                                                    <div class="CartMerchant CartMerchantList-Item___3mF14">
                                                        <a
                                                            role="button"
                                                            tabindex="0"
                                                            href="/vn/vi/restaurant/c%C6%A1m-t%E1%BA%A5m-mi%E1%BB%81n-t%C3%A2y-2-hai-b%C3%A0-tr%C6%B0ng-delivery/5-CYUUNFJYBELDRX?"
                                                            style={{ color: 'inherit', textDecoration: 'none' }}
                                                        ><h5>{cart.nameStore}</h5></a>
                                                        <div class="CartItemList___1cspW">
                                                            {cart.products.map((product) => (
                                                                <CartItem
                                                                    inputQuantity={product.amount}
                                                                    linkImage={product.image[0]}
                                                                    dishName={product.name}
                                                                    specialRequest={product.specialRequest}
                                                                    price={product.price}
                                                                    id={product.id}
                                                                    updateTotalPrice={updateTotalPrice}
                                                                />
                                                            ))}          
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="Summary___xAbzz">
                                                    <div>
                                                    {t("cartMess1")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="Footer___MhWOA">
                                        <div class="ant-row-flex CartFooter-PriceInfo___1UEeS">
                                            <div class="ant-col-8">{t("total")}</div>
                                            <div class="ant-col-16 CartFooter-Price___1jcoa">
                                                {total} ₫
                                            </div>
                                        </div>
                                        <div>
                                        {isLoggedIn ? (
                                            <button
                                                type="button"
                                                class="ant-btn ant-btn-primary ant-btn-block"
                                                onClick={() => handleOrder('order')}
                                            >
                                                <span>{t("order")}</span>
                                            </button>
                                            ) : (
                                                <button
                                                type="button"
                                                class="ant-btn ant-btn-primary ant-btn-block"
                                                onClick={() => handleOrder('signin')}
                                            >
                                                <span>{t("signinToOrder")}</span>
                                            </button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ) : (
                            <div className="ant-drawer-body">
                                <div className="CartClose___2qcP9">
                                    <div role="button" tabIndex="0" style={{ fontSize: '25px', fontWeight: '300', color: 'black', cursor: 'pointer' }} onClick={handleClose}>x</div>
                                </div>
                                <div className="Container___2ODfk">
                                    <div className="InnerContainer___127AT">
                                        <div className="Ilus___1VMHi">
                                            <img src={nocart} alt="" />
                                        </div>
                                        <h5 className="Title___ELm2y">{t("cartTitle")}</h5>
                                        <div className="Caption___2tnhx">{t("cartMess")}</div>
                                        <div className="">
                                            <button type="button" className="ant-btn textButton___2wwqU Button___2IyZ2" onClick={handleClose}>
                                                <span>{t("cartNav")}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        )}
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartModal;
