import {useState} from 'react'

function App() {
    const [colorH1, setColorH1] = useState("white")
  
    function OnPress(buttonName){
      
        if(buttonName == 'Yes'){
            setColorH1("green")
        }
        else if(buttonName == 'No'){
            setColorH1("red")
        }
    }
    
    return (
    <div id="app">
      <h1 style={{
          color: colorH1
      }}>CSS is great</h1>
      <menu>
        <li>
          <button onClick={()=>OnPress("Yes")}>Yes</button>
        </li>
        <li>
          <button onClick={()=>OnPress("No")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
