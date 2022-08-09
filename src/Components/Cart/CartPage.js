import { Context } from "../../Contexts/DefaultContext";
import styled from "styled-components";
import { useContext } from "react";

export default function CartPage(){
    const { bodyCart } = useContext(Context);
    return (
        <Container>
            {
                bodyCart.map((item) => <p> {item.name}</p>)
            }
        </Container>
    )
}

const Container = styled.div`
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