import estilos from "../NavBarEstilos.module.css"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav>
            <h2 className={estilos.titulo}>Jorkhal</h2>
            <div>
                <button>Remeras</button>
                <button>Pantalones</button>
                <button>Camperas</button>
                <button>Buzos</button>
                <button>Zapatillas</button>
            </div>
            <CartWidget/>

        </nav>
    )
}


export default NavBar;