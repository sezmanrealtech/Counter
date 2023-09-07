import { useState } from 'react'
import * as Icon from 'react-feather';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let plus1 = () => {
    setCount(() => count + 1);
  };
  let plus10 = () => {
    setCount(() => count + 10);
  };
  let clear = () => {
    setCount((count) => (count = 0));
  };
  let Random = () => {
    setCount(() => {
      let randomNumber = Math.floor(Math.random() * 100 + 1);
      return randomNumber;
    });
  };
  let minus10 = () => {
    setCount(() => count - 10);
  };
  let minus1 = () => {
    setCount(() => count - 1);
  };

  return (
    <>
    <section>
       <p>Current Value</p>
      <h1>{count}</h1>
      <div>
      <button onClick={plus1}><Icon.ArrowUp/></button>
      <button onClick={plus10}><Icon.ArrowUp/> <Icon.ArrowUp/></button>
      <button onClick={clear}><Icon.RotateCcw/></button>
      <button className = "Random" onClick={Random}>#</button>
      <button onClick= {minus10}><Icon.ArrowDown/> <Icon.ArrowDown/></button>
      <button onClick = {minus1}><Icon.ArrowDown/></button>
      </div>
    </section>  
    </>
  )
}

export default App
