import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

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
    <div>
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
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product2}>
          <ProductImage />
          <ProductTitle title={'title changed'}/>
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}
