
import React, { useState, useEffect, useRef } from 'react';
import StoreItem from '../../Components/Item/storeItem';
import { useCity } from '../../services/CityContext';
import { useTranslation } from 'react-i18next';
import useLocationSelect from '../signUp/address';
const Home = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownRef1 = useRef(null);
  const {
    cities,
    districts,
    handleCityChange2,
} = useLocationSelect();

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

  const handleRemove = (name) => {
    if(name === "key") {
      updateKey("")
    } else if(name === "cat") {
      setSelectedCategories([])
    } else if(name === "area") {
      setSelectedAreas([])
    }
  }
  
  const [categories, setCategories] = useState({ data: [] })
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  useEffect(() => {
    const api = `https://falth.vercel.app/api/category`
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        console.log(categories)
      })
      .catch((error) => {
        console.error('Lỗi khi gọi API', error);
      });
  }, []);

  useEffect(() => {
    setSelectedAreas([]);
    handleCityChange2(selectedLocation);
  }, [selectedLocation]);


  const handleCategoryChange = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      // Nếu categoryId đã tồn tại trong danh sách đã chọn, hãy loại bỏ nó
      setSelectedCategories(selectedCategories.filter(catName => catName !== categoryName));
    } else {
      // Nếu categoryId chưa tồn tại trong danh sách đã chọn, hãy thêm nó vào danh sách
      setSelectedCategories([...selectedCategories, categoryName]);
    }
  };

  const handleAreaChange = (areaName) => {
    if (selectedAreas.includes(areaName)) {
      // Nếu categoryId đã tồn tại trong danh sách đã chọn, hãy loại bỏ nó
      setSelectedAreas(selectedAreas.filter(name => name !== areaName));
    } else {
      // Nếu categoryId chưa tồn tại trong danh sách đã chọn, hãy thêm nó vào danh sách
      setSelectedAreas([...selectedAreas, areaName]);
    }
  };

  useEffect(() => {
    const selectedCat = selectedCategories[0] || '';
    console.log(selectedLocation, key, selectedCat)
    const api = `https://falth.vercel.app/api/store?address=${selectedLocation}&catName=${selectedCat}&limit=12&isLocked=false&page=1&name=${key}`
    console.log(api)
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setStores(data);
      })
      .catch((error) => {
        console.error('Lỗi khi gọi API', error);
      });
  }, [selectedLocation, key, selectedCategories]);



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
                    
                        
                      {districts.map((district) => (                       
                        <div className="custom-checkbox" key={district.Id}>
                          <input
                            type="checkbox"
                            id={`district-${district.Id}`}
                            checked={selectedAreas.includes(district.Name)}
                            onChange={() => handleAreaChange(district.Name)}
                          />
                          <label htmlFor={`district-${district.Id}`}>{district.Name}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className={`item-filter ${isOpen1 ? 'show' : ''}`} ref={dropdownRef1}>
                <span className="dropdown-toggle" id="categories" onClick={handleToggleDropdown1}>{t("homeCategory")}</span>
                {isOpen1 && (
                  <div class="container-box-filter">
                    <div class="content">
                      {categories.map((category) => (

                        <div className="custom-checkbox" key={category._id}>
                          <input
                            type="checkbox"
                            id={`category-${category._id}`}
                            checked={selectedCategories.includes(category.catName)}
                            onChange={() => handleCategoryChange(category.catName)}
                          />
                          <label htmlFor={`category-${category._id}`}>{category.catName}</label>
                        </div>
                      ))}
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
                <span className="btn-delete-tag" onClick={() => handleRemove("key")}>x</span>
              </div>
            )}
            {selectedAreas.length > 0 && (
            <div class="widget-tag">
               {t("homeArea")}: <span class="key-word">({selectedAreas.length})</span>
              <span class="btn-delete-tag" onClick={()=>handleRemove("area")}>x</span>
            </div>
            )}
            {selectedCategories.length > 0 && (
            <div class="widget-tag">
               {t("homeCategory")}: <span class="key-word">({selectedCategories.length})</span>
              <span class="btn-delete-tag" onClick={()=>handleRemove("cat")}>x</span>
            </div>
            )}
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
