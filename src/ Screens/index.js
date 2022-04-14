import React from "react"
import "./style.css"

const Screens = () => {
    return (
        <div>
            <header>
                <h1>Harry Potter Characters</h1>

                <div class="div">
                    <ul>
                        <li>Name</li>
                        <h3>Harry Potter</h3>

                        <img src="" alt="picture" />

                        <li>Name</li>

                        <h3>Hermione Granger</h3>

                        <img src="" alt="picture" />
                    </ul>
                </div>
            </header>

            <section>
                <div class="div-2">
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