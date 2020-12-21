import React from 'react';
import {Link} from 'react-router-dom'
const MainPage = () => {

return (
    <div className="App">
    <header className="App-header">
        <div className="half">
            <h1>Hello!</h1>
        </div>
        <div className="half">
            <h3 onClick={() => {window.location.href="https://davidvendel.com/cube_game"}}>Cube Game</h3>
            <h3 onClick={() => {window.location.href="https://davidvendel.com/dve_bodky"}}>Dve Bodky</h3>
            <h3 onClick={() => {window.location.href="https://davidvendel.com/task_manager"}}>Task Manager</h3>
            <h3 onClick={() => {window.location.href="http://multilingo.online"}}>Multilingo</h3>
        </div>
    </header>
    </div>
    )
}

export default MainPage