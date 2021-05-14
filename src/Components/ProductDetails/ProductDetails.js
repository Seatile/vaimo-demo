import React, {useEffect, useState} from 'react'

function ProductDetails(props)  {

    const [productDetails, setProductDetails] = useState();

    useEffect(() => {
        getProductInfo();
    }, []);

    const getProductInfo = async () => {
        var response = await fetch("https://fe-assignment.vaimo.net/").then(resp => resp.json());

        setProductDetails(response);
    }

    <div>
        
    </div>
}

export default ProductDetails