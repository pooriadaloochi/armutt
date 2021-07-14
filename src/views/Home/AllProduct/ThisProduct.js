import React from 'react';
import useStyle from './AllProductStyle'
import {Link} from "react-router-dom";
import {ButtonBase} from "@material-ui/core";

const ThisProduct = ({data}) => {
    const classes = useStyle()
    return (
        <div className={classes.allProduct}>
            <div className={classes.imgModel}>
                <img src={data.thumb} alt="" className={classes.img}/>
                <div className={classes.model}>
                    {data.name}
                </div>
            </div>


            <div className={classes.details}>
                <Link to={"/Home/AllProduct/SingleProduct"}>
                    <ButtonBase type="button" className={classes.button} title=""
                            data-toggle="tooltip" data-original-title="btn btn-primary">
                        فروش

                    </ButtonBase>
                </Link>

                <div className={classes.price}>
                  <span className='ml-1'>{data.price}</span>
                  <span>ریال</span>

                </div>

            </div>
            {/*<div className={classes.details}>*/}


            {/*    <div className={classes.date}>*/}
            {/*        <span>کد : </span>*/}
            {/*        {data.code}*/}
            {/*    </div>*/}
            {/*</div>*/}


        </div>

    );
};

export default ThisProduct;