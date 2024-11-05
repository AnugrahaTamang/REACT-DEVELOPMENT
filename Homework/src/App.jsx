import { createContext, useState } from "react"
import One from "./Component/ContextAPI/One";

function App() {
  const [value, setvalue] = useState(0);
  export const Absorb = createContext();
    return (
    <>
     <Absorb.Provider value={value}>
      <One/>
     </Absorb.Provider>
    </>
  )
}

export default App
