import styled from "styled-components";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Contexts/DefaultContext";

export default function MainPage(){
    const [fruits, setFruits] = useState([]);
    const [busca, setBusca] = useState('');
    const { bodyCart, setBodyCart } = useContext(Context);

    const toLowerCase = busca.toLowerCase()

    const FilterFruits = fruits.filter((fruit) => (fruit.name.toLowerCase()).includes(toLowerCase))

    const listFruit = async () => {
        const URL = window.location.href
        await axios.get(`${URL}api/fruits.json`)
              .then(response => {
                setFruits(response.data);
              })
        }

    useEffect(() => {listFruit()}, [])
    
    function AddToCard(types) {
      const item = { name: types.name , number: 1 }
      let cartItems = JSON.parse(localStorage.getItem("cart"));
      if (!cartItems) {
        localStorage.setItem("cart", JSON.stringify([item]));
        setBodyCart(JSON.parse(localStorage.getItem("cart")))
        return
      } 
      if (cartItems.some((item) => item.name === types.name)) {
        cartItems.map((item) => {
          if (item.name === types.name) {
            item.number = item.number + 1;
          }
          return item;
        });
      }else {
        cartItems.push(item);
      } 
      localStorage.setItem("cart", JSON.stringify(cartItems));
      setBodyCart(JSON.parse(localStorage.getItem("cart")))
    }
    
    if (!fruits) {
      return (
        <Container>
          <p> Nada encontrado </p> 
        </Container>
      );
    }

    return (
      <Container>
        <Search>
          <input placeholder="Pesquise" type="text"  required onChange={(e) => setBusca(e.target.value)} />
        </Search>
        {FilterFruits.map((types, index) => 
        {return  <CardFruit types={types} index= {index} card = {() => AddToCard(types, bodyCart, setBodyCart)}/> })}
      </ Container>
    );
}

function CardFruit({ types, index, card }) {
    return (
      <FruitContainer key={index}> 
        <FigureFruit/>
          <Image src={types.photo} alt={types.name} />
        <FigureFruit/>
        <div>
          <NameFruit>
            <h1>{types.name} </h1>
          </NameFruit>
          <Button onClick={() => '' }> Ver informaçoes </Button>
          <Button onClick={() => card(types)}> Comprar </Button>
          <p> R$ $$$,$$</p>
        </div>
      </FruitContainer>
    )
}


function VerInfos({ type }){
  return(
    <InfoContainer> 
      <div> 
        <figure> 
          <img src={type.photo} alt="" />
        </figure>
      </div>
    </InfoContainer> 
  )
}











const Search = styled.form`
  width: 100%;
  height: 40px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 80%;
    max-width: 1020px;
    border: 1px solid green;
    padding: 5px;
    margin-left: 15px;
    border-radius: 2px;
  }
`
const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;

`
const Container = styled.div ` 
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
`

const FruitContainer = styled.div`
  width: 40%;
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

const Button = styled.button`
  border: none;
  width: 100%;
  height: 100%;
  text-align: center;
  text-decoration: none;
  background-color: #4CAF50;
  border-radius:  5px;
  padding: 5px;
  margin: 5px;
  font-size: 15px;
  :hover{
    background-color: green;
  }
`

const NameFruit = styled.div`
  width: 100%;
  background-color: #cfec7da6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
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