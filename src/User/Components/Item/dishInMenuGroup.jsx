import React from "react";

const DishInMenuGroup = ({ dish, handleOpen }) => {

    return (
        <div>
            {/* <div
                class="item-restaurant-row"
                style={{
                    height: '84px',
                    width: '100%',
                }}
            >
                <div class="row">
                    <div class="col-auto item-restaurant-img">
                        <button class="inline">
                            <img
                                src="https://images.foody.vn/res/g119/1184583/s120x120/1ac0a724-a306-458e-9c99-6f35250c-a122a597-230914133729.jpeg"
                                alt="Chân gà nướng muối ớt"
                                width="60"
                                height="60"
                            />
                        </button>
                    </div>
                    <div class="col item-restaurant-info">
                        <h2 class="item-restaurant-name">
                            Chân gà nướng muối ớt
                        </h2>
                        <div class="item-restaurant-desc">8 chân</div>
                        <div class="item-restaurant-total">
                            Đã được đặt<span class="txt-bold"
                            >&nbsp;10+&nbsp;</span>lần
                        </div>
                    </div>
                    <div class="col-auto item-restaurant-more">
                        <div class="row">
                            <div class="col-auto product-price">
                                <div class="current-price">
                                    39,000<span
                                        style={{
                                            fontWeight: '400',
                                            position: 'relative',
                                            top: '-9px',
                                            fontSize: '10px',
                                            right: '0',
                                        }}
                                    >đ</span>
                                </div>
                            </div>
                            <div
                                class="col-auto adding-food-cart txt-right"
                            >
                                <div class="btn-adding" onClick={handleOpen}>+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div
                class="item-restaurant-row"
                style={{
                    height: '84px',
                    width: '100%',
                }}
            >
                <div class="row">
                    <div class="col-auto item-restaurant-img">
                        <button class="inline">
                            <img
                                src={dish.images[0]}
                                alt={dish.name}
                                width="60"
                                height="60"
                            />
                        </button>
                    </div>
                    <div class="col item-restaurant-info">
                        <h2 class="item-restaurant-name">
                            {dish.name}
                        </h2>
                        <div class="item-restaurant-desc">8 chân</div>
                        <div class="item-restaurant-total">
                            Đã được đặt<span class="txt-bold"
                            >&nbsp;10+&nbsp;</span>lần
                        </div>
                    </div>
                    <div class="col-auto item-restaurant-more">
                        <div class="row">
                            <div class="col-auto product-price">
                                <div class="current-price">
                                    {dish.price}<span
                                        style={{
                                            fontWeight: '400',
                                            position: 'relative',
                                            top: '-9px',
                                            fontSize: '10px',
                                            right: '0',
                                        }}
                                    >đ</span>
                                </div>
                            </div>
                            <div
                                class="col-auto adding-food-cart txt-right"
                            >
                                <div class="btn-adding" onClick={handleOpen}>+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default DishInMenuGroup