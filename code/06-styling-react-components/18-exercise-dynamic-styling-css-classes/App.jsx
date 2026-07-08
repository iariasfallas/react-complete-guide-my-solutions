import UseState from 'react'

function App() {
  const [classH1, setClassH1] = useState("")
  
  function OnPress(buttonName){
      
        if(buttonName == 'Yes'){
            setClassH1("highlight-green")
        }
        else if(buttonName == 'No'){
            setClassH1("highlight-red")
        }
    }
  return (
    <div id="app">
      <h1 className={classH1}>CSS is great!</h1>
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
