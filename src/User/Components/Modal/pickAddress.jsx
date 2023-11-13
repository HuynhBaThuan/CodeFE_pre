import React, { useState } from "react";
import ModalUpdateAddress from "./modalUpdateAddress";
import UpdateAddressOrder from "./updateAddressOrder";
const PickAddress = ({ show, handleClose, user, selectedContact, setSelectedContact }) => {
    const [showModalUpdateAddress, setShowModalUpdateAddress] = useState(false);

    const handleShowModalUpdateAddress = () => {
        setShowModalUpdateAddress(true);
    };
    const handleCloseModalUpdateAddress = () => {
        setShowModalUpdateAddress(false);
    };

    const [selectedAddress, setSelectedAddress] = useState(selectedContact._id);

    const handleRadioChange = (contId) => {
        setSelectedAddress(contId);
    };

    const handleConfirm = () => {
        const selectedContact = user.contact.find((cont) => cont._id === selectedAddress);

        if (selectedContact) {
            setSelectedContact(selectedContact)
        } else {
            console.error('Selected contact not found.');
        }
        handleClose();
    };

    const [showModalAddress, setShowModalAddress] = useState(false);
    const openModalAddress = () => {
      setShowModalAddress(true);
    };
  
    const closeModalAddress = () => {
      setShowModalAddress(false);
    };

    return (
        <div>
            <div id="modal" style={{ zIndex: '1' }}>
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
                                                    <input
                                                        class="stardust-radio stardust-radio--checked stardust-radio-button"
                                                        type="radio"
                                                        id={`address-radio-${cont._id}`}
                                                        name="address-radio-group"
                                                        value={cont._id}
                                                        checked={selectedAddress === cont._id}
                                                        onChange={() => handleRadioChange(cont._id)}
                                                    />
                                                </div>
                                                <label class="PcodYT" htmlFor={`address-radio-${cont._id}`}>
                                                    {/* <div class="PcodYT"> */}

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
                                                    {/* </div> */}
                                                </label>
                                            </div>
                                        </div>
                                    ))}

                                    <button class="LkGLx9 _4aRllO IkCOND" onClick={openModalAddress}>
                                        <svg viewBox="0 0 10 10" class="QUCjwo">
                                            <path
                                                stroke="none"
                                                d="m10 4.5h-4.5v-4.5h-1v4.5h-4.5v1h4.5v4.5h1v-4.5h4.5z"
                                            ></path></svg>Thêm Địa Chỉ Mới
                                    </button>
                                </div>
                                <div class="u7Oswx">
                                    <button onClick={handleClose} class="LtBE+Z LkGLx9 _4aRllO IkCOND">Huỷ</button>
                                    <button onClick={handleConfirm} class="FKiInz _4aRllO h4w1PK">Xác nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="_4BlFzb"></div>
                </aside>
            </div>
            <ModalUpdateAddress show={showModalUpdateAddress} handleClose={handleCloseModalUpdateAddress} />
            {showModalAddress && (
        <UpdateAddressOrder show={showModalAddress} handleClose={closeModalAddress}/>
      )}
        </div>
    )
}
export default PickAddress