import { useState , useCallback } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const  [lenght, setLenght] = useState(8);
  const [numberAllow ,setNumberAllow] = useState(false);
  const [charAllow,setCharAllow] = useState(false);
  const passwordGenerator = useCallback(()=>{
   let pass ="";
   let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if (numberAllow) str += "0123456789";
   if (charAllow) str += "!@#$%^&*()_+=?/|;:{}[]";
   
   for(i=1;  i<=lenght; i++){
    pass=str.charAt[maths.floor(maths.rondom() * str.length + 1 )]
   }
    setPassword(pass)
  }
    ,[lenght ,numberAllow,charAllow])

  
  return (
    <>
   <h1>hw=eel</h1>
    </>
  )
}

export default App
