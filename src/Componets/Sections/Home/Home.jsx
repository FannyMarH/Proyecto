import Portada from "../Portada/Portada.jsx"
import ListaPeliculas from "../../Sections/ListaPeliculas/ListaPeliculas.jsx"
import { Outlet } from "react-router-dom"
import Menu from "../../Sections/Menu/Menu.jsx"
export default function Home() {
    return(
        <>
        <Menu />
        {/* portada - carrucel */}
        {/* <Portada /> */}
        {/* <ListaPeliculas /> */}
        <Outlet />
        {/* footer */}
    </>
    )
}


// portada -> carrucel / cards / galeria