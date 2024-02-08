import Contenido from "./components/Contenido"
import ItemListContainer from "./components/ItemListContainer"
import Header from "./components/header"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App=()=> {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path={"/"} element={<ItemListContainer/>}/>
          <Route path={"/categoria/:categoria"} element={<ItemListContainer/>}/>
          <Route path={"/contenido"} element={<Contenido/>}/>
      </Routes>
    </BrowserRouter>

    
  )
}

export default App
