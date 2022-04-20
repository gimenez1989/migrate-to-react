import React from "react"
import "./style.css"

const Screens = () => {
    const data = fetch('http://hp-api.herokuapp.com/api/characters')
        .then(response => response.json())
        .then((data) => data.map(({name,image}) => console.log(name, image)))
    return (
        <div>
            <header>
                <h1>Harry Potter Characters</h1>

                <div className="div">
                    <ul>
                        <li>Name:
                            <h3>Harry Potter</h3>
                            <img src="" alt="picture" />
                        </li>
                        
                        <li>Name:
                            <h3>Hermione Granger</h3>
                            <img src="" alt="picture" />
                        </li>
                    </ul>
                </div>
            </header>

            <section>
                <div className="div-2">
                    <h2>Details Abaut Harry Potter Characters</h2>

                    <article>
                        <p>Specie</p>

                        <h3>Human</h3>
                    </article>

                    <article id="border">
                        <p>Gender</p>

                        <h3>Male</h3>
                    </article>

                    <article>
                        <h3>Wand details</h3>

                        <p>Wood</p>
                    </article>

                    <article>
                        <h3>Holly</h3>

                        <p>Core:</p>
                    </article>

                    <article>
                        <h3>Phoenix feather</h3>

                        <p>Length</p>

                        <h3>11</h3>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Screens