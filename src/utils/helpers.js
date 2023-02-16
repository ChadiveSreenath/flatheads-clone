import { updateDoc } from "firebase/firestore"



export const updateQuantityOfItem = async (val, itemId, cartData, itemRef) => {

    const result = cartData?.map(prod => prod?.product?.id === itemId ? { product: { ...prod?.product, qty: val } } : { product: prod?.product })
    try {
        await updateDoc(itemRef, {
            cartProducts: result
        })
    } catch (error) {
        console.log({ error })
    }
}


export const removeItemFromCart = async (id, cartData, itemRef) => {

    const result = cartData?.filter((item) => item?.product?.id !== id)
    try {
        await updateDoc(itemRef, {
            cartProducts: result
        })
    } catch (error) {
        console.log({ error })
    }

}