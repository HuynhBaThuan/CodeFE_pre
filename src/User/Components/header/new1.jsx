// src/App.js
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const SomeOneComponent = () => {
  const { t } = useTranslation();
    const navigate = useNavigate()
  const handleNav =()=> {
    navigate('/')
  }
  return (
    <div>
      <h1>{t("greeting")}</h1>
      <input placeholder={t("searchPlaceholder")} />
      <button onClick={handleNav}>chuyển trang</button>
    </div>
  );
}

export default SomeOneComponent;
