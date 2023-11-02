import React, {useState} from 'react'
import '../../assets/fonts/fontawesome-free-6.2.0-web/css/all.min.css'
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ResetPass = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [newPass, setNewPass] = useState(""); 
    const [confirm, setConfirm] = useState(""); 
    const [error, setError] = useState("");
    const email = location.state.email;
    const handleResetPass = async () => {
        if(!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(newPass.trim())) {
            setError(t("error5"))
        }else if(newPass.trim() !== confirm.trim()) {
            setError(t("error6"));
        } else {
            try {
                // const response = await axios.post(`https://falth.vercel.app/api/auth/reset-password/${email}`, {password: newPass, passwordConfirm: confirm});
      
                // console.log('Đăng ký thành công', response.data);
                console.log(newPass, confirm, email)
                alert(t("alert"))
                navigate("/signin")
              } catch (error) {
                setError(t("error7"));
              }
        }
    }
    return (
        <div class="now-login">
            <div class="content">
                <div class="title">{t("resetTitle")}</div>
                <p>{t("resetMess")}</p>
                <div class="form-login-input">
                    <div class="field-group">
                        <div class="input-group">
                            <i class="far fa-solid fa-lock"></i>
                            <input type="password" placeholder={t("newPass")} value={newPass} onChange={(e) => setNewPass(e.target.value)} />
                        </div>
                        <div class="input-group">
                            <i class="far fa-solid fa-lock"></i>
                            <input type="password" placeholder={t("confirmPass")} value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                        </div>
                    </div>
                    {error && <div className="alert-danger">{error}</div>}
                    <button class="btn btn-block" onClick={handleResetPass}>{t("resetTitle")}</button>
                </div>
            </div>
        </div>
    )
}

export default ResetPass;