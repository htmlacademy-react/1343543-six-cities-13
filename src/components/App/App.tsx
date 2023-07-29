import Main from "../../pages/main/Main";

type AppQunatityProps = {
  quantity: number;
}

function App({quantity}: AppQunatityProps): JSX.Element {
  return (
    <Main quantity={quantity}/>
  )
}

export default App;