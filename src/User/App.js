import React, {useEffect} from 'react'
import Signin from './Page/signIn/signIn'
import SignUpCustomer from './Page/signUp/signUpCustomer'
import SignUpShipper from './Page/signUp/signUpShipper'
import SignUpOwner from './Page/signUp/signUpOwner'
import SignUpStore from './Page/signUp/signUpStore'
import Header from './Components/header/header'
import ForgotPass from './Page/resetPass/forgotPass'
import ResetPass from './Page/resetPass/resetPass'
import Verify from './Page/resetPass/verify'
import Footer from './Components/footer/footer'
import Profile from './Page/customer/profile'
import UpdateAddress from './Page/customer/updateAddress'
import OrderHistory from './Page/customer/orderHistory'
import Home from './Page/customer/home'
import OrderPage from './Page/customer/orderPage'
import StoreDetail from './Page/customer/storeDetail'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider} from './services/authContext'
import { CityProvider } from './services/CityContext'
import { LanguageProvider } from './services/languageContext'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token")
  if (token) {
    return element;
  } else {
    // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
    return <Navigate to="/signin" />;
  }
};

const App = () => {
  const checkAndCreateCart = () => {
    // Kiểm tra xem có biến 'cart' trong localStorage hay không
    const existingCart = localStorage.getItem('cart');
  
    if (!existingCart) {
      // Nếu không có, tạo một cart mặc định (có thể là một mảng trống)
      const defaultCart = {
        nameStore: 'Cửa hàng Food', // Tên cửa hàng
        idStore: 'sdgdhhf1244',   // ID cửa hàng
        products: [
          {
            id: '1',
            image: ['https://images.foody.vn/res/g116/1155652/s120x120/aa296232-4b2a-4651-9153-de98b781-93324cb5-221117190509.jpeg',],
            name: 'Sản phẩm 1',
            price: 100,
            amount: 1,
            specialRequest: "không hành",
          },
          {
            id: '2',
            image: ['https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/VNITE2022021502371836854/photo/510aaca140ea42a68dd18bb1c3545718_1664440232034477138.webp',],
            name: 'Sản phẩm 2',
            price: 200,
            specialRequest: "không gì",
            amount: 2
          },
          {
            id: '3',
            image: ['https://images.foody.vn/res/g116/1155652/s120x120/ffcaf8b9-7d67-403d-9b17-1435a12c-c74d5696-230128162004.jpeg',],
            name: 'Sản phẩm 3',
            price: 300,
            specialRequest: "không hành",
            amount: 3
          },
          {
            id: '4',
            image: ['https://images.foody.vn/res/g116/1155652/s120x120/d2e9166a-a078-4ec7-a76d-de12dff8-de303bf9-230128161703.jpeg',],
            name: 'Sản phẩm 4',
            price: 300,
            specialRequest: "",
            amount: 2
          }
        ],   // Mảng sản phẩm
      };
      localStorage.setItem('cart', JSON.stringify(defaultCart));
    }
  }

  useEffect(() => {
    checkAndCreateCart();
},);

  return (
    <LanguageProvider>
      <AuthProvider>
        <CityProvider>
          <Router>
            <div className='wrapper'>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/test" element={<SomeOneComponent />} /> */}
                <Route path="/signin" element={<Signin />} />
                <Route path="/signUpCustomer" element={<SignUpCustomer />} />
                <Route path="/signUpShipper" element={<SignUpShipper />} />
                <Route path="/signUpStore" element={<SignUpOwner />} />
                <Route path="/signUpStore" element={<SignUpStore />} />
                <Route path="/forgotPass" element={<ForgotPass />} />
                <Route path="/verify" element={<Verify />} />
                <Route path="/resetPass" element={<ResetPass />} />
                <Route path="/home/storeDetail" element={<StoreDetail />}/>

                <Route path="/user/profile" element={<ProtectedRoute element={<Profile />} />}/>
                <Route path="/user/orderHistory" element={<ProtectedRoute element={<OrderHistory />} />} />
                <Route path="/user/updateAddress" element={<ProtectedRoute element={<UpdateAddress />} />} />
                <Route path="/user/order" element={<ProtectedRoute element={<OrderPage />} />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </CityProvider>
      </AuthProvider>
    </LanguageProvider>
  )

}

export default App