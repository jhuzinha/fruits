import styled from "styled-components"

export default function CardFruit({ types, index, card, info, setInfo}) {
    if (info) {
      return (
        <FruitContainer key={index}> 
          <FigureFruit/>
            <Image src={types.photo} alt={types.name} />
          <FigureFruit/>
          <div>
            <NameFruit>
              <h1>{types.name} </h1>
            </NameFruit>
            <p> R$ $$$,$$</p>
            <p> Calorias: {types.calories}</p>
            <p> Proteinas: {types.protein}</p>
            <p> Carboidratos: {types.carbohydrates}</p>
            <p> Fibras: {types.fiber}</p>
            <p> blubber: {types.blubber}</p>
            <p> Porção: {types.portion}</p>   
            <Button onClick={() => card(types)}> Comprar </Button>
            <Button onClick={() => setInfo(false) }> Voltar </Button>
          </div>
        </FruitContainer> 
      )
    }  
    
    return (
        <FruitContainer key={index}> 
          <FigureFruit/>
            <Image src={types.photo} alt={types.name} />
          <FigureFruit/>
          <div>
            <NameFruit>
              <h1>{types.name} </h1>
            </NameFruit>
            <p> R$ $$$,$$</p>
            
            <Button onClick={() => card(types)}> Comprar </Button>
            <Button onClick={() => setInfo(true) }> Ver informaçoes </Button>
          </div>
        </FruitContainer>
      )
  }
  


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