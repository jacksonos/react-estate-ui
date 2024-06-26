import SearchBar from "../../components/searchBar/SearchBar"
import "./homePage.scss"

function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Encuentre bienes raíces y obtenga el lugar de sus sueños</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in est odio, veniam debitis impedit, tempore officiis quis ullam molestias, harum amet hic eaque ex repellendus fuga nesciunt sunt illo!
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>10+</h1>
                            <h2>Años de experiencia</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Premios obtenidos</h2>
                        </div>
                        <div className="box">
                            <h1>1700+</h1>
                            <h2>Propiedades listas</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage