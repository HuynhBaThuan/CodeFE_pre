import React from "react";
import DishInMenuGroup from "./dishInMenuGroup";
import { useCity } from "../../services/CityContext";
const MenuGroup = ({category, openModal, storeName}) => {
    const {cart, setCart, productsCount, setProductsCount} = useCity(); 
    const handleOpen = () => {
        openModal()
    }
    const dishes = [
        {
            images: [
                "https://images.foody.vn/res/g119/1184583/s120x120/1ac0a724-a306-458e-9c99-6f35250c-a122a597-230914133729.jpeg",
                "https://res.cloudinary.com/drk3oaeza/image/upload/v1698817534/pbl6/d0uojjx6pihujijjtqxb.jpg"
            ],
            price: 30000,
            ratingAverage: 0,
            isOutofOrder: true,
            _id: "6537ed78c4ff0a000884f6e2",
            description: "Miến được làm từ M I Ế N",
            name: "Bún bò",
            storeId: "651d7093e1494e0d580de293",
        },
        {
            images: [
                "https://images.foody.vn/res/g103/1020115/s120x120/765838b8-feda-4b05-9b61-3d788ccf-6d19a624-231016113746.jpeg",
                "https://res.cloudinary.com/drk3oaeza/image/upload/v1698817534/pbl6/d0uojjx6pihujijjtqxb.jpg"
            ],
            price: 40000,
            ratingAverage: 0,
            isOutofOrder: true,
            _id: "6537ed78c4ff0a000884f6e3",
            description: "Miến được làm từ M I Ế N",
            name: "Gà rán",
            storeId: "651d7093e1494e0d580de292",
        },
        {
            images: [
                "https://images.foody.vn/res/g103/1020115/s120x120/ad72f0b6-e816-4fbf-a51e-0102b958-b6cbefa6-231016113902.jpeg",
                "https://res.cloudinary.com/drk3oaeza/image/upload/v1698817534/pbl6/d0uojjx6pihujijjtqxb.jpg"
            ],
            price: 50000,
            ratingAverage: 0,
            isOutofOrder: true,
            _id: "6537ed78c4ff0a000884f6e4",
            description: "Miến được làm từ M I Ế N",
            name: "Cháo băm",
            storeId: "651d7093e1494e0d580de293",
        },
      ];

      const handleAddToCart = (dish) => {
        const addedDish = {
            _id: dish._id,
            images: dish.images,
            name: dish.name,
            price: dish.price,
            isOutofOrder: dish.isOutofOrder,
            ratingAverage: dish.ratingAverage,
            description: dish.description,
            storeId: dish.storeId,
            amount: 1,
            specialRequest: "",
            };
        const existingProductIndex = cart.products.findIndex(product => product._id === addedDish._id);
        if (cart.idStore === dish.storeId && existingProductIndex !== -1) {
            // If the dish exists in the cart, update its amount
            const updatedProducts = cart.products.map((product, index) => {
                if (index === existingProductIndex) {
                    return { ...product, amount: product.amount + 1 };
                }
                return product;
            });
    
            const updatedCart = { ...cart, products: updatedProducts };
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
    
            const count = updatedCart.products.length;
            setProductsCount(count);
        } else if (cart.idStore === dish.storeId) {
            // If the dish is not in the cart, add it to the products array
            const updatedProducts = cart.products.concat(addedDish);
            const updatedCart = { ...cart, products: updatedProducts };
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
    
            const count = updatedCart.products.length;
            setProductsCount(count);
        }
        else {
            const newCart = {
                idStore: dish.storeId,
                nameStore: storeName, // Make sure 'store' is defined in your scope
                products: [addedDish],
            };

            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart));

            const count = newCart.products.length;
            setProductsCount(count);
        }
      };
      
    return (
        <div>
            <div
                class="menu-group"
                id={`category-${category._id}`}
                style={{
                    height: '56px',
                    width: '100%',
                }}
            >
                <div class="title-menu">{category.catName}</div>
            </div>
            {dishes.map((dish) => (
                <DishInMenuGroup dish={dish} handleOpen={handleOpen} handleAddToCart={handleAddToCart}/>
            ))}
        </div>
            

    )
}

export default MenuGroup