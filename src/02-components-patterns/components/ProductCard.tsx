import { useCounter } from '../hooks/useCounter'

import styles from '../styles/styles.module.css'
import { createContext, ReactElement, useContext } from 'react'
import { ProductContextProps, ProductProps } from '../interfaces/interfaces'



export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext



export const ProductCard = ({ children, product }: ProductProps) => {
  const { counter, increaseBy } = useCounter()
  return (
    <Provider value={{
      counter, increaseBy, product 
    }}>
      <div className={styles.productCard}>
        { children }
      </div>
    </Provider>
  )
}
