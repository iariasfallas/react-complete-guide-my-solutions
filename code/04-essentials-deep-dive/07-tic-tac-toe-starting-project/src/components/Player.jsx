import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [isEdited, setIsEdited] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    
    function handleIsEdited(){
       setIsEdited((editing) => !editing)
       if(isEdited){
        onChangeName(symbol, playerName)
       }
    }
    function handleChange(event){
        setPlayerName(event.target.value)
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = "Edit"
    if(isEdited){
        editablePlayerName = <input type="text" value={playerName} onChange={handleChange} required/>
        btnCaption="Save"
    }
    return (
        <li className={isActive? 'active': undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleIsEdited}>{btnCaption}</button>
        </li>
    );
}