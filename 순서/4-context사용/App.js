import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartInShow, setCartInShow] = useState(false);
  //cart모달창이 보이고 안보이고, 상태관리

  //cart모달 보이게 하는 함수
  const showCartHandler=()=>{
    setCartInShow(true)
  }
  
  //cart모달 안보이게 하는 함수
  const hideCartHandler=()=>{
    setCartInShow(false)
  }

  return (
    <CartProvider>
      { cartInShow && <Cart onClose ={hideCartHandler} />}
      {/* cartInShow가 true일때만 모달이 보임 */}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
