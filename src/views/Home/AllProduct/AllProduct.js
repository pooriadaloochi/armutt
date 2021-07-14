import React, {useEffect, useState} from "react";
import {getProducts} from "../../../api/getProducts";
import {toast} from "react-toastify";
import GET from "./GET";

const produc = [
    {
        sender: {
            model: "ُSumsung A35",
            exists: "غیرفعال",
            img: "http://armut.s3.ir-thr-at1.arvanstorage.com/technology-28119767-0-8J6.jpg",
            date: "1399/8/7",
            price: "640,000"
        },
    },
    {
        sender: {
            model: "کولر گازی ایران رادیاتور مدل ICA-09CH-A",
            exists: "فعال",
            img: "/images/2.jpg",
            date: "1399/8/7",
            price: "650,000"
        },
    },
    {
        sender: {
            model: "یخچال فریزر ساید بای ساید دوو مدل D2S-",
            exists: "غیرفعال",
            img: "/images/3.jpg",
            date: "1399/8/7",
            price: "980,000"
        }
    },
    {
        sender: {
            model: "ماشین لباسشویی",
            exists: "فعال",
            img: "/images/mashin_side.jpg",
            date: "1399/8/7",
            price: "135,000"
        }
    },
    {
        sender: {
            model: "پنکه پایه دار",
            exists: "غیرفعال",
            img: "/images/panke_side.jpg",
            date: "1399/8/7",
            price: "980,000"
        }
    },
    {
        sender: {
            model: "کولر آبی آبسال مدل AC70",
            exists: "فعال",
            img: "/images/4.jpg",
            date: "1399/8/7",
            price: "980,000"
        }
    },
    {
        sender: {
            model: " ترازو آشپزخانه",
            exists: "غیرفعال",
            img: "/images/tarazoo_side.jpg",
            date: "1399/8/7",
            price: "980,000"
        }
    },
    {
        sender: {
            model: "هود آشپزخانه",
            exists: "فعال",
            img: "/images/hood_side.jpg",
            date: "1399/8/7",
            price: "980,000"
        }
    },
    {
        sender: {
            model: "یخچال فریزر ساید بای ساید دوو مدل D2S-",
            exists: "غیرفعال",
            img: "/images/3.jpg",
            date: "1399/8/7",
            price: "980,000"
        }
    },
    {
        sender: {
            model: "کولر گازی ایران رادیاتور مدل ICA-09CH-A",
            exists: "فعال",
            img: "/images/2.jpg",
            date: "1399/8/7",
            price: "650,000"
        }
    },
    {
        sender: {
            model: "یخچال و فریزر دیپوینت مدل DISCOVER",
            exists: "غیرفعال",
            img: "/images/1.jpg",
            date: "1399/8/7",
            price: "6400,000"
        }
    },
    {
        sender: {
            model: " ترازو آشپزخانه",
            exists: "فعال",
            img: "/images/tarazoo_side.jpg",
            date: "1399/8/7",
            price: "980,000"
        }
    },
    {
        sender: {
            model: "هود آشپزخانه",
            exists: "غیرفعال",
            img: "/images/hood_side.jpg",
            date: "1399/8/7",
            price: "980,000"
        }
    },
    {
        sender: {
            model: "ماشین لباسشویی",
            exists: "فعال",
            img: "/images/mashin_side.jpg",
            date: "1399/8/7",
            price: "1,350,000"
        }
    },
    {
        sender: {
            model: "پنکه پایه دار",
            exists: "غیرفعال",
            img: "/images/panke_side.jpg",
            date: "1399/8/7",
            price: "980,000"
        },
    },
    {
        sender: {
            model: "کولر آبی آبسال مدل AC70",
            exists: "فعال",
            img: "/images/4.jpg",
            date: "1399/8/7",
            price: "980,000"
        }
    }
]

const AllProduct=()=> {

    const [products, setProducts] = useState([])

    useEffect((callback) => {
        getProducts((isOk, data) => {
            if (!isOk)
                return toast.error("در گرفتن اطلاعات محصولات ناموفق بود")
            else
                return setProducts(data.data.data[0])

        });
    }, [])


    return (<div className="w-full flex flex-wrap  mr-auto ml-auto mt-4">

            <GET data={[products]}/>
            <GET data={[products]}/>
            <GET data={[products]}/>
            <GET data={[products]}/>
            <GET data={[products]}/>
            <GET data={[products]}/>
            <GET data={[products]}/>
            <GET data={[products]}/>
            <GET data={[products]}/>
            <GET data={[products]}/>
            <GET data={[products]}/>
            <GET data={[products]}/>

        </div>
    );
}
export default AllProduct;
