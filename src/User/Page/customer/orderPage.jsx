import React, { useState } from "react";
import logo from '../../assets/img/logo.png'
import '../../assets/css/b.css'
import PickAddress from "../../Components/Modal/pickAddress";
import ModalUpdateAddress from "../../Components/Modal/modalUpdateAddress";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const [showModalAddress, setShowModalAddress] = useState(false);

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
  return (
    <div>
      <div class="eqkueT">
        <div class="YqIqug">
          <div class="container_od">
            <div class="jb8bh0">
              <a class="_4+lJqn" href="/">
                {/* <svg
                viewBox="0 0 192 65"
                class="shopee-svg-icon icon-shopee-logo"
              >
                <g fill-rule="evenodd">
                  <path
                    d="M35.6717403 44.953764c-.3333497 2.7510509-2.0003116 4.9543414-4.5823845 6.0575984-1.4379707.6145919-3.36871.9463856-4.896954.8421628-2.3840266-.0911143-4.6237865-.6708937-6.6883352-1.7307424-.7375522-.3788551-1.8370513-1.1352759-2.6813095-1.8437757-.213839-.1790053-.239235-.2937577-.0977428-.4944671.0764015-.1151823.2172535-.3229831.5286218-.7791994.45158-.6616533.5079208-.7446018.5587128-.8221779.14448-.2217688.3792333-.2411091.6107855-.0588804.0243289.0189105.0243289.0189105.0426824.0333083.0379873.0294402.0379873.0294402.1276204.0990653.0907002.0706996.14448.1123887.166248.1287205 2.2265285 1.7438508 4.8196989 2.7495466 7.4376251 2.8501162 3.6423042-.0496401 6.2615109-1.6873341 6.7308041-4.2020035.5160305-2.7675977-1.6565047-5.1582742-5.9070334-6.4908212-1.329344-.4166762-4.6895175-1.7616869-5.3090528-2.1250697-2.9094471-1.7071043-4.2697358-3.9430584-4.0763845-6.7048539.296216-3.8283059 3.8501677-6.6835796 8.340785-6.702705 2.0082079-.004083 4.0121475.4132378 5.937338 1.2244562.6816382.2873109 1.8987274.9496089 2.3189359 1.2633517.2420093.1777159.2898136.384872.1510957.60836-.0774686.12958-.2055158.3350171-.4754821.7632974l-.0029878.0047276c-.3553311.5640922-.3664286.5817134-.447952.7136572-.140852.2144625-.3064598.2344475-.5604202.0732783-2.0600669-1.3839063-4.3437898-2.0801572-6.8554368-2.130442-3.126914.061889-5.4706057 1.9228561-5.6246892 4.4579402-.0409751 2.2896772 1.676352 3.9613243 5.3858811 5.2358503 7.529819 2.4196871 10.4113092 5.25648 9.869029 9.7292478M26.3725216 5.42669372c4.9022893 0 8.8982174 4.65220288 9.0851664 10.47578358H17.2875686c.186949-5.8235807 4.1828771-10.47578358 9.084953-10.47578358m25.370857 11.57065968c0-.6047069-.4870064-1.0948761-1.0875481-1.0948761h-11.77736c-.28896-7.68927544-5.7774923-13.82058185-12.5059489-13.82058185-6.7282432 0-12.2167755 6.13130641-12.5057355 13.82058185l-11.79421958.0002149c-.59136492.0107446-1.06748731.4968309-1.06748731 1.0946612 0 .0285807.00106706.0569465.00320118.0848825H.99995732l1.6812605 37.0613963c.00021341.1031483.00405483.2071562.01173767.3118087.00170729.0236381.003628.0470614.00554871.0704847l.00362801.0782207.00405483.004083c.25545428 2.5789222 2.12707837 4.6560709 4.67201764 4.7519129l.00576212.0055872h37.4122078c.0177132.0002149.0354264.0004298.0531396.0004298.0177132 0 .0354264-.0002149.0531396-.0004298h.0796027l.0017073-.0015043c2.589329-.0706995 4.6867431-2.1768587 4.9082648-4.787585l.0012805-.0012893.0017073-.0350275c.0021341-.0275062.0040548-.0547975.0057621-.0823037.0040548-.065757.0068292-.1312992.0078963-.1964115l1.8344904-37.207738h-.0012805c.001067-.0186956.0014939-.0376062.0014939-.0565167M176.465457 41.1518926c.720839-2.3512494 2.900423-3.9186779 5.443734-3.9186779 2.427686 0 4.739107 1.6486899 5.537598 3.9141989l.054826.1556978h-11.082664l.046506-.1512188zm13.50267 3.4063683c.014933.0006399.014933.0006399.036906.0008531.021973-.0002132.021973-.0002132.044372-.0008531.53055-.0243144.950595-.4766911.950595-1.0271786 0-.0266606-.000853-.0496953-.00256-.0865936.000427-.0068251.000427-.020262.000427-.0635588 0-5.1926268-4.070748-9.4007319-9.09145-9.4007319-5.020488 0-9.091235 4.2081051-9.091235 9.4007319 0 .3871116.022399.7731567.067838 1.1568557l.00256.0204753.01408.1013102c.250022 1.8683731 1.047233 3.5831812 2.306302 4.9708108-.00064-.0006399.00064.0006399.007253.0078915 1.396026 1.536289 3.291455 2.5833031 5.393601 2.9748936l.02752.0053321v-.0027727l.13653.0228215c.070186.0119439.144211.0236746.243409.039031 2.766879.332724 5.221231-.0661182 7.299484-1.1127057.511777-.2578611.971928-.5423827 1.37064-.8429007.128211-.0968312.243622-.1904632.34346-.2781231.051412-.0452164.092372-.083181.114131-.1051493.468898-.4830897.498124-.6543572.215249-1.0954297-.31146-.4956734-.586228-.9179769-.821744-1.2675504-.082345-.1224254-.154023-.2267215-.214396-.3133151-.033279-.0475624-.033279-.0475624-.054399-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.00256-.0038391c-.256208-.3188605-.431565-.3480805-.715933-.0970445-.030292.0268739-.131624.1051493-.14997.1245582-1.999321 1.775381-4.729508 2.3465571-7.455854 1.7760208-.507724-.1362888-.982595-.3094759-1.419919-.5184948-1.708127-.8565509-2.918343-2.3826022-3.267563-4.1490253l-.02752-.1394881h13.754612zM154.831964 41.1518926c.720831-2.3512494 2.900389-3.9186779 5.44367-3.9186779 2.427657 0 4.739052 1.6486899 5.537747 3.9141989l.054612.1556978h-11.082534l.046505-.1512188zm13.502512 3.4063683c.015146.0006399.015146.0006399.037118.0008531.02176-.0002132.02176-.0002132.044159-.0008531.530543-.0243144.950584-.4766911.950584-1.0271786 0-.0266606-.000854-.0496953-.00256-.0865936.000426-.0068251.000426-.020262.000426-.0635588 0-5.1926268-4.070699-9.4007319-9.091342-9.4007319-5.020217 0-9.091343 4.2081051-9.091343 9.4007319 0 .3871116.022826.7731567.068051 1.1568557l.00256.0204753.01408.1013102c.250019 1.8683731 1.04722 3.5831812 2.306274 4.9708108-.00064-.0006399.00064.0006399.007254.0078915 1.396009 1.536289 3.291417 2.5833031 5.393538 2.9748936l.027519.0053321v-.0027727l.136529.0228215c.070184.0119439.144209.0236746.243619.039031 2.766847.332724 5.22117-.0661182 7.299185-1.1127057.511771-.2578611.971917-.5423827 1.370624-.8429007.128209-.0968312.243619-.1904632.343456-.2781231.051412-.0452164.09237-.083181.11413-.1051493.468892-.4830897.498118-.6543572.215246-1.0954297-.311457-.4956734-.586221-.9179769-.821734-1.2675504-.082344-.1224254-.154022-.2267215-.21418-.3133151-.033492-.0475624-.033492-.0475624-.054612-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.002346-.0038391c-.256419-.3188605-.431774-.3480805-.716138-.0970445-.030292.0268739-.131623.1051493-.149969.1245582-1.999084 1.775381-4.729452 2.3465571-7.455767 1.7760208-.507717-.1362888-.982582-.3094759-1.419902-.5184948-1.708107-.8565509-2.918095-2.3826022-3.267311-4.1490253l-.027733-.1394881h13.754451zM138.32144123 49.7357905c-3.38129629 0-6.14681004-2.6808521-6.23169343-6.04042014v-.31621743c.08401943-3.35418649 2.85039714-6.03546919 6.23169343-6.03546919 3.44242097 0 6.23320537 2.7740599 6.23320537 6.1960534 0 3.42199346-2.7907844 6.19605336-6.23320537 6.19605336m.00172791-15.67913203c-2.21776751 0-4.33682838.7553485-6.03989586 2.140764l-.19352548.1573553V34.6208558c0-.4623792-.0993546-.56419733-.56740117-.56419733h-2.17651376c-.47409424 0-.56761716.09428403-.56761716.56419733v27.6400724c0 .4539841.10583425.5641973.56761716.5641973h2.17651376c.46351081 0 .56740117-.1078454.56740117-.5641973V50.734168l.19352548.1573553c1.70328347 1.3856307 3.82234434 2.1409792 6.03989586 2.1409792 5.27140956 0 9.54473746-4.2479474 9.54473746-9.48802964 0-5.239867-4.2733279-9.48781439-9.54473746-9.48781439M115.907646 49.5240292c-3.449458 0-6.245805-2.7496948-6.245805-6.1425854 0-3.3928907 2.79656-6.1427988 6.245805-6.1427988 3.448821 0 6.24538 2.7499081 6.24538 6.1427988 0 3.3926772-2.796346 6.1425854-6.24538 6.1425854m.001914-15.5438312c-5.28187 0-9.563025 4.2112903-9.563025 9.4059406 0 5.1944369 4.281155 9.4059406 9.563025 9.4059406 5.281657 0 9.562387-4.2115037 9.562387-9.4059406 0-5.1946503-4.280517-9.4059406-9.562387-9.4059406M94.5919049 34.1890939c-1.9281307 0-3.7938902.6198995-5.3417715 1.7656047l-.188189.1393105V23.2574169c0-.4254677-.1395825-.5643476-.5649971-.5643476h-2.2782698c-.4600414 0-.5652122.1100273-.5652122.5643476v29.2834155c0 .443339.1135587.5647782.5652122.5647782h2.2782698c.4226187 0 .5649971-.1457701.5649971-.5647782v-9.5648406c.023658-3.011002 2.4931278-5.4412923 5.5299605-5.4412923 3.0445753 0 5.516841 2.4421328 5.5297454 5.4630394v9.5430935c0 .4844647.0806524.5645628.5652122.5645628h2.2726775c.481764 0 .565212-.0824666.565212-.5645628v-9.5710848c-.018066-4.8280677-4.0440197-8.7806537-8.9328471-8.7806537M62.8459442 47.7938061l-.0053397.0081519c-.3248668.4921188-.4609221.6991347-.5369593.8179812-.2560916.3812097-.224267.551113.1668119.8816949.91266.7358184 2.0858968 1.508535 2.8774525 1.8955369 2.2023021 1.076912 4.5810275 1.646045 7.1017886 1.6975309 1.6283921.0821628 3.6734936-.3050536 5.1963734-.9842376 2.7569891-1.2298679 4.5131066-3.6269626 4.8208863-6.5794607.4985136-4.7841067-2.6143125-7.7747902-10.6321784-10.1849709l-.0021359-.0006435c-3.7356476-1.2047686-5.4904836-2.8064071-5.4911243-5.0426086.1099976-2.4715346 2.4015793-4.3179454 5.4932602-4.4331449 2.4904317.0062212 4.6923065.6675996 6.8557356 2.0598624.4562232.2767364.666607.2256796.9733188-.172263.035242-.0587797.1332787-.2012238.543367-.790093l.0012815-.0019308c.3829626-.5500403.5089793-.7336731.5403767-.7879478.258441-.4863266.2214903-.6738208-.244985-1.0046173-.459427-.3290803-1.7535544-1.0024722-2.4936356-1.2978721-2.0583439-.8211991-4.1863175-1.2199998-6.3042524-1.1788111-4.8198184.1046878-8.578747 3.2393171-8.8265087 7.3515337-.1572005 2.9703036 1.350301 5.3588174 4.5000778 7.124567.8829712.4661613 4.1115618 1.6865902 5.6184225 2.1278667 4.2847814 1.2547527 6.5186944 3.5630343 6.0571315 6.2864205-.4192725 2.4743234-3.0117991 4.1199394-6.6498372 4.2325647-2.6382344-.0549182-5.2963324-1.0217793-7.6043603-2.7562084-.0115337-.0083664-.0700567-.0519149-.1779185-.1323615-.1516472-.1130543-.1516472-.1130543-.1742875-.1300017-.4705335-.3247898-.7473431-.2977598-1.0346184.1302162-.0346012.0529875-.3919333.5963776-.5681431.8632459"
                  ></path>
                </g>
              </svg> */}
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
                      <h3 class="YSl9dN">Tên cửa hàng</h3>

                    </div>
                    <div class="KxX-H6">
                      <div class="_2OGC7L xBI6Zm">
                        <div class="h3ONzh EOqcX3">
                          <img
                            class="rTOisL"
                            alt="product image"
                            src="data:image/jpeg;base64,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"
                            width="40"
                            height="40"
                          /><span class="oEI3Ln"
                          ><span class="gHbVhc"
                          >Tên sản phẩm</span></span>
                        </div>
                        <div class="h3ONzh Le31ox">
                          <span class="dVLwMH">Size: Lớn</span>
                        </div>
                        <div class="h3ONzh">₫85.000</div>
                        <div class="h3ONzh">1</div>
                        <div class="h3ONzh fHRPUO">₫85.000</div>
                      </div>
                    </div>
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
                    <div class="z10ZuQ">Tổng số tiền (1 sản phẩm):</div>
                    <div class="_9F3E9v">₫100.000</div>
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
              <div class="Tc17Ac mCEcIy BcITa9">₫85.000</div>
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