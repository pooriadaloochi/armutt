import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";
import {toast} from "react-toastify";
import {RegisterApi, SetPassApi, VerifyApi} from "../../api/Auth";
import {Tab, Tabs} from "@material-ui/core";

const REGISTER_VALUE = 1
const CODE_VERIFY_VALUE = 2
const SET_NEW_PASSWORD = 3
export default function Register() {

    // //Tab STATE
    const [tab, setTab] = useState(REGISTER_VALUE);

    // //REGISTER STATE
    const [registerNum, setRegisterNum] = useState();
    const [counter, setCounter] = useState("0");

    //handle RegisterNumber
    const handleRegisterNum = (e) => {
        if (e.target.value.length < 12) {
            setRegisterNum(e.target.value);
            setCounter(e.target.value.length)
        } else e.target.value = e.preventDefault();
    }

    const handleRegister = () => {
        const user = {
            mobile: registerNum
        };
        const validateRegister = (user) => {
            if (!user.mobile)
                return "حتما باید شماره تلفن را وارد کنید"
            else if (user.mobile.charAt(0) !== "0" || user.mobile.charAt(1) !== "9")
                return "شماره همراه باید با 09 شروع شود"
            else if (user.mobile.length < 11)
                return "شماره همراه باید 11 رقم باشد"
            else if (user.mobile.charAt(0) !== "0")
                return "شماره همراه باید با 09 شروع شود"
        };
        const error = validateRegister(user);
        if (error)
            return toast.warn(error)
        toast.info("لطفا چند لحظه صبر کنید")
        RegisterApi(user, (isOk, data) => {
            localStorage.setItem("message", data.message)
            localStorage.setItem("status", data.status)
            if (!isOk)
                return toast.error(data)
            else if (localStorage.status === "false") {
                toast.error(localStorage.message)
            } else if (localStorage.status === "true") {
                toast.success(localStorage.message)
                setTab(CODE_VERIFY_VALUE);
            }
        })
    }
    //VERIFY
    const [verify, setVerify] = useState();
    const [counter2, setCounter2] = useState("0");

    const handleSetVerify = (e) => {
        if (e.target.value.length < 7) {
            setVerify(e.target.value);
            setCounter2(e.target.value.length)
        } else e.target.value = e.preventDefault();
    }
    const handleVerify = () => {
        const userV = {
            mobile: registerNum,
            verify_code: verify
        };
        const validateVerify = (userV) => {
            if (!userV.verify_code)
                return "حتما باید  کد را وارد کنید"
            else if (userV.verify_code.length < 6)
                return "کد باید شامل 6 کاراکتر می باشد"
        };
        const error = validateVerify(userV);
        if (error)
            return toast.warn(error)
        toast.info("لطفا چند لحظه صبر کنید")
        VerifyApi(userV, (isOk, data) => {
            if (!isOk)
                return toast.error(data)
            else {
                toast.success("کد مورد تایید قرار گرفت")
                setTab(SET_NEW_PASSWORD);
                localStorage.setItem("token", data.user.token)
            }
        })
    }
    //SET PASSWORD
    const [setPass, setSetPass] = useState();
    const [confPass, setConfPass] = useState();
    const handleSetPass = () => {
        const userP = {
            password: setPass,
        };
        const validateSetPass = (userP) => {
            if (!userP.password)
                return "رمز ها نمی توانند خالی بمانند"
            else if (setPass !== confPass)
                return "رمز ها یکسان نیستند"
        };
        const error = validateSetPass(userP);

        if (error)
            return toast.warn(error)
        toast.info("لطفا چند لحظه صبر کنید")
        SetPassApi(userP, (isOk, data) => {
            if (!isOk)
                return toast.error(data)
            else {
                toast.success(data)
                window.location.reload()
                return <Redirect to={"/auth/Login"}/>

            }
        })
    }


    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4 rounded-lg bg-blueGray-200"
                         style={{background: "white !important"}}>

                        <div className="relative flex flex-col min-w-0 break-words w-full
                             shadow-lg  bg-blueGray-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6 ">
                        <div className="rounded-t mb-0  py-1">
                            <div className="text-center ">

                                <h6 className="text-blueGray-500 text-sm font-bold">
                                    فراموشی رمز عبور
                                </h6>
                            </div>

                            <hr className="mt-6 border-b-1 border-blueGray-300"/>

                        </div>
                                <Tabs value={tab} onChange={e => setTab(e.value)}
                                      indicatorColor="primary" textColor="black"
                                      aria-label="disabled tabs example">
                                    <Tab label="ثبت نام " value={REGISTER_VALUE} disabled style={{fontWeight: 800}}/>
                                    <Tab label="ورود کد" value={CODE_VERIFY_VALUE} disabled style={{fontWeight: 800}}/>
                                    <Tab label="رمز دلخواه" value={SET_NEW_PASSWORD} disabled
                                         style={{fontWeight: 800}}/>
                                </Tabs>
                                <hr className="border-b-1 border-blueGray-300"/>

                            </div>
                        </div>
                        {tab === REGISTER_VALUE &&
                        <div
                            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg  bg-blueGray-200 border-0">

                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

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
                                            className="border-0 px-3 py-3 placeholder-blueGray-300
                                            text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none
                                             focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="شماره تلفن"
                                            value={registerNum} onChange={handleRegisterNum}
                                        />
                                        <span>{counter}/11</span>
                                    </div>

                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="button" onClick={handleRegister}
                                        >
                                            ارسال کد فعالسازی
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>}
                        {tab === CODE_VERIFY_VALUE &&
                        <div
                            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">

                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                                <form>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password">
                                            کد ارسالی
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300
                                            text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none
                                             focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder=" کد ارسال شده"
                                            value={verify} onChange={handleSetVerify}/>
                                        <span>{counter2}/6</span>
                                        <div className="w-12 ">
                                        </div>
                                    </div>

                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="button" onClick={handleVerify}>
                                            تایید کد و ثبت نام
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>}
                        {tab === SET_NEW_PASSWORD &&
                        <div
                            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">

                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                                <form>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            پسوورد دلخواه را وارد کنید
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300
                                            text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none
                                             focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="پسورد دلخواه"
                                            value={setPass} onChange={e => setSetPass(e.target.value)}/>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            پسوورد خود را مجددا وارد کنید
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300
                                            text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none
                                             focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="تکرار پسورد"
                                            value={confPass} onChange={e => setConfPass(e.target.value)}/>
                                    </div>

                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="button" onClick={handleSetPass}>
                                            تایید کد وaesrthrthrth ثبت نام
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        }
                        <div className="flex flex-wrap mt-6 relative justify-center">

                            <Link to="/auth/Login">
                                <small className="text-blueGray-200">ورود با شماره تلفن</small>
                            </Link>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
