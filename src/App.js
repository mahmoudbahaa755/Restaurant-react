import React, {useState} from "react";
import SubHeader from "./components/SubHeader/SubHeader";
import Header from "./components/Header/Header";
import MenuSection from "./components/MenuSection/MenuSection";
import CartOrderNumContext from "./context/CartOrderNumContext";
import CartWindow from "./components/PopupWindow/CartWindow";
import CartProvider from './store/CartProvider';


function App() {
  const [cartIsShown,setCartIsShown] = useState(false);
  const [orderNum, setOrderNum] = useState(0);
  const showCartIsShown = () => {
    setCartIsShown(true);
  };
    const hidCartIsShown = () => {
      setCartIsShown(false);
    };
  // const changeCartIsShown = () => {
  //     setCartIsShown(!cartIsShown);
  // };
  const getOrderNum = (value) => {
   setOrderNum(()=>{
    return value;
   });
    
  };
  return (
    <CartProvider>
      {cartIsShown && <CartWindow onClose={hidCartIsShown} />}
      <CartOrderNumContext.Provider value={{ orderNum: orderNum }}>
        <Header changeCartIsShown={showCartIsShown} />
      </CartOrderNumContext.Provider>
      <SubHeader />
      <main>
        <MenuSection getOrderNum={getOrderNum} />
      </main>
    </CartProvider>
  );
}

export default App;
