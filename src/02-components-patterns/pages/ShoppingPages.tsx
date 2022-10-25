import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'
const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
}
const product2 = {
  id: '1',
  title: 'Coffee Mug -2',
  img: ''
}

export const ShoppingPages = () => {
  return (
    <div >
      <h1>Shoppping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons/>
        </ProductCard>

        <ProductCard product={product2} className="bg-dark">
          <ProductImage className="custom-image"/>
          <ProductTitle className="text-white"/>
          <ProductButtons className="custom_buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark" style={{backgroundColor: 'slateblue'}}>
          <ProductImage className="custom-image" style={{boxShadow: '10px 10px 10px rgba(0,0,0,.2)'}}/>
          <ProductTitle className="text-white" style={{ fontWeight: 'bold' }}/>
          <ProductButtons className="custom_buttons" style={{ display: 'flex', justifyContent: 'flex-end' }}/>
        </ProductCard>
      </div>
    </div>
  )
}
