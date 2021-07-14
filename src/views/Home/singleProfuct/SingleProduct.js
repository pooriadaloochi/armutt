import React, {useEffect, useState} from 'react';
import useStyle from "./SingleProductStyle";
import {Link} from "react-router-dom";
import {getSingleProduct} from "../../../api/getProducts";
import {toast} from "react-toastify";


const SingleProduct = () => {
    const classes = useStyle();
    const [sold, setSold] = useState([])

    useEffect((callback) => {
        getSingleProduct((isOk, data) => {
            if (!isOk)
                return toast.error(data.message)
            else
                return (setSold(data.data))
        });
    }, [])

    return (
        <div className={classes.allProduct}>
            <div className={classes.return}>
                <Link to={"/Home/AllProduct"}>
                    <button type="button" style={{color: '#2980B9', fontWeight: 'bold'}} title=""
                            data-toggle="tooltip" data-original-title="btn btn-primary">
                        بازگشت
                    </button>
                </Link>
                <Link to={"/Home/AllProduct"}>
                    <img src="/images/return.png" alt=""
                         style={{width: '60px', height: '50px', marginLeft: '1rem'}}/>
                </Link>
            </div>
            {
                [sold].map((item) => {
                    return (
                        <Tweeter thumb={item.thumb} name={item.name} code={item.code} price={item.price}
                                 min_price={item.min_price} description={item.description}/>
                    )
                })
            }

        </div>
    )
        ;
};

const Tweeter = ({name, price, code, thumb, min_price, description}) => {
    const classes = useStyle()

    return (
        <div className={classes.other}>
            {/*thumb*/}
            <div className={classes.imgModel}>
                <div className={classes.Album}>
                    <img src={thumb} alt="" className={classes.imgAlbum}/>
                    <img src={thumb} alt="" className={classes.imgAlbum}/>
                    <img src={thumb} alt="" className={classes.imgAlbum}/>
                </div>
                <img src={thumb} alt="" className={classes.imgBig}/>
            </div>
            {/*other details*/}
            <div className={classes.details}>
                <div className={classes.name}>
                    <span> نام : </span>
                    {name}
                </div>
                <hr/>
                <div className={classes.name}>
                    <span> کد : </span>
                    {code}
                </div>
                <hr/>

                <div className={classes.gin}>
                    <span> قیمت هر جین : </span>
                    {price}
                    <span> ریال  </span>
                </div>
                <hr/>

                <div className={classes.price}>
                    <span>قیمت هر گرم : </span>
                    {min_price}
                    <span> ریال</span>
                </div>
                <hr/>
                <div className={classes.explain}>
                    <span> توضیحات : </span>
                    {description}
                </div>
                <hr/>
                <button type="button" title="" className={classes.button}
                        data-toggle="tooltip" data-original-title="btn btn-primary">
                    درخواست فروش
                </button>
            </div>


        </div>
    )
}

export default SingleProduct;