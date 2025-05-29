import { useState, useCallback,useEffect} from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [lenght, setLenght] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*()_+=?/|;:{}[]"
    for ( let i = 1; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)}
    setPassword(pass)
  }, [lenght, numberAllow, charAllow])

  const copyPassword = useCallback(()=>{
  window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
  passwordGenerator()
  },
  [lenght, numberAllow, charAllow])

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md
rounded-lg px-4 py-3 my-8 Obg-gray-800
text-black bg-amber-50 "
      >
        <h1 className="text-center  text-black "> Password Generator</h1>

        <div
          className="flex shadow rounded-lg
overflow-hidden mb-2 mt-2"
        >
          <input
            className="bg-white w-full py=1 px=3"
            type="text"
            value={password}
            placeholder=" Password"
            readOnly
          />
          <button className="bg-blue-500 w-15" 
          onClick={copyPassword}
          type="button">
          <label className=" text-center">copy</label>
          </button>
        </div>
        <div className="flex gap-3 items-center">
        <div className="flex gap-1">
          <input
            className="cursor-pointer"
            type="range"
            onChange={(e) => setLenght(e.target.value)}
            min={8}
            max={16}
            value={lenght}/>
          <label>Lenght : {lenght}</label></div>

          <div className="flex gap-1">
          <input type="checkbox" 
          defaultChecked={numberAllow} 
          onChange={()=>{setNumberAllow((prev)=>!prev)}}
          />Number</div>

          <div className="flex gap-1">
          <input type="checkbox" 
          defaultChecked={charAllow} 
          onChange={()=>{setCharAllow((prev)=>!prev)}}
          />Character</div>
          </div>
      </div>
    </>
  );
}

export default App;
