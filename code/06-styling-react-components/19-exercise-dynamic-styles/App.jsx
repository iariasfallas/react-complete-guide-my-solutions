import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [styleP, setStyleP] = React.useState("white")
    
    function OnPress(color){
        if(color === "white")
         setStyleP("red")
         else if(color === "red") {
             setStyleP("white")
         }
    }
    return (
        <div>
            <p style= {{
                color: styleP
            }} >Style me!</p>
            <button onClick={()=>OnPress(styleP)}>Toggle style</button>
        </div>
    );
}
