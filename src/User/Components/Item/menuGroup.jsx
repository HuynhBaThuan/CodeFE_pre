import React from "react";
import DishInMenuGroup from "./dishInMenuGroup";
const MenuGroup = ({category, openModal}) => {
    const handleOpen = () => {
        openModal()
    }
    const dishes = [
        {
            images: [
                "https://images.foody.vn/res/g119/1184583/s120x120/1ac0a724-a306-458e-9c99-6f35250c-a122a597-230914133729.jpeg",
                "https://res.cloudinary.com/drk3oaeza/image/upload/v1698817534/pbl6/d0uojjx6pihujijjtqxb.jpg"
            ],
            price: 300000,
            ratingAverage: 0,
            isOutofOrder: true,
            _id: "6537ed78c4ff0a000884f6e4",
            description: "Miến được làm từ M I Ế N",
            name: "Bún bò",
            storeId: "651d7093e1494e0d580de291",
        },
        {
            images: [
                "https://images.foody.vn/res/g103/1020115/s120x120/765838b8-feda-4b05-9b61-3d788ccf-6d19a624-231016113746.jpeg",
                "https://res.cloudinary.com/drk3oaeza/image/upload/v1698817534/pbl6/d0uojjx6pihujijjtqxb.jpg"
            ],
            price: 400000,
            ratingAverage: 0,
            isOutofOrder: true,
            _id: "6537ed78c4ff0a000884f6e4",
            description: "Miến được làm từ M I Ế N",
            name: "Gà rán",
            storeId: "651d7093e1494e0d580de291",
        },
        {
            images: [
                "https://images.foody.vn/res/g103/1020115/s120x120/ad72f0b6-e816-4fbf-a51e-0102b958-b6cbefa6-231016113902.jpeg",
                "https://res.cloudinary.com/drk3oaeza/image/upload/v1698817534/pbl6/d0uojjx6pihujijjtqxb.jpg"
            ],
            price: 500000,
            ratingAverage: 0,
            isOutofOrder: true,
            _id: "6537ed78c4ff0a000884f6e4",
            description: "Miến được làm từ M I Ế N",
            name: "Cháo băm",
            storeId: "651d7093e1494e0d580de291",
        },
      ];
    return (
        <div>
            <div
                class="menu-group"
                id="section-group-menu-6936699"
                style={{
                    height: '56px',
                    width: '100%',
                }}
            >
                <div class="title-menu">{category.catName}</div>
            </div>
            {dishes.map((dish) => (
                <DishInMenuGroup dish={dish} handleOpen={handleOpen}/>
            ))}
        </div>
            

    )
}

export default MenuGroup