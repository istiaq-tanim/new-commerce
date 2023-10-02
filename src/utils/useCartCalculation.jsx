import { useGetCartQuery } from "../Features/CartItem/CartApi"
const useCartCalculation = () => {
      const { data: cartItems } = useGetCartQuery()

      let cartCalculation = cartItems?.reduce((previousItem, item) => {
            const { price, orderQuantity } = item
            previousItem.totalAmount += parseFloat(price) * orderQuantity
            previousItem.totalQuantity += orderQuantity

            return previousItem

      }, {
            totalAmount: 0,
            totalQuantity: 0
      })
      return {
            amount: cartCalculation?.totalAmount,
            quantity: cartCalculation?.totalQuantity
      }
}

export default useCartCalculation