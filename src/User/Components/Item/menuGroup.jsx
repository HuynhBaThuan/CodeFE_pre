import React, { useEffect } from "react";
import DishInMenuGroup from "./dishInMenuGroup";
import { useCity } from "../../services/CityContext";
import { useState } from "react";
import { getProductByStoreId } from "../../services/userServices";
const MenuGroup = ({ category, openModal, store }) => {
    const { cart, setCart, setProductsCount } = useCity();
    const handleOpen = () => {
        openModal()
    }
    const [dishes, setDishes] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await getProductByStoreId(store._id, category.catName)
                setDishes(products.data.data)
            } catch (error) {
                console.log("Lỗi khi lấy thông tin món ăn", error)
            }
        }
        fetchData();
    }, [])

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
                nameStore: store.name, // Make sure 'store' is defined in your scope
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
                <DishInMenuGroup dish={dish} handleOpen={handleOpen} handleAddToCart={handleAddToCart} />
            ))}
        </div>


    )
}

export default MenuGroup