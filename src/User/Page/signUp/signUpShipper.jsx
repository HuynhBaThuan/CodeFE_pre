import React, { useState } from 'react';
import useLocationSelect from "./address";
import './signUp.css'
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const SignUpShipper = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const {
        cities,
        districts,
        wards,
        handleCityChange,
        handleDistrictChange,
      } = useLocationSelect();
      const handleNav = ({ nav }) => {
        navigate(`/${nav}`);
      };
      const [formData, setFormData] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        city: '',
        district: '',
        ward: '',
        detailAddress: '',
        frontImageCCCD: null,
        behindImageCCCD: null,
        licenseId: '',
        licenseImage: null,
        vehicleNumber:'',
        vehicleType:'',
        licenseNumber:'',
    });

    const handleChangeCity = (e) => {
        handleCityChange(e);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
          });
    }
    const handleChangeDictrict = (e) => {
        handleDistrictChange(e);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
          });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
            setFormData({
              ...formData,
              [name]: value,
            });
    };

    const handleChangeImg = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
          setFormData({
            ...formData,
            [name]: files[0],
          });
        }
      };
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        const address = `${formData.detailAddress}, ${formData.ward}, ${formData.district}, ${formData.city}`;
        const registrationData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            passwordConfirm: formData.passwordConfirm,
            address: address,
            phoneNumber: formData.phoneNumber,
            frontImageCCCD: formData.frontImageCCCD,
            behindImageCCCD: formData.behindImageCCCD,
            licenseId: formData.licenseId,
            licenseImage: formData.licenseImage,
            vehicleNumber:formData.vehicleNumber,
            vehicleType:formData.vehicleType,
            licenseNumber:formData.licenseNumber,
        };
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(registrationData.email)) {
            setError(t("error8"))
        } else if(!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(registrationData.password)) {
            setError(t("error5"))
        }else if(registrationData.password !== registrationData.passwordConfirm) {
            setError(t("error6"))
        } else if (!/^\d{10}$/.test(registrationData.phoneNumber)) {
            setError(t("error9"))
        } else {
            try {
                console.log(registrationData)

            //   const response = await axios.post('https://falth.vercel.app/api/shipper', registrationData);
            //   console.log('Đăng ký thành công', response.data);
            //   setError('')
            //   setSuccess('Đã nhận được thông tin! Mời bạn xác nhận email')
            //     navigate("/verify", { state: { action: "verifyUser", email: registrationData.email } });
            } catch (error) {
              setError('Địa chỉ email đã tồn tại');
            }

        }
    };
    return (
        <div>
            <div class="page-wrapper bg-color p-t-180 p-b-100 font-robo">
                <div class="wrapper_su wrapper--w960">
                    <div class="card_su card-2_su">
                        <div class="card-heading_ship"></div>
                        <div class="card-body_su">
                            <h2 class="title_su">{t("signupShipper")}</h2>
                            <div>
                            <div class="container-navigate">
                                <button class="btn_su btn--radius btn--red" onClick={() => handleNav({ nav: "signUpCustomer" })}>{t("customer")}</button>
                                    <button class="btn_su btn--radius btn--red" style={{marginLeft:'20px'}} onClick={() => handleNav({ nav: "signUpShipper" })}>{t("shipper")}</button>
                                    <button class="btn_su btn--radius btn--red" style={{marginLeft:'20px'}} onClick={() => handleNav({ nav: "signUpOwner" })}>{t("owner")}</button>
                                </div>
                            </div>
                            <form method="POST" onSubmit={handleSubmit}>
                                <div class="input-group_su">
                                    <input style={{border:'none'}}class="input--style-2" type="text" placeholder="Email" name="email" required value={formData.email} onChange={handleChange}/>
                                </div>
                                <div class="input-group_su">
                                    <input style={{border:'none'}}class="input--style-2" type="password" placeholder={t("signupPass")} name="password" required value={formData.password} onChange={handleChange}/>
                                </div>
                                <div class="input-group_su">
                                    <input style={{border:'none'}}class="input--style-2" type="password" placeholder={t("confirmPass")} name="passwordConfirm" required value={formData.passwordConfirm} onChange={handleChange}/>
                                </div>
                                <div class="row_su row-space">
                                    <div class="col-2_su">
                                        <div class="input-group_su">
                                            <input style={{border:'none'}}class="input--style-2" type="text" placeholder={t("firstName")} name="firstName" required value={formData.firstName} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div class="col-2_su">
                                        <div class="input-group_su">
                                            <input style={{border:'none'}}class="input--style-2" type="text" placeholder={t("lastName")} name="lastName" required value={formData.lastName} onChange={handleChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group_su">
                                    <input style={{border:'none'}}class="input--style-2" type="text" placeholder={t("phoneNumber")} name="phoneNumber" required value={formData.phoneNumber} onChange={handleChange} maxLength={10}/>
                                </div>

                                <div class="row_su row-space">
                                    <div class="col-3_su">
                                        <div class="input-group_su">
                                            <div class="rs-select2 js-select-simple select--no-search">
                                                <select onChange={handleChangeCity} name="city" class="form-select form-select-sm" id="city" aria-label=".form-select-sm" required value={formData.city}>
                                                    <option disabled="disabled" selected="selected">{t("city")}</option>
                                                    {cities.map((city) => (
                                                        <option key={city.Id} value={city.Name}>
                                                            {city.Name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div class="select-dropdown"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3_su">
                                        <div class="input-group_su">
                                            <div class="rs-select2 js-select-simple select--no-search">
                                                <select onChange={handleChangeDictrict} name="district" class="form-select form-select-sm " id="district" aria-label=".form-select-sm" required value={formData.district}>
                                                    <option disabled="disabled" selected="selected">{t("district")}</option>
                                                    {districts.map((district) => (
                                                        <option key={district.Id} value={district.Name}>
                                                            {district.Name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div class="select-dropdown"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3_su">
                                        <div class="input-group_su">
                                            <div class="rs-select2 js-select-simple select--no-search">
                                                <select name="ward" class="form-select form-select-sm" id="ward" aria-label=".form-select-sm" required value={formData.ward} onChange={handleChange}>
                                                    <option disabled="disabled" selected="selected">{t("ward")}</option>
                                                    {wards.map((ward) => (
                                                        <option key={ward.Id} value={ward.Name}>
                                                            {ward.Name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div class="select-dropdown"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="input-group_su">
                                    <input style={{border:'none'}}class="input--style-2" type="text" placeholder={t("address")} name="detailAddress" value={formData.detailAddress} onChange={handleChange}/>
                                </div>
                                <div class="row_su row-space">
                                    <div class="col-3_su">
                                        <div class="input-group_su">
                                            <input style={{border:'none'}}class="input--style-2" type="text" placeholder={t("licenseId")} name="licenseId" value={formData.licenseId} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div class="col-3_su">
                                        <div class="input-group_su">
                                            <input style={{border:'none'}}class="input--style-2" type="text" placeholder={t("vehicleNumber")} name="vehicleNumber" value={formData.vehicleNumber} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div class="col-3_su">
                                        <div class="input-group_su">
                                            <input style={{border:'none'}}class="input--style-2" type="text" placeholder={t("vehicleType")} name="vehicleType" value={formData.vehicleType} onChange={handleChange}/>
                                        </div>
                                    </div>
                                </div>

                                <div class="row_su row-space">
                                    <div class="col-2_su">
                                        <div class="input-group_su">
                                            <input style={{border:'none'}}class="input--style-2" type="text" name="class" accept="image/*" placeholder={t("frontCCCD")} readonly/>
                                        </div>
                                    </div>
                                    <div class="col-2_su">
                                        <div class="input-group_su" >
                                            <input style={{border:'none'}}class="input--style-2" type="file" name="frontImageCCCD" accept="image/*" value={formData.frontImageCCCD} onChange={handleChangeImg}/>
                                        </div>
                                    </div>
                                </div>

                                <div class="row_su row-space">
                                    <div class="col-2_su">
                                        <div class="input-group_su">
                                            <input style={{border:'none'}}class="input--style-2" type="text" name="image" accept="image/*" placeholder={t("behindCCCD")} readonly />
                                        </div>
                                    </div>
                                    <div class="col-2_su">
                                        <div class="input-group_su" >
                                            <input style={{border:'none'}}class="input--style-2" type="file" name="behindImageCCCD" accept="image/*" value={formData.behindImageCCCD} onChange={handleChangeImg}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row_su row-space">
                                    <div class="col-2_su">
                                        <div class="input-group_su">
                                            <input style={{border:'none'}}class="input--style-2" type="text" name="image" accept="image/*" placeholder={t("licenseImage")} readonly />
                                        </div>
                                    </div>
                                    <div class="col-2_su">
                                        <div class="input-group_su" >
                                            <input style={{border:'none'}}class="input--style-2" type="file" name="licenseImage" accept="image/*" value={formData.licenseImage} onChange={handleChangeImg}/>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="row_su row-space">
                                    <div class="col-2_su">
                                        <div class="input-groupv">
                                            <input style={{border:'none'}}class="input--style-2" type="text" name="image" accept="image/*" placeholder="Mặt trước giấy đăng kí xe: " readonly />
                                        </div>
                                    </div>
                                    <div class="col-2_su">
                                        <div class="input-group_su" >
                                            <input style={{border:'none'}}class="input--style-2" type="file" name="vehicle_reg" accept="image/*" />
                                        </div>
                                    </div>
                                </div> */}
                                {error && <div className="alert-danger">{error}</div>}
                                {success && <div className="alert-success">{success}</div>}
                                <div class="p-t-30">
                                    <button class="btn_su btn--radius btn--red" type="submit">{t("signup")}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUpShipper;