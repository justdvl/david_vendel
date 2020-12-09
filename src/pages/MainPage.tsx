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
            <Link to="/cube_game"><h3>Cube Game</h3></Link>
            <Link to="/dve_bodky"><h3>Dve Bodky</h3></Link>
            <Link to="/task_manager"><h3>Task Manager</h3></Link>
            <Link to="/multilingo"><h3>Multilingo</h3></Link>
        </div>
    </header>
    </div>
    )
}

export default MainPage