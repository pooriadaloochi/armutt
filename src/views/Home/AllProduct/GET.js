import React from 'react';
import ThisProduct from "./ThisProduct";

const GET = ({data}) => {
    return (
        <div className="flex flex-wrap mt-3" style={{marginRight:'2rem',width:'21%'}}>
            {data.map(products =>  <ThisProduct data={products}/>)}
        </div>
    );
};

export default GET;