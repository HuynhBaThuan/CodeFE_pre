import axios from "axios";

// import React from "react";

const loginAPI = (email, password) => {
  return axios.post("https://falth.vercel.app/api/auth/login", { email, password });
}

const getUserInfo = async (token) => {
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  const api = `https://falth.vercel.app/api/user/${decodedToken.id}`

  const response = await axios.get(api, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

const getDefaultContact = async (token) => {
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  const api = `https://falth.vercel.app/api/user/get-default-contact/${decodedToken.id}`
  const response = await axios.get(api, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

const addContact = async (e, formData) => {
  e.preventDefault();
  console.log(formData)
  const newContact = {
    phoneNumber: formData.phoneNumber,
    address: formData.address,
  };

  try {
    //   // Gọi API để thêm liên hệ
    const token = localStorage.getItem("token");
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const response = await axios.put(`https://falth.vercel.app/api/user/add-contact/${decodedToken.id}`, newContact, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    window.location.reload()
    // Xử lý phản hồi từ máy chủ, ví dụ: hiển thị thông báo thành công
    console.log('Liên hệ đã được thêm', response.data);
    // Xóa dữ liệu trong form sau khi thêm liên hệ thành công
  } catch (error) {
    // Xử lý lỗi, ví dụ: hiển thị thông báo lỗi
    console.error('Lỗi khi thêm liên hệ', error);
  }
};

const deleteContact = async (id) => {
  try {
    //   // Gọi API để thêm liên hệ
    const token = localStorage.getItem("token");
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const api = `https://falth.vercel.app/api/user/del-contact/${decodedToken.id}/${id}`
    console.log(api)
    const response = await axios.delete(api, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    window.location.reload()

    // Xử lý phản hồi từ máy chủ, ví dụ: hiển thị thông báo thành công
    console.log('Liên hệ đã được xóa', response.data);
    // Xóa dữ liệu trong form sau khi thêm liên hệ thành công
  } catch (error) {
    // Xử lý lỗi, ví dụ: hiển thị thông báo lỗi
    console.error('Lỗi khi xóa liên hệ', error);
  }
}

const getStoreById = async (id) => {
  const api = `https://falth.vercel.app/api/store/653233e16d8d513510d93744`
  // const api = `https://falth.vercel.app/api/store/${id}`

  const response = await axios.get(api);
  return response.data;
}

export { loginAPI, getUserInfo, addContact, deleteContact, getStoreById, getDefaultContact }