
import Reactimage from "../assets/react-core-concepts.png";

const arrayForDiscription=["hiii","hello","holla"]
const getRandomIndex=(max)=>{
  return Math.floor(Math.random()*(max+1))
}

export default function Header(){
    let discription =arrayForDiscription[getRandomIndex(2)]
    return(
      <header>
        <img src={Reactimage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {discription} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      
    )
  }