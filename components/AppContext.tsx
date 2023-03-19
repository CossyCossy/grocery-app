import { createContext, useEffect, useState } from "react"
import { ContextProps, OrderItemProps, ProductProps } from "../types"

interface AppContextProps {
    children: JSX.Element | JSX.Element[]
}

export const AppContext = createContext<ContextProps>({
    cart: [],
    favourite: [],
    addToCart: () => { },
    editFavorite: () => { }
})


export const AppProvider = (props: AppContextProps) => {
    const { children } = props

    const addToCart = (cartItem: OrderItemProps): void => {
        let orderList = context.cart
        let item = orderList.filter(a => a.id == cartItem.id)
        if (item.length > 0) {
            let newQty = item[0].qty + cartItem.qty
            item[0].qty = newQty
            item[0].total = item[0].qty * cartItem.price
        } else {
            const newItem = {
                id: cartItem.id,
                qty: cartItem.qty,
                price: cartItem.price,
                total: cartItem.qty * cartItem.price,
                avatar: cartItem.avatar
            }
            orderList.push(newItem)
        }
        setContext((old) => ({ ...old, cart: orderList }))
    }

    const editFavorite = (favItem: ProductProps): void => {
        let favList = context.favourite
        let item = favList.filter(a => a.id == favItem.id)
        if (item.length > 0) {
            for (let i = 0; i < favList.length; i++) {
                if(favList[i]?.id === item[0]?.id) { 
                    favList.splice(i, 1)
                }
            }
        } else {
            favList.push(favItem)
        }
        setContext((old) => ({ ...old, favourite: favList }))
    }

    const [context, setContext] = useState<ContextProps>({
        cart: [],
        favourite: [],
        addToCart,
        editFavorite
    })

    return <AppContext.Provider value={context}>
        {children}
    </AppContext.Provider>
}
