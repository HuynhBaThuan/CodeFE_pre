
import React, { useState, useEffect, useRef } from 'react';
import StoreItem from '../../Components/Item/storeItem';
import { useCity } from '../../services/CityContext';
import { useTranslation } from 'react-i18next';
const Home = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownRef1 = useRef(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsOpen1(false);
  };
  const handleToggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
      if (dropdownRef1.current && !dropdownRef1.current.contains(e.target)) {
        setIsOpen1(false)
      }
    };

    if (isOpen1 || isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen1, isOpen]);

  const { selectedLocation, key, updateKey } = useCity();
  const [stores, setStores] = useState({ data: [] });

  const handleRemoveKey = () => {
    updateKey("")
  }

  useEffect(() => {
    console.log(selectedLocation, key)
    const api = `https://falth.vercel.app/api/store?limit=12&isLocked=false&page=1&name=${key}&address=${selectedLocation}`
    console.log(api)
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setStores(data);
        console.log(data)
        // console.log(stores.data[0].openAt) // Cập nhật state 'stores' với dữ liệu từ API
      })
      .catch((error) => {
        console.error('Lỗi khi gọi API', error);
      });
  }, [selectedLocation, key]);

  return (
    <div>
      <div class="container">
        <div class="now-search-filter">
          <div class="nav-filter clearfix">
            <div class="list-filter">
              <div className={`item-filter ${isOpen ? 'show' : ''}`} ref={dropdownRef}>
                <div
                  class="dropdown-toggle"
                  id="District"
                  role="button"
                  data-toggle="dropdown"
                  tabindex="0"
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  onClick={handleToggleDropdown}
                >
                  {t("homeArea")}
                </div>
                {isOpen && (
                  <div class="container-box-filter">
                    <div class="content">
                      <div class="custom-checkbox">
                        <input
                          type="checkbox"
                          data-text="Quận Cẩm Lệ"
                          id="district 30"
                        /><label for="district 30">Quận Cẩm Lệ</label>
                      </div>
                      <div class="custom-checkbox">
                        <input
                          type="checkbox"
                          data-text="Quận Hải Châu"
                          id="district 31"
                        /><label for="district 31">Quận Hải Châu</label>
                      </div>
                      <div class="custom-checkbox">
                        <input
                          type="checkbox"
                          data-text="Quận Liên Chiểu"
                          id="district 32"
                        /><label for="district 32">Quận Liên Chiểu</label>
                      </div>
                      <div class="custom-checkbox">
                        <input
                          type="checkbox"
                          data-text="Quận Ngũ Hành Sơn"
                          id="district 33"
                        /><label for="district 33">Quận Ngũ Hành Sơn</label>
                      </div>
                      <div class="custom-checkbox">
                        <input
                          type="checkbox"
                          data-text="Quận Sơn Trà"
                          id="district 34"
                        /><label for="district 34">Quận Sơn Trà</label>
                      </div>
                      <div class="custom-checkbox">
                        <input
                          type="checkbox"
                          data-text="Quận Thanh Khê"
                          id="district 35"
                        /><label for="district 35">Quận Thanh Khê</label>
                      </div>
                      <div class="custom-checkbox">
                        <input
                          type="checkbox"
                          data-text="Hòa Vang"
                          id="district 158"
                        /><label for="district 158">Hòa Vang</label>
                      </div>
                      <div class="custom-checkbox">
                        <input
                          type="checkbox"
                          data-text="Hoàng Sa"
                          id="district 159"
                        /><label for="district 159">Hoàng Sa</label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className={`item-filter ${isOpen1 ? 'show' : ''}`} ref={dropdownRef1}>
                <span className="dropdown-toggle" id="categories" onClick={handleToggleDropdown1}>{t("homeCategory")}</span>
                {isOpen1 && (
                  <div class="container-box-filter">
                    <div class="content">
                      <div>
                        <div class="custom-checkbox">
                          <input
                            type="checkbox"
                            data-text="Đồ ăn"
                            id="category 1000000"
                          /><label for="category 1000000">Đồ ăn</label>
                        </div>
                      </div>
                      <div>
                        <div class="custom-checkbox">
                          <input
                            type="checkbox"
                            data-text="Đồ uống"
                            id="category 1000001"
                          /><label for="category 1000001">Đồ uống</label>
                        </div>
                      </div>
                      <div>
                        <div class="custom-checkbox">
                          <input
                            type="checkbox"
                            data-text="Đồ chay"
                            id="category 1000002"
                          /><label for="category 1000002">Đồ chay</label>
                        </div>
                      </div>
                      <div>
                        <div class="custom-checkbox">
                          <input
                            type="checkbox"
                            data-text="Bánh kem"
                            id="category 1000003"
                          /><label for="category 1000003">Bánh kem</label>
                        </div>
                      </div>
                      <div>
                        <div class="custom-checkbox">
                          <input
                            type="checkbox"
                            data-text="Tráng miệng"
                            id="category 1000004"
                          /><label for="category 1000004">Tráng miệng</label>
                        </div>
                      </div>
                      <div>
                        <div class="custom-checkbox">
                          <input
                            type="checkbox"
                            data-text="Homemade"
                            id="category 1000005"
                          /><label for="category 1000005">Homemade</label>
                        </div>
                      </div>
                      <div>
                        <div class="custom-checkbox">
                          <input
                            type="checkbox"
                            data-text="Vỉa hè"
                            id="category 1000006"
                          /><label for="category 1000006">Vỉa hè</label>
                        </div>
                      </div>
                      <div>
                        <div class="custom-checkbox">
                          <input
                            type="checkbox"
                            data-text="Pizza/Burger"
                            id="category 1000007"
                          /><label for="category 1000007">Pizza/Burger</label>
                        </div>
                      </div>
                      <div>
                        <div class="custom-checkbox">
                          <input
                            type="checkbox"
                            data-text="Món gà"
                            id="category 1000008"
                          /><label for="category 1000008">Món gà</label>
                        </div>
                      </div>
                      <div>
                        <div class="custom-checkbox">
                          <input
                            type="checkbox"
                            data-text="Món lẩu"
                            id="category 1000009"
                          /><label for="category 1000009">Món lẩu</label>
                        </div>
                      </div>
                      <div>
                        <div class="custom-checkbox">
                          <input
                            type="checkbox"
                            data-text="Sushi"
                            id="category 1000010"
                          /><label for="category 1000010">Sushi</label>
                        </div>
                      </div>
                      <div>
                        <div class="custom-checkbox">
                          <input
                            type="checkbox"
                            data-text="Mì phở"
                            id="category 1000011"
                          /><label for="category 1000011">Mì phở</label>
                        </div>
                      </div>
                      <div>
                        <div class="custom-checkbox">
                          <input
                            type="checkbox"
                            data-text="Cơm hộp"
                            id="category 1000012"
                          /><label for="category 1000012">Cơm hộp</label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
            <div class="float-right">
              {/* <div class="result">200 Kết quả</div> */}
              <select class="filter-sort">
                {/* <option value="8">Đúng nhất</option> */}
                <option value="3">{t("homeSort")}</option>
                <option value="36">{t("homeSort2")}</option>
                {/* <option value="35">Bán chạy</option> */}
                {/* <option value="37">Giao nhanh</option> */}
              </select>
            </div>
          </div>
          <div class="tag-filter">
            {key !== "" && (
              <div className="widget-tag">
              {t("homeKey")}: <span className="key-word">{key}</span>
                <span className="btn-delete-tag" onClick={handleRemoveKey}>x</span>
              </div>
            )}
            {/* <div class="widget-tag">
              {t("homeArea")}: <span class="key-word">(1)</span>
              <span class="btn-delete-tag">x</span>
            </div>
            <div class="widget-tag">
               {t("homeCategory")}: <span class="key-word">(1)</span>
              <span class="btn-delete-tag">x</span>
            </div> */}
          </div>
        </div>
        <div class="now-list-restaurant res-col-4">
          <div class="list-restaurant">
            <div class="now-loading-restaurant">               
                <div class="box-loading">
                  <div class="box-thumbnail"></div>
                  <div class="box-line-df"></div>
                  <div class="box-line-lgx"></div>
                  <div class="box-line-lg"></div>
                </div>
              </div>
            {/* <StoreItem
              id="1"
              name="Cơm Gà Nam Chợ Mới - Hoàng Diệu"
              address="589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng"
              linkImage="https://images.foody.vn/res/g28/277130/prof/s280x175/foody-upload-api-foody-mobile-5-201006112619.jpg"
              link="/da-nang/com-ga-nam-cho-moi-hoang-dieu"
              open="8.00"
              close="23.00"
              rate={4.8}
              like="yes"
              store = {null}

            />
            <StoreItem
              id="2"
              name="Duyên - Cơm Gà Xối Mỡ - Hoàng Diệu"
              address="264 Hoàng Diệu, P. Nam Dương, Quận Hải Châu, Đà Nẵng"
              linkImage="https://images.foody.vn/res/g100001/1000000248/prof/s280x175/foody-upload-api-foody-mobile-im-e485ae6c-230917121851.jpg"
              link="/da-nang/duyen-com-ga-xoi-mo-hoang-dieu"
              open="8.00"
              close="23.00"
              rate="4.8"
              like="yes"
              store = {null}
            />  */}
            {stores.data.map((store) => (

              <StoreItem
                like="yes"
                store={store}
              />
            ))}


          </div>
        </div>
        <ul class="pagination">
          <li class="disabled">
            <a class="" href="./"><i class="fa-solid fa-circle-chevron-left" style={{ color: 'red', fontSize: '18px', verticalAlign: 'middle' }}></i></a>
          </li>
          <li class="active"><a class="undefined" href="./">1</a></li>
          <li class=""><a class="" href="./">2</a></li>
          <li class=""><a class="" href="./">3</a></li>
          <li class=""><a class="" href="./">4</a></li>
          <li class=""><a class="" href="./">5</a></li>
          <li class=""><a class="" href="./">6</a></li>
          <li class=""><a class="" href="./">7</a></li>
          <li class=""><a class="" href="./">8</a></li>
          <li class="">
            <a class="" href="./"><i class="fa-solid fa-circle-chevron-right" style={{ color: 'red', fontSize: '18px', verticalAlign: 'middle' }}></i></a>
          </li>
        </ul>
      </div>
    </div>



  )
}
export default Home;
