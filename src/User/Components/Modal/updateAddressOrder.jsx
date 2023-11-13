import React, { useState, useEffect } from 'react';
import '../../assets/css/a.css'
import '../../assets/css/b.css'
import '../../assets/css/9596.css'
const UpdateAddressOrder = () => {
    return (
        <div>
            <div id="modal">
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
                    class="lfYZV2"
                >
                    <div class="PLRlNg">
                        <div class="_3Vkt1z">
                            <div class="OQ30XY">
                                <div class="u+U3aD">Địa chỉ mới</div>
                                <form>
                                    <div class="Eb7GWV">
                                        <div class="_9eRQLw">
                                            <div class="L9HW8v">
                                                <div class="K-poJS jdMqY8">
                                                    <div class="HgxESG">
                                                        <div class="PEzOwl">Họ và tên</div>
                                                        <input
                                                            class="fasO4g"
                                                            type="text"
                                                            placeholder="Họ và tên"
                                                            autocomplete="name"
                                                            maxlength="64"
                                                            aria-describedby="input-error-message_a4b9986c-4a9c-4caf-ba2f-e122dfd9c3f6"
                                                            value=""
                                                        />
                                                    </div>
                                                </div>
                                                <div class="tpACWk"></div>
                                                <div class="K-poJS CtC2LZ">
                                                    <div class="HgxESG">
                                                        <div class="PEzOwl">Số điện thoại</div>
                                                        <input
                                                            class="fasO4g"
                                                            type="text"
                                                            placeholder="Số điện thoại"
                                                            autocomplete="user-address-phone"
                                                            aria-describedby="phone-error-message_606672a1-0ac2-4d7c-b647-d31aba8132be"
                                                            value=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="L9HW8v">
                                                <div class="m5RZka">
                                                    <div class="sxTpqI">
                                                        <div class="VePcq8">
                                                            <div class="CiVSHD">
                                                                Tỉnh/ Thành phố, Quận/Huyện, Phường/Xã
                                                            </div>
                                                            <div class="JjPh4H _5z99K0">
                                                                Tỉnh/ Thành phố, Quận/Huyện, Phường/Xã
                                                            </div>
                                                            <input
                                                                autocomplete="user-administrative-divisions"
                                                                class="i7whFJ MgsReA"
                                                                type="text"
                                                                placeholder="Tỉnh/ Thành phố, Quận/Huyện, Phường/Xã"
                                                                value=""
                                                            />
                                                            <div class="_2Z-v7G">
                                                                <div class="Ttkjwu"></div>
                                                                <div class="RCkTSv"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="L9HW8v">
                                                <div class="+Xl5nl">
                                                    <div class="n17Gd9 arFjjr _6KpdBY">
                                                        <div class="NyBSWA">
                                                            <div class="_1j9jyh">Địa chỉ cụ thể</div>
                                                            <textarea
                                                                class="KyMAqX"
                                                                disabled=""
                                                                rows="2"
                                                                placeholder="Địa chỉ cụ thể"
                                                                autocomplete="user-street-address"
                                                                maxlength="128"
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="k1bYqA"></div>
                                                </div>
                                            </div>

                                            <div class="my9d4K">
                                                <label class="_2VPxCf"
                                                ><input
                                                        class="Ren9OL"
                                                        type="checkbox"
                                                        role="checkbox"
                                                        aria-checked="false"
                                                        aria-disabled="false"
                                                    />
                                                    <div class="W+NVhE"></div>
                                                    Đặt làm địa chỉ mặc đinh</label>
                                            </div>
                                        </div>
                                        <div class="NjqqYS">
                                            <button class="NCvv2A oubYLd">Trở Lại</button><button class="NCvv2A qouWQk">Hoàn thành</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="WrX5pq"></div>
                </aside>
            </div>
        </div>
    )
}
export default UpdateAddressOrder

