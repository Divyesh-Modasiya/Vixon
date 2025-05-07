import React, { useEffect } from 'react'
import PageHeaderProduct from '../Component/ProductComponent/PageHeaderProducts';
import ProductShowcase from '../Component/ProductComponent/ProductShowcase';

function ProductPage() {
  
  return (
    <div className='overflow-hidden'>
      <PageHeaderProduct/>
      <ProductShowcase/>
    </div>
  )
}

export default ProductPage
