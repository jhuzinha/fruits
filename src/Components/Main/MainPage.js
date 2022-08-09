import styled from "styled-components";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Contexts/DefaultContext";
import CardFruit from "../CardFruit/CardPage.js";

export default function MainPage(){
    const [info, setInfo] = useState(false)
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
      const item = { name: types.name , number: 1, image: types.photo }
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
        {
          return  <CardFruit types={types} index= {index} card = {() => AddToCard(types, bodyCart, setBodyCart)} info= {info}
        setInfo={setInfo}/> })}
      </ Container>
    );
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