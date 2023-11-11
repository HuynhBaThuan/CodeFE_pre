import React, { useState } from "react";
import ModalUpdateAddress from "./modalUpdateAddress";
const PickAddress = ({ show, handleClose, user }) => {
    const [showModalUpdateAddress, setShowModalUpdateAddress] = useState(false);

    const handleShowModalUpdateAddress = () => {
        setShowModalUpdateAddress(true);
    };
    const handleCloseModalUpdateAddress = () => {
        setShowModalUpdateAddress(false);
    };

    return (
        <div>
            <div id="modal" style={{ zIndex: '10' }}>
                <div>
                    <div
                        class="shopee-modal__transition-appear-done shopee-modal__transition-enter-done"
                    ></div>
                </div>
                <aside
                    tabindex="0"
                    role="dialog"
                    aria-modal="true"
                    aria-label="modal"
                    class="WG6KlM"
                >
                    <div class="jRFwds">
                        <div class="PRuV34">
                            <div class="UK8GQJ">
                                <div class="N+ztzK"><div>Địa Chỉ Của Tôi</div></div>
                                <div class="Dchm36 ECaRqO">
                                    <div class="stardust-spinner--hidden stardust-spinner">
                                        <div class="stardust-spinner__background">
                                            <div class="stardust-spinner__main" role="img">
                                                <svg width="34" height="12" viewBox="-1 0 33 12">
                                                    <circle
                                                        class="stardust-spinner__spinner"
                                                        cx="4"
                                                        cy="6"
                                                        r="4"
                                                        fill="#EE4D2D"
                                                    ></circle>
                                                    <circle
                                                        class="stardust-spinner__spinner"
                                                        cx="16"
                                                        cy="6"
                                                        r="4"
                                                        fill="#EE4D2D"
                                                    ></circle>
                                                    <circle
                                                        class="stardust-spinner__spinner"
                                                        cx="28"
                                                        cy="6"
                                                        r="4"
                                                        fill="#EE4D2D"
                                                    ></circle>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    {user.contact.map((cont) => (

                                        <div role="radiogroup" aria-label="Địa Chỉ Của Tôi">
                                            <div class="VR5G-p AXtEWT">
                                                <div class="_54u+Wc">
                                                    <div
                                                        class="stardust-radio stardust-radio--checked"
                                                        tabindex="0"
                                                        role="radio"
                                                        aria-checked="false"
                                                        aria-disabled="false"
                                                        aria-labelledby="address-card_32c92423-9fcd-4034-ba8f-cd538c93f96e_header address-card_32c92423-9fcd-4034-ba8f-cd538c93f96e_content address-card_32c92423-9fcd-4034-ba8f-cd538c93f96e_badge address-card_32c92423-9fcd-4034-ba8f-cd538c93f96e_invalid-flag"
                                                    >
                                                        <div
                                                            class="stardust-radio-button "
                                                        >
                                                            <div class="stardust-radio-button__outer-circle">
                                                                <div
                                                                    class="stardust-radio-button__inner-circle"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                        <div class="stardust-radio__content">
                                                            <div class="stardust-radio__label"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="PcodYT">
                                                    <div role="heading" class="_7efJXB hgGPm2">
                                                        <div
                                                            id="address-card_32c92423-9fcd-4034-ba8f-cd538c93f96e_header"
                                                            class="RMBiE- JZWy3M"
                                                        >
                                                            <span class="_1yD00D Xikkun"
                                                            ><div class="iTAYV4">{user.firstName + " " + user.lastName}</div></span>
                                                            <div class="_38L8qy"></div>
                                                            <div role="row" class="mU9KsT _4edPAv ULZM9T">
                                                                {cont.phoneNumber}
                                                            </div>
                                                        </div>
                                                        <div class="XEXjAd">
                                                            <button onClick={handleShowModalUpdateAddress} class="Tuo6ZP">Cập nhật</button>
                                                        </div>
                                                    </div>
                                                    <div
                                                        id="address-card_32c92423-9fcd-4034-ba8f-cd538c93f96e_content"
                                                        role="heading"
                                                        class="_7efJXB hgGPm2"
                                                    >
                                                        <div class="RMBiE- JZWy3M">
                                                            <div class="dA02H7">
                                                                <div role="row" class="ULZM9T">
                                                                    {cont.address}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ZsWMz8 XEXjAd"></div>
                                                    </div>
                                                    {user.defaultContact === cont._id && (
                                                        <div
                                                            id="address-card_32c92423-9fcd-4034-ba8f-cd538c93f96e_badge"
                                                            role="row"
                                                            className="hRRgNe ULZM9T"
                                                        >
                                                            <span role="mark" className="UAGfcj hCWcbk NqLtr2">Mặc định</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}                                    
                                    {/* {user.contact.map((cont) => (
        <div key={cont._id} className="address-item">
          <input
            type="radio"
            id={`address-radio-${cont._id}`}
            name="address-radio-group"
            value={cont._id}
            checked={user.defaultContact === cont._id}
            onChange={() => handleRadioChange(cont._id)}
          />
          <label htmlFor={`address-radio-${cont._id}`}>
            <div>
              <div>{cont.address}</div>
              <div>{`${user.firstName} ${user.lastName}`}</div>
              <div>{cont.phoneNumber}</div>
              <button onClick={() => handleShowModalUpdateAddress()}>Cập nhật</button>
              {selectedAddress === cont._id && (
                <div className="default-badge">Mặc định</div>
              )}
            </div>
          </label>
        </div>
      ))} */}

                                    <button class="LkGLx9 _4aRllO IkCOND" onClick={handleShowModalUpdateAddress}>
                                        <svg viewBox="0 0 10 10" class="QUCjwo">
                                            <path
                                                stroke="none"
                                                d="m10 4.5h-4.5v-4.5h-1v4.5h-4.5v1h4.5v4.5h1v-4.5h4.5z"
                                            ></path></svg>Thêm Địa Chỉ Mới
                                    </button>
                                </div>
                                <div class="u7Oswx">
                                    <button onClick={handleClose} class="LtBE+Z LkGLx9 _4aRllO IkCOND">Huỷ</button><button class="FKiInz _4aRllO h4w1PK">Xác nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="_4BlFzb"></div>
                </aside>
            </div>
            <ModalUpdateAddress show={showModalUpdateAddress} handleClose={handleCloseModalUpdateAddress} />
        </div>
    )
}
export default PickAddress