import React from 'react'
import Gallery from './Gallery'
import './ProductText.css'
const Products = () => {
    return (
        <div>
            <div className="product_content">
                <h2 className="product_title">Feature products</h2>
            <p className="product_text">Fugiat Lorem quis aliquip est proident magna ullamco officia culpa. Sunt adipisicing pariatur ad excepteur cupidatat. Enim labore nisi voluptate reprehenderit nulla amet magna eu commodo ut.</p>
             <hr className="product_hr"/>
            </div>
            <Gallery/>
        </div>
    )
}

export default Products
