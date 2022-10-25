import { useCounter } from '../hooks/useCounter'

import styles from '../styles/styles.module.css'
import { createContext, CSSProperties, ReactElement, useContext } from 'react'
import { Product, ProductContextProps } from '../interfaces/interfaces'



export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext


export interface Props {
  children: ReactElement | ReactElement[]
  product: Product
  className?: string
  style?: CSSProperties
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useCounter()
  return (
    <Provider value={{
      counter, increaseBy, product 
    }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        { children }
      </div>
    </Provider>
  )
}
