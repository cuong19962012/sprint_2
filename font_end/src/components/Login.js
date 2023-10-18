import { useNavigate } from 'react-router-dom';
import Img from '../img/Login.jpg';
import Logo from '../img/Logo.png';
import * as UserAppService from '../services/UserAppService';
import { useState } from 'react';
export function Login() {
    const navigate = useNavigate();
    const [messageError, setMessageError] = useState();
    const login = async (event) => {
        event.preventDefault();
        const username = await document.getElementById("username").value;
        const password = await document.getElementById("password").value;
        const appUser = {
            "username": username,
            "password": password
        };
        try {
            const result = await UserAppService.login(appUser);
            localStorage.setItem("token", result.data.token);
            localStorage.setItem("username", result.data.userApp.username);
            localStorage.setItem("image", result.data.userApp.image);
            navigate("/home");
        } catch (e) {
            setMessageError("Tài khoản hoặc mật khẩu không đúng");
        }
    };
    const resetMesseage = () => {
        setMessageError(null);
    };
    return (
        <>
            <div style={{ backgroundColor: '#170f23' }} className="d-flex justify-content-center min-vh-100 align-items-center ">
                <section className="bg-light-subtle w-50 rounded-5">
                    <div className="row">
                        <div className="col-6 m-0 px-0 pb-5 d-flex justify-content-center">
                            <form className="w-75 h-75" onSubmit={login}>
                                <div className="mb-3 d-flex justify-content-center">
                                    <img className="h-100 w-100" src={Logo} alt />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label" style={{ color: '#6040ab' }}>Tên đăng nhập</label>
                                    <input type="text" onFocus={() => resetMesseage()} className="form-control" id="username" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="password" className="form-label" style={{ color: '#6040ab' }}>Mật khẩu</label>
                                    <input type="password" onFocus={() => resetMesseage()} className="form-control" id="password" />
                                </div>
                                <div className="mb-2 text-danger" style={{ height: '2rem', fontSize: '0.93rem' }}>
                                    {messageError ? messageError : ""}
                                </div>
                                <button type="submit" className="btn btn-primary">Đăng nhập</button>
                            </form>
                        </div>
                        <div className="col-6 p-0 m-0">
                            <img className="h-100 w-100 object-fit-cover rounded-end-5" src={Img} />
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}