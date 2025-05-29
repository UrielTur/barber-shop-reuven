import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import HomePage from "./HomePage";
import HairProducts from "./HairProducts";


class App extends React.Component {

    state = {}


    render() {
        return (

            <div className="App">
                <BrowserRouter>
                    <NavLink to={"/products"}></NavLink>
                    <Routes>
                        <Route path={"/"} element={<HomePage/>}/>
                        <Route path={"/products"} element={<HairProducts/>}/>
                    </Routes>
                </BrowserRouter>

            </div>
        );
    }
}

export default App;
