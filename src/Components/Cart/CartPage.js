import { Context } from "../../Contexts/DefaultContext";
import styled from "styled-components";
import { useContext, useEffect } from "react";

export default function CartPage(){
    const { bodyCart , setBodyCart} = useContext(Context);

    useEffect (() => setBodyCart(JSON.parse(localStorage.getItem("cart"))), [setBodyCart])
    
    function removeProduct(name, number, image) {
        const item = {
          name,
          number,
          image
        };
        let cartItems = JSON.parse(localStorage.getItem("cart"));
        const filter = cartItems.filter(
          (items) => item.name !== items.name
        );
        const showProducts = bodyCart.filter(
            (items) => item.name !== items.name
          );

        localStorage.setItem("cart", JSON.stringify(filter));
        setBodyCart(showProducts)
    }
    if(!bodyCart) {
        return (
            <Container>
                <p> Voce nao possui produtos </p>
            </Container>
        )
    }

    return (
        <Container>
            {
                bodyCart.map((item, index) =>  {return (
                <FruitContainer key={index}> 
                    <FigureFruit/>
                      <Image src={item.image} alt={item.name} />
                    <FigureFruit/>
                    <div>
                      <NameFruit>
                        <h1>{item.name} </h1>
                      </NameFruit>
                      <Quantity item={item} setBodyCart={setBodyCart} removeProduct={removeProduct} bodyCart={bodyCart}/>
                      <p> R$ $$$,$$</p>
                    </div>
                    <Remove onClick={() => removeProduct(item.name, item.number, item.image)}>
                        <ion-icon name="trash-outline"></ion-icon>
                    </Remove>
                  </FruitContainer>
               )})
            }
            <button> Finalizar Compra </button>
            <button onClick={() => { localStorage.clear("cart"); setBodyCart([])} }> Limpar Tudo </button>
        </Container>
    )
}

function Quantity({item, setBodyCart, removeProduct, bodyCart}) {
    return (
      <Quant>
        <ion-icon
          name="remove-circle"
          onClick={() =>
            updateValue(item,setBodyCart, "minus", removeProduct, bodyCart)
          }
        ></ion-icon>
        <p> {item.number} </p>
        <ion-icon
          name="add-circle"
          onClick={() =>
            updateValue(item,setBodyCart, "plus", removeProduct, bodyCart)
          }
        ></ion-icon>
      </Quant>
    );
  }

function updateValue(item,setBodyCart, type, removeProduct, bodyCart) {
    let num;
    if (type === "minus") {  num = -1 } else { num = 1 }
    const it = {
      name: item.name,
      number: item.number + num,
    };
    if (it.number === 0) {
      removeProduct(item.name, item.number, item.image);
    } else {
      let cartItems = JSON.parse(localStorage.getItem("cart"));
      cartItems.map((item) => {
        if (item.name === it.name) {
          item.number = it.number;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(cartItems));
      const showProducts = bodyCart.map((item) => {
        if (item.name === it.name) {
          item.number = it.number;
        }
        return item;
      });
      setBodyCart(showProducts);
    }
  }

const Quant = styled.ul`
  border-radius: 0 30px 30px 0;
  padding: 5px;
  width: 100%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Remove = styled.div`
  font-size: 25px;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
  button {
    border: 1px solid green;
    height: 40px;
    background-color: #1ab01a29;
    font-size: 20px;
    border-radius: 2px;
    margin-bottom: 20px;
    :hover {
        background-color: green;
    }
  }
`
const FruitContainer = styled.div`
  width: 60%;
  height: 100%;
  background: #fafafa;
  box-shadow: -15px 12px 21px -9px rgba(0,0,0,0.32);
  -webkit-box-shadow: -15px 12px 21px -9px rgba(0,0,0,0.32);
  -moz-box-shadow: -15px 12px 21px -9px rgba(0,0,0,0.32);
  margin: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius:15px ;
  padding: 10px;
  P { 
    font-weight: bold;
    margin: 10px 0 10px 0 ;
    text-align: center;
    word-break: break-all;

  }
 
  @media(max-width: 800px) {
    width: 100%;
  }
`
const FigureFruit = styled.figure`
  position: absolute;
`
const Image = styled.img `
    position:relative;
    object-fit: cover;
    max-width: 150px;
    max-height: 150px;
    border-radius: 15px;
`


const NameFruit = styled.div`
  width: 100%;
  background-color: #cfec7da6;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border-radius: 0 7px 7px 0;
  h1{ 
    margin-left: 10px;
    word-break: break-all;
    font-size: 20px;
    text-align: center;
    margin-bottom: 15px;
    font-weight: bold;
  }
`

