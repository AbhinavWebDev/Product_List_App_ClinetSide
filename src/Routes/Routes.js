import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AddCategory } from '../Pages/AddCategory/AddCategory';
import { AddProduct } from '../Pages/AddProduct/AddProduct';
import { ProductList } from '../Pages/ProductList/ProductList';

export const RouteManagement = () => {
    
    return (
        <>
            <Routes>
               
              
                <Route path="/" element={ <AddCategory />} />
                <Route path="/addproduct" element={ <AddProduct />} />
                <Route path="/productlist" element={ <ProductList />} />
            </Routes>
        </>
    )
}
