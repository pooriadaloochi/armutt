import React, {useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import {Tab, Tabs} from "@material-ui/core";
import {toast} from "react-toastify";
import {ForgotApi, ResetPassApi, VerifyForgotApi} from "../../api/Auth";

const FORGOT_VALUE = 1
const FORGOT_VERIFY_VALUE = 2
const RESET_PASS_VALUE = 3


const Forgot = () => {
    // //Tab STATE
    const [tabFor, setTabFor] = useState(FORGOT_VALUE);
    // //forgot password STATE
    const [forgotNumber, setForgotNumber] = useState();
    const [counter, setCounter] = useState("0");

    const handleSetForgotNumber = (e)=>{
        if(e.target.value.length<12){
        setForgotNumber(e.target.value);
        setCounter(e.target.value.length)
        }
        else e.target.value = e.preventDefault();
    }

    const handleForgotNum = () => {
        const user = {
            mobile: forgotNumber
        };
        const validateForgotPass = (user) => {
            if (!user.mobile )
                return "حتما باید شماره تلفن را وارد کنید"
            else if (isNaN(forgotNumber))
                return "شماره همراه نمیتواند شامل کاراکتری غیر از عدد باشد"
            else if (user.mobile.length<11)
                return "شماره همراه باید 11 رقم باشد"
            else if (user.mobile.charAt(0)!=="0")
                return "شماره همراه باید با صفر شروع شود"
        };
        const error = validateForgotPass(user);

        if (error)
            return toast.warn(error)
        toast.info("لطفا چند لحظه صبر کنید")
        ForgotApi(user, (isOk, data) => {
            localStorage.setItem("message", data.message)
            localStorage.setItem("status", data.status)
            if (!isOk)
                return toast.error(data)
            else if (localStorage.status === "false")
                toast.error(localStorage.message)
            else if (localStorage.status === "true") {
                toast.success(localStorage.message)
                setTabFor(FORGOT_VERIFY_VALUE);
                console.log(localStorage.message)
            }
        })
    }


    //verify code forgot password
    const [verifyForgot, setVerifyForgot] = useState();
    const [counter2, setCounter2] = useState("0");
    // handleVerify
    const handleSetVerifyForgot = (e)=>{
        if(e.target.value.length<7){
            setVerifyForgot(e.target.value);
            setCounter2(e.target.value.length)
        }
        else e.target.value = e.preventDefault();
    }

    const handleVerifyForgot = () => {
        const userV = {
            mobile: forgotNumber,
            verifyCode: verifyForgot
        };
        const validateVerify = (userV) => {
            if (!userV.verifyCode)
                return "حتما باید  کد را وارد کنید"
        };
        const error = validateVerify(userV);
        if (error)
            return toast.warn(error)
        toast.info("لطفا چند لحظه صبر کنید")
        VerifyForgotApi(userV, (isOk, data) => {
            if (!isOk)
                return toast.error(data)
            else {
                toast.success("کد شما مورد تایید قرار گرفت")
                setTabFor(RESET_PASS_VALUE);
                localStorage.setItem("token", data.user.token)
            }
            ;
        });
    };


    //RESET PASSWORD forgot
    const [resetPass, setResetPass] = useState();
    const [configPass, setConfigPass] = useState();
    const handleResetPass = () => {
        const userP = {
            password: resetPass
        };
        const validateVerify = (userP) => {
            if (!userP.password)
                return "حتما باید  رمز جدید را وارد کنید"
            else if (userP.password.length<6)
                return "رمز مورد نظر باید حداقل شمال 6 کاراکتر باشد "
            else if (userP.password.length>16)
                return "رمز مورد نظر باید حداکثر شمال 16 کاراکتر باشد "
            else if (resetPass!==configPass)
                return "رمزهای وارد شده یکسان نیست"
        };
        const error = validateVerify(userP);
        if (error)
            return toast.warn(error)
        toast.info("لطفا چند لحظه صبر کنید")
        ResetPassApi(userP, (isOk, data) => {
            localStorage.setItem("message", data.message)
            localStorage.setItem("status", data.status)
            if (!isOk)
                return toast.error(data)
            else {
                toast.success(localStorage.message)
                window.location.reload()
                return <Redirect to="auth/Login"/>
            }
        });
    };
    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4  bg-blueGray-200"
                         style={{background: "white !important"}}>

                        <div className="rounded-t relative flex flex-col min-w-0 break-words w-full
                             shadow-lg  bg-blueGray-200 border-0">
                            <div className=" mb-0 px-6 py-6 ">
                            <div className="rounded-t mb-0  py-3">
                                <div className="text-center ">

                                    <h6 className="text-blueGray-500 text-sm font-bold">
                                        فراموشی رمز عبور
                                    </h6>
                                </div>

                                <hr className="mt-6 border-b-1 border-blueGray-300"/>

                            </div>
                                <Tabs value={tabFor} onChange={e => setTabFor(e.value)}
                                      indicatorColor="primary" textColor="black"
                                      aria-label="disabled tabs example">
                                    <Tab label="شماره تفن" value={FORGOT_VALUE} disabled style={{fontWeight: 800}}/>
                                    <Tab label="ورود کد" value={FORGOT_VERIFY_VALUE} disabled
                                         style={{fontWeight: 800}}/>
                                    <Tab label="پسوورد جدید" value={RESET_PASS_VALUE} disabled
                                         style={{fontWeight: 800}}/>
                                </Tabs>
                                <hr className="border-b-1 border-blueGray-300"/>

                            </div>
                        </div>
                        {tabFor === FORGOT_VALUE &&
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg
                              bg-blueGray-200 border-0">

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
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300
                                            text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none
                                             focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="شماره تلفن"
                                            value={forgotNumber} onChange={handleSetForgotNumber}
                                        />
                                        <span>{counter}/11</span>

                                    </div>

                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="button" onClick={handleForgotNum}
                                        >
                                            ارسال کد فعالسازی
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>}
                        {tabFor === FORGOT_VERIFY_VALUE &&
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg
                              bg-blueGray-200 border-0">

                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                                <form>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password">
                                            کد ارسالی
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300
                                            text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none
                                             focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder=" کد ارسال شده"
                                            value={verifyForgot} onChange={handleSetVerifyForgot}
                                        />
                                        <span>{counter2}/6</span>
                                    </div>

                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="button" onClick={handleVerifyForgot}>
                                            تایید کد ارسالی
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>}
                        {tabFor === RESET_PASS_VALUE &&
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg
                          bg-blueGray-200 border-0">

                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                                <form>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                          لطفا رمز خود را وارد کنید
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300
                                            text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none
                                             focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="  رمز جدید را وارد کنید"
                                            value={resetPass} onChange={e => setResetPass(e.target.value)}
                                        />
                                    </div>      <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        رمز خود را مجددا وارد کنید
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300
                                            text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none
                                             focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="  رمز جدید را وارد کنید"
                                        value={configPass} onChange={e => setConfigPass(e.target.value)}
                                    />
                                    </div>

                                    <div className="text-center mt-6">
                                        <button className="bg-blueGray-800 text-white active:bg-blueGray-600
                                         text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg
                                          outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all
                                          duration-150" type="button" onClick={handleResetPass}>
                                            تایید رمز جدید
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>}

                        <div className="flex flex-wrap mt-6 relative justify-center">

                            <Link to="/auth/Login">
                                <small className="text-white">ورود با شماره تلفن</small>
                            </Link>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Forgot;