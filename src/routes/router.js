import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/navbar/navbar"
import { Home } from "../pages/home"


export const Router = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}