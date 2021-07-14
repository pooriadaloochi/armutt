import React, {useState} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {LoginApi} from "../../api/Auth";


export default function Login() {

    // //LOGIN STATE
    const [usernameLogin, setUsernameLogin] = useState();
    const [passwordLogin, setPasswordLogin] = useState();
    const [counter, setCounter] = useState("0");
    //handleVerifyUsername
    const handleVerifyUsername=(e)=>{
        if(e.target.value.length<12){
            setUsernameLogin(e.target.value);
            setCounter(e.target.value.length)
        }
        else e.target.value = e.preventDefault();
    }
    const handleVerifyPassword=(e)=> {
        if (e.target.value.length < 17){
            setPasswordLogin(e.target.value);
    }
        else e.target.value = e.preventDefault();
    }
    const handleLogin = (e) => {
        const user = {
            mobile: usernameLogin,
            password: passwordLogin
        };
        e.target.cursor = 'pointerOut'
        const validateLogin = (user) => {
            if (!user.mobile){
                return "حتما باید شماره تلفن را وارد کنید"
            }
            if (!user.password)
                return "حتما باید پسوورد خود را وارد کنید"
            else if (isNaN(usernameLogin))
                return "شماره همراه نمیتواند شامل کاراکتری غیر از عدد باشد"
            else if (user.mobile.length<11)
                return "شماره همراه باید 11 رقم باشد"
            else if (user.mobile.charAt(0)!=="0"||user.mobile.charAt(1)!=="9")
                return "شماره همراه باید با 09 شروع شود"
            else if (user.password.length<6)
                return "پسوورد حداقل شامل 6 کاراکتر می باشد"
            else if (user.password.length>16)
                return "پسوورد حداکثر شامل 16 کاراکتر می باشد"
        };
        const error = validateLogin(user);
        if (error){
            return toast.warn(error)
        }
        toast.info("چند لحظه صبر کنید")
        LoginApi(user, (isOk, data) => {
            if (!isOk)
                return toast.error(data)
            else{
            toast.success("شما با موفقیت وارد شدید")
            localStorage.setItem("x-auth-token", data.user["remember_token"])
            localStorage.setItem("token", data.user["token"])
            window.location.reload()
            }})
    }

    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div
                            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">

                                    <h6 className="text-blueGray-500 text-sm font-bold">
                                        ورود به حساب کاربری

                                    </h6>
                                </div>

                                <hr className="mt-6 border-b-1 border-blueGray-300"/>

                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-blueGray-400 text-center mb-3 font-bold">
                                    <small> ورود با شماره تلفن </small>
                                </div>
                                <form>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            شماره تلفن
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="شماره تلفن"
                                            value={usernameLogin} onChange={handleVerifyUsername}
                                        />
                                        <span>{counter}/11</span>
                                    </div>

                                    <div className="relative w-full mb-3 ">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            رمز
                                        </label>
                                        <input
                                            type="password"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="رمز"
                                            value={passwordLogin} onChange={handleVerifyPassword}
                                        />
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                id="customCheckLogin"
                                                type="checkbox"
                                                className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                            />
                                            <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                                  مرا بخاطر بسپار
                                            </span>
                                        </label>
                                    </div>

                                    <div className="text-center mt-6">

                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="button" onClick={handleLogin}
                                        >
                                            ورود
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                            <div className="w-1/2">
                                <a href="#pablo">
                                    <Link to="/auth/forgot">
                                        <small className="text-blueGray-200">فراموشی رمز عبور؟</small>
                                    </Link>
                                </a>
                            </div>
                            <div className="w-1/2 text-right">
                                <Link to="/auth/register">
                                    <small className="text-blueGray-200">ساختن حساب کاربری</small>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
