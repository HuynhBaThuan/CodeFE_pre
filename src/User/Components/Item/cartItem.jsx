import React, { useState, useEffect } from "react";
import '../../assets/css/cart.css'
import DeleteConfirmationModal from "../Modal/deleteDanger";
import AddDish from "../Modal/addDish";
const CartItem = ({ inputQuantity, linkImage, dishName, specialRequest, price, id, updateTotalPrice}) => {
    // 
    const [quantity, setQuantity] = useState(inputQuantity);
  const [totalPrice, setTotalPrice] = useState(quantity * price);
  const [currentSpecialRequest, setCurrentSpecialRequest] = useState(specialRequest);
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      console.log(price)
      updateTotalPrice(id, quantity - 1, price);
    }
  };

  const handleIncrease = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
        console.log(price)
        updateTotalPrice(id, quantity + 1, price);
    }
  };

  useEffect(() => {
    setTotalPrice(quantity * price);
    // updateTotalPrice(id, totalPrice); // Gọi hàm updateTotalPrice để cập nhật tổng tiền
  }, [quantity, price]);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const handleShowDeleteModal = (item) => {
        setItemToDelete(item);
        setShowDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        setItemToDelete(null);
    };

    const handleDeleteItem = () => {
        // Thực hiện xóa mục (itemToDelete) ở đây
        // Sau khi xóa xong, đóng modal
        handleCloseDeleteModal();
    };

    const [showModal1, setShowModal1] = useState(false);


    const openModal1 = () => {
        setShowModal1(true);
    };

    const closeModal1 = () => {
        setShowModal1(false);
    };
    const handleAddDishConfirm = (data) => {
        // Cập nhật giá trị quantity và totalPrice từ AddDish
        setQuantity(data.quantity);
        setTotalPrice(data.totalPrice);
      
        // Cập nhật giá trị specialRequest từ AddDish
        setCurrentSpecialRequest(data.specialRequest);
      
        // Đóng AddDish modal (nếu cần)
        // closeModal1();
      };
    
    return (
        <div>
            <div class="CartItem___2Yzg2 CartItem___j95Ri">
                <div class="ant-row-flex CartItemRow___1A734">
                    <div class="CartItem-ColQty___2ATYU">
                        <div class="QtyControl___2iag0">
                            <div class="QtyLink___x_Jhz"
                            ><i class="fa-solid fa-minus" style={{ cursor: 'pointer' }} onClick={handleDecrease}></i>
                            </div>
                            <div class="QtyControl-Qty___1d4X_">{quantity}</div>
                            <div class="QtyLink___x_Jhz"
                            ><i class="fa-solid fa-plus" style={{ cursor: 'pointer' }} onClick={handleIncrease}></i></div>
                        </div>
                        <a
                            href="./"
                            class="QtyCounter___Pld6t"
                            role="button"
                            tabindex="0"
                        >1x</a>
                    </div>
                    <div
                        class="CartItem-ColPhoto___1guvj tappable___LOYBZ"  onClick={openModal1}
                    >
                        <div
                            class="placeholder___1xbBh CartItem-Photo___nfN4N"
                        >
                            <img
                                alt="Food item"
                                class="realImage___2TyNE show___3oA6B"
                                src={linkImage}
                            />
                        </div>
                    </div>
                    <div class="CartItem-ColDetail___25qM5">
                        <div class="ant-row-flex">
                            <div
                                class="CartItem-ColName___19whb tappable___LOYBZ CartItem-ColName-STO" onClick={openModal1}
                            >
                                <div class="CartItem-Name___1U_wi">
                                    {dishName}
                                </div>
                                <div class="CartItem-Comment___XZpCq">
                                    {currentSpecialRequest}
                                </div>
                            </div>
                            <div class="CartItem-ColPrice___136ai">
                                <div>
                                    <div>{totalPrice}</div>
                                    <button onClick={handleShowDeleteModal}><i class="fa-solid fa-trash" style={{ color: 'red' }}></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DeleteConfirmationModal show={showDeleteModal} handleClose={handleCloseDeleteModal} handleDelete={handleDeleteItem}/>
            {showModal1 && (
                <AddDish
                    show={showModal1}
                    handleClose={closeModal1}
                    inputQuantity={quantity}
                    linkImage={linkImage}
                    dishName={dishName}
                    specialRequest={currentSpecialRequest}
                    price={price}
                    onConfirm={handleAddDishConfirm}
                />
            )}
        </div>
    )
}
export default CartItem