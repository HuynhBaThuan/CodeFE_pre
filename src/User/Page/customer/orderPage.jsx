import React, { useState, useEffect } from "react";
import logo from '../../assets/img/logo.png'
import '../../assets/css/b.css'
import PickAddress from "../../Components/Modal/pickAddress";
import ModalUpdateAddress from "../../Components/Modal/modalUpdateAddress";
import { useNavigate, useLocation } from "react-router-dom";
import { useCity } from "../../services/CityContext";
import OrderDishItem from "../../Components/Item/orderedDishItem";
const OrderPage = () => {
  const [showModalAddress, setShowModalAddress] = useState(false);
  const { cart, setCart, productsCount } = useCity();
  const location = useLocation()
  const total = location.state.total
  const openModalAddress = () => {
    setShowModalAddress(true);
  };

  const closeModalAddress = () => {
    setShowModalAddress(false);
  };

  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/home/storeDetail");
  };

  // useEffect(() => {
  //   let temp = 0;
  //   cart.products.forEach(product => {
  //     const quantity = product.amount;
  //     const price = product.price;
  //     const productTotal = quantity * price;
  //     temp += productTotal
  //   });
  //   setTotal(temp)
  // }, []);
  return (
    <div>
      <div class="eqkueT">
        <div class="YqIqug">
          <div class="container_od">
            <div class="jb8bh0">
              <a class="_4+lJqn" href="/">
                <img src={logo} alt="" style={{ height: '80px', width: '100px' }} />
                <h1 class="eSRYBr">Thanh toán</h1></a>
            </div>
          </div>
        </div>
        <div role="main" class="OX-2Lj">
          <div class="-p7ULT">
            <div class="vtrWey"></div>
            <div class="_8jJlG8">
              <div class="nU2ylc">
                <div class="MqmqK4">
                  <div class="Iafoll">
                    <svg
                      height="16"
                      viewBox="0 0 12 16"
                      width="12"
                      class="shopee-svg-icon icon-location-marker"
                    >
                      <path
                        d="M6 3.2c1.506 0 2.727 1.195 2.727 2.667 0 1.473-1.22 2.666-2.727 2.666S3.273 7.34 3.273 5.867C3.273 4.395 4.493 3.2 6 3.2zM0 6c0-3.315 2.686-6 6-6s6 2.685 6 6c0 2.498-1.964 5.742-6 9.933C1.613 11.743 0 8.498 0 6z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <h2>Địa chỉ nhận hàng</h2>
                </div>
              </div>
              <div class="Jw2Sc-">
                <div>
                  <div class="NYnMjH">
                    <div class="FVWWQy">Cid Kagenou (+84) 707252330</div>
                    <div class="QsWYfx">
                      241, Đường Mai Đăng Chơn, Phường Hòa Hải, Quận Ngũ Hành Sơn,
                      Đà Nẵng
                    </div>
                    <div class="uk7Wpm">Mặc định</div>
                  </div>
                </div>
                <button onClick={openModalAddress} class="_3WkjWD div-style">Thay đổi</button>
              </div>
              <div></div>
            </div>
          </div>
          <div class="sqxwIi">
            <div class="_3cPNXP">
              <div class="V-sVj2">
                <div class="jNp+ZB ktatB-"><h2 class="_6HCfS6">Sản phẩm</h2></div>
                <div class="jNp+ZB _04sLFc"></div>
                <div class="jNp+ZB">Đơn giá</div>
                <div class="jNp+ZB">Số lượng</div>
                <div class="jNp+ZB LBqTli">Thành tiền</div>
              </div>
            </div>
            <div>
              <div class="o6P-mw">
                <div>
                  <div class="Z7qspM">
                    <div class="vYrpLx">
                      <h3 class="YSl9dN">{cart.nameStore}</h3>

                    </div>
                    {cart.products.map((product) => (

                      <OrderDishItem product={product}/>
                    ))}
                  </div>
                </div>
                <div class="wVzdz-">
                  <div class="U4A1mu">
                    <div class="OUah6W Tn7sb8">
                      <div class="u-JjSt">
                        <span>Lời nhắn:</span>
                        <div class="nWvmL7">
                          <div class="bJhpic _0HwzC1">
                            <div class="peusTR F9tXsd">
                              <input
                                class="gQuJxM"
                                type="text"
                                placeholder="Lưu ý cho Người bán..."
                                aria-label="Lời nhắn:"
                                value=""
                              />
                            </div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div class="OUah6W Fzg+Gz">
                      <div class="Oa38lC">Đơn vị vận chuyển:</div>
                      <div class="_9HO6as">
                        <div class="tDdA1Q">Vận chuyển nhanh quốc tế</div>
                        <div class="okGi0Z">Standard Express</div>
                      </div>
                      <div class="GEI150"></div>
                      <div class="_3zds3i">Nhận hàng vào 23 Th10 - 24 Th10</div>
                      <button class="elfp9W div-style">Thay đổi</button>
                      <div class="dnXfYW"><div>₫15.000</div></div>
                      <div class="EGXRIm"></div>                
                    </div> */}
                  </div>
                  <div class="U4A1mu"></div>
                </div>
                <div class="Nivkv-">
                  <div class="ULZMSb">
                    <div class="z10ZuQ">Tổng số tiền ({productsCount} sản phẩm):</div>
                    <div class="_9F3E9v">{total}₫</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="DS2ZYY">
            <div class="DQ7t9K">
              <h2 class="a11y-visually-hidden">Phương thức thanh toán</h2>
              <div>
                <div
                  class="checkout-payment-method-view__current checkout-payment-setting"
                >
                  <div class="checkout-payment-method-view__current-title">
                    Phương thức thanh toán
                  </div>
                  <div class="checkout-payment-setting__payment-methods-tab">
                    <div role="radiogroup">
                      {/* <span
                      ><button
                        class="product-variation"
                        tabindex="0"
                        role="radio"
                        aria-label="Apple Pay"
                        aria-disabled="false"
                        aria-checked="false"
                      >
                          Apple Pay
                        </button></span>
                        <span
                        ><button
                          class="product-variation product-variation--selected"
                          tabindex="0"
                          role="radio"
                          aria-label="Ví ShopeePay"
                          aria-disabled="false"
                          aria-checked="true"
                        >
                          Ví ShopeePay
                          <div class="product-variation__tick">
                            <svg
                              enable-background="new 0 0 12 12"
                              viewBox="0 0 12 12"
                              x="0"
                              y="0"
                              class="shopee-svg-icon icon-tick-bold"
                            >
                              <g>
                                <path
                                  d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z"
                                ></path>
                              </g>
                            </svg>
                          </div></button></span> */}
                      <span
                      ><button
                        class="product-variation"
                        tabindex="0"
                        role="radio"
                        aria-label="Thẻ Tín dụng/Ghi nợ"
                        aria-disabled="false"
                        aria-checked="false"
                      >
                          Thanh toán trực tuyến
                        </button></span>
                      <span><button
                        class="product-variation"
                        tabindex="0"
                        role="radio"
                        aria-label="Thanh toán khi nhận hàng"
                        aria-disabled="false"
                        aria-checked="false"
                      >
                        Thanh toán khi nhận hàng
                      </button></span>
                    </div>
                    <div aria-live="polite"></div>
                  </div>
                </div>
                {/* <div class="checkout-payment-setting__payment-method-options">
                  <div class="checkout-payment-setting__banners">
                    <div
                      class="channel-banner channel-banner__single"
                      style={{ backgroundColor: 'rgb(238, 77, 45)' }}
                    >
                      <div
                        class="channel-banner__icon"
                        style={{ backgroundImage: "url('https://cf.shopee.vn/file/vn-11134004-7r98o-lm60hngje7z3fa')" }}


                      ></div>
                      <div
                        class="channel-banner__logo"
                        style={{ backgroundImage: "url('https://cf.shopee.vn/file/vn-11134004-7r98o-lm60hpwhti3jed')" }}

                      ></div>
                      <div class="channel-banner__main-desc">
                        <div class="channel-promotion__discount-info">
                          <span class="channel-promotion__discount-title"
                          >Giảm ngay </span><span class="channel-promotion__discount-price"
                          >80.000đ</span><span class="channel-promotion__discount-title"></span>
                        </div>
                      </div>
                      <div class="channel-banner__sub-desc">
                        Lần đầu liên kết Ví ShopeePay
                      </div>
                    </div>
                  </div>
                  <div class="bank-transfer-category">
                    <div class="bank-transfer-category__body">
                      <div
                        class="checkout-bank-transfer-item checkout-bank-transfer-item--disabled"
                      >
                        <div
                          class="stardust-radio"
                          tabindex="0"
                          role="radio"
                          aria-checked="false"
                          aria-disabled="false"
                        >
                          <div class="stardust-radio-button">
                            <div class="stardust-radio-button__outer-circle">
                              <div
                                class="stardust-radio-button__inner-circle"
                              ></div>
                            </div>
                          </div>
                          <div class="stardust-radio__content">
                            <div class="stardust-radio__label">
                              <div class="checkout-bank-transfer-item__card">
                                <div
                                  class="checkout-bank-transfer-item__icon-container"
                                >
                                  <img
                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/37110bc844b571f80e7dd14beb5415e9.png"
                                    class="checkout-bank-transfer-item__icon"
                                  />
                                </div>
                                <div class="checkout-bank-transfer-item__main">
                                  <div class="checkout-bank-transfer-item__title">
                                    Ví ShopeePay Số dư
                                  </div>
                                  <div
                                    class="checkout-bank-transfer-item__subtitle"
                                  >
                                    ₫0
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div class="KQyCj0" aria-live="polite">
              <h2 class="a11y-visually-hidden">Tổng thanh toán:</h2>
              <h3 class="Tc17Ac XIEGGF BcITa9">Tổng tiền hàng</h3>
              <div class="Tc17Ac mCEcIy BcITa9">{total}₫</div>
              <h3 class="Tc17Ac XIEGGF RY9Grr">Phí vận chuyển</h3>
              <div class="Tc17Ac mCEcIy RY9Grr">₫15.000</div>
              <h3 class="Tc17Ac XIEGGF n3vdfL">Tổng thanh toán:</h3>
              <div class="Tc17Ac kC0GSn mCEcIy n3vdfL">₫100.000</div>
              <div class="uTFqRt">
                <div class="k4VpYA">
                  <div class="C-NSr-">
                    Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
                    <a
                      href="https://help.shopee.vn/portal/article/77242"
                      target="_blank"
                      rel="noopener noreferrer"
                    >Điều khoản Shopee</a>
                  </div>
                </div>
                <button
                  class="stardust-button stardust-button--primary stardust-button--large apLZEG N7Du4X"
                >
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModalAddress && (
        <PickAddress show={showModalAddress} handleClose={closeModalAddress} />
      )}

    </div>
  )
}
export default OrderPage;