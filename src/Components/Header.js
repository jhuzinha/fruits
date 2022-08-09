import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../Contexts/DefaultContext";

export default function Header() {
    const [cart, setCart] = useState(true)
    const { bodyCart } = useContext(Context);

    return (
        <Container>
            <Info>
                <Link to = "/" onClick={() => setCart(true) }> <h1>FRUITS</h1> </Link>
                {cart? 
                <Link to = "/cart" onClick={() => setCart(false)}> 
                 {bodyCart.length === 0?  <></>: <p>{bodyCart.length}</p>}<ion-icon name="cart-outline"></ion-icon></Link>
                :
                <Link to = "/" onClick={() => setCart(true)}> <ion-icon name="return-down-back"></ion-icon> </Link>
                }
            </Info>
        </Container>
    )

}

const Container = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    background-color: #7bbb7b;
    z-index:  1;
    padding: 25px;
    -webkit-box-shadow: -11px 17px 21px -8px rgba(109, 109, 109, 1);
    -moz-box-shadow: -11px 17px 21px -8px rgba(109, 109, 109, 1);
    box-shadow: -11px 17px 21px -8px rgba(109, 109, 109, 1);
    display: flex;
    justify-content: center;
`

const Info = styled.div`
    width: 85%;
    font-weight: bold;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1:hover {
        color: lightcyan;
    }
    ion-icon:hover{
        color: lightcyan;
    }
    p {
        color: white;
        font-size: 15px;
    }
`