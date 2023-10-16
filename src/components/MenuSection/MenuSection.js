import React, {
    useState,
    useContext,
    useEffect
} from "react";
import style from "./OrderSection.module.css";
import OrderFood from './OrderFood';
import Container from '../UI/Container';
import cartContext from "../../store/cart-context";
import useHttp from '../../hooks/useHttp';



function OrderSection(props) {
    const [menuSection, setMenuSection] = useState(true);
    const [desertMenu, setDessertMenu] = useState([]);
    // const [desertMenu, setDessertMenu] = useState([

    //     {
    //         name: 'Donate',
    //         id: 0,
    //         description: 'Donate to the cause',
    //         price: 4.99,
    //         component: ['Donate'],
    //         extra: ['Chocolate', 'Coffee', 'White Sauce'],
    //         amount: 0
    //     },
    //     {
    //         name: 'Chocolate cake',
    //         id: 1,

    //         description: 'Donate to the cause',
    //         price: 6.99,
    //         component: ['Donate'],
    //         extra: ['Chocolate', 'Coffee', 'White Sauce'],
    //         amount: 0
    //     },

    // ]);
    const [mainMenu, setMainMenu] = useState([]);
    // const [mainMenu, setMainMenu] = useState([{
    //     name: 'Sushi',
    //     description: 'Finest fish and veggies',
    //     id: 0,
    //     price: '22.99',
    //     component: ['fish', 'veggies'],
    //     amount: 0
    // }, {
    //     name: 'Burger',
    //     description: 'Finest burger and fries',
    //     price: '20.99',
    //     component: ['Meat', 'Bread', 'Sauce', 'Tomato'],
    //     amount: 0,
    //     id: 1
    // }, {
    //     name: 'Chicken Burger',
    //     description: 'Finest burger and fries',
    //     id: 2,
    //     price: '20.99',
    //     component: ['Chicken', 'Bread', 'Sauce', 'Tomato'],
    //     amount: 0
    // }]);
    var sum = 0;
   
    const {
        fetchingData: getData
    } = useHttp();
useEffect(() => {
    const fetchingData = (data) => {
        const n = Object.keys(data);
        setDessertMenu(data[n]);

    };

    getData({
        url: 'https://react-first-project-dbb54-default-rtdb.firebaseio.com/desertMenu.json',
        method: 'GET'
    }, fetchingData);
        console.log(desertMenu);

}, []);
useEffect(() => {
     const fetchingData = (data) => {
         const n = Object.keys(data);
         setMainMenu(data[n]);
     };
        getData({
            url: 'https://react-first-project-dbb54-default-rtdb.firebaseio.com/mainMenu.json',
            method: 'GET'

        }, fetchingData);
    
}, []);
    var orderNum = 0;
    const cartCtx = useContext(cartContext);

    const AmountChange = (name, menuType, id, value) => {
        // first check which menu will be changed
        // second check which name will be changed
        // third change the amount
        // between the change the orderNum will be changed
        orderNum = orderNum + value;
        if (menuType === 'Main Menu') {
            mainMenu[id].amount += value;
            if (value > 0) {
                cartCtx.addToCart({
                    id: mainMenu[id].id,
                    name: mainMenu[id].name,
                    amount: mainMenu[id].amount,
                    price: mainMenu[id].price

                });
            } else {
                cartCtx.removeFromCart({
                    id: mainMenu[id].id,
                    name: mainMenu[id].name,
                    amount: mainMenu[id].amount,
                    price: mainMenu[id].price

                });
            }

            if (mainMenu[id].amount < 0) {
                mainMenu[id].amount = 0;
                orderNum = orderNum - 1;
            }
            setMainMenu((prev) => {
                return [mainMenu[id], ...prev];
            });
            setMainMenu(() => {
                return mainMenu.sort((a, b) => {
                    return a.id - b.id;
                });
            });
            setMainMenu((prev) => {
                return [...new Set(prev)];
            });

        } else if (menuType === 'Desert Menu') {
            desertMenu[id].amount += value;
            if (value < 0) {

                cartCtx.removeFromCart({
                    id: desertMenu[id].id,
                    name: desertMenu[id].name,
                    amount: desertMenu[id].amount,
                    price: desertMenu[id].price

                });
            } else {
                cartCtx.addToCart({
                    id: desertMenu[id].id,
                    name: desertMenu[id].name,
                    amount: desertMenu[id].amount,
                    price: desertMenu[id].price

                });
            }

            if (desertMenu[id].amount < 0) {
                desertMenu[id].amount = 0;

                orderNum = orderNum - 1;
            }
            setDessertMenu((prev) => {
                return [desertMenu[id], ...prev];
            });
            setDessertMenu(() => {
                return desertMenu.sort((a, b) => {
                    return a.id - b.id;
                });
            });
            setDessertMenu((prev) => {
                return [...new Set(prev)];

            });
        }
    };
    for (let i = 0; i < mainMenu.length; i++) {
        sum += mainMenu[i].amount;
    }
    for (let i = 0; i < desertMenu.length; i++) {
        sum += desertMenu[i].amount;

    }
    React.useContext([
        ...mainMenu,
        ...desertMenu
    ]);
    props.getOrderNum(sum);


    const whichMenuTOShow = menuSection === true ? (
        mainMenu.map((item) => {
            return ( <
                OrderFood key = {
                    item.id
                }
                menuType = {
                    'Main Menu'
                }
                AmountChange = {
                    AmountChange
                }
                amount = {
                    item.amount
                }
                id = {
                    item.id
                }
                name = {
                    item.name
                }
                description = {
                    item.description
                }
                price = {
                    item.price
                }
                component = {
                    item.component
                }
                />
            )
        })) : (desertMenu.map((item) => {
        return ( <
            OrderFood key = {
                item.id
            }
            menuType = {
                'Desert Menu'
            }
            AmountChange = {
                AmountChange
            }
            amount = {
                item.amount
            }
            id = {
                item.id
            }
            name = {
                item.name
            }
            description = {
                item.description
            }
            price = {
                item.price
            }
            component = {
                item.component
            }
            />
        )
    }))

    return (


        <
        Container >
        <
        div className = {
            style["order-section"]
        } >
        <
        div className = {
            style['menu-button']
        } >

        <
        button type = 'button'
        className = {
            style["button"]
        }
        value = 'Menu'
        onClick = {
            () => setMenuSection(true)
        } > Menu < /button> <
        button type = 'button'
        className = {
            style["button"]
        }
        value = 'Desert'
        onClick = {
            () => setMenuSection(false)
        } > Desert < /button> < /
        div > {
            whichMenuTOShow
        } < /div>  <
        /Container>

    );
}
export default OrderSection;