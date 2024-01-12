import ItemListContainer from "./components/ItemListContainer"
import Header from "./components/header"

const App=()=> {
  return (
    <div>
      <Header/>
      <ItemListContainer greeting={"Pedido realizado"}/>
    </div>
    
  )
}

export default App
