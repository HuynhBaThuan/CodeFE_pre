// src/App.js
import React from "react";
import { useTranslation } from "react-i18next";
import { useLang } from "../../services/languageContext";
import { useNavigate } from "react-router-dom";

const SomeComponent = () => {
  const { t } = useTranslation();
    const navigate = useNavigate()
  const handleNav =()=> {
    navigate('/test')
  }

  return (
    <div>
      {/* <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("vi")}>Vietnamese</button> */}
      <h1>{t("greeting")}</h1>
      <h1>{t("greeting")}</h1>
      <input placeholder={t("searchPlaceholder")} />
      <button onClick={handleNav}>chuyển trang</button>
    </div>
  );
}

export default SomeComponent;
