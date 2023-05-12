import { useSelector, useDispatch } from 'react-redux'
import CartState from 'redux/cart.slice'
import { styled } from 'styled-components'
import Image from 'next/image'
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice'
import { formatCurrency } from '@src/utils/utils'

const Container = styled.div`
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  text-align: end;
`
const Header = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`

const Column = styled.div`
  flex: 1;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
  text-transform: uppercase;
  border-bottom: 2px solid white;
  margin-bottom: 2rem;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
`

const Buttons = styled.div`
  background-color: black;
  color: black;
  border: none;
  font-size: 1rem;
`
const ActionButton = styled.button`
  height: 1.2rem;
  width: 1.2rem;
  margin: 0.1rem;
`

const Cell = styled.div`
  margin: 0 auto;
  width: 30%;
`

const TotalPrice = styled.h2`
  margin-right: 5%;
`
const EmptyCart = styled.div`
  text-align: center;
`
export default function Cart() {
  const cart = useSelector((state: CartState) => state.cart.items)
  console.log(cart)
  const dispatch = useDispatch()
  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.prices[0].price,
      0,
    )
  }
  return (
    <Container>
      {cart.length === 0 ? (
        <EmptyCart>
          <h1>Your Cart is Empty!</h1>
        </EmptyCart>
      ) : (
        <>
          <Header>
            <Column>Image</Column>
            <Column>Product</Column>
            <Column>Price</Column>
            <Column>Quantity</Column>
            <Column>Actions</Column>
            <Column>Total Price</Column>
          </Header>
          {cart.map((item) => (
            <Row key={item.title}>
              <Cell>
                <Image
                  alt="Comics Image"
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  height="90"
                  width="65"
                />
              </Cell>
              <Cell>{item.title}</Cell>
              <Cell>{formatCurrency(item.prices[0].price)}</Cell>
              <Cell>{item.quantity}</Cell>
              <Cell>
                <Buttons>
                  <ActionButton
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    +
                  </ActionButton>
                  <ActionButton
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    -
                  </ActionButton>
                  <ActionButton
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    x
                  </ActionButton>
                </Buttons>
              </Cell>

              <Cell>
                {formatCurrency(item.quantity * item.prices[0].price)}
              </Cell>
            </Row>
          ))}
          <TotalPrice>Total:_____{formatCurrency(getTotalPrice())}</TotalPrice>
        </>
      )}
    </Container>
  )
}
