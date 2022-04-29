import React, { useEffect, useState } from "react"
import "./style.css"

const Screens = () => {
    const [name, setName] = useState(null)
    // const [image, setImage] = useState(null)
    
    useEffect(() => {
        const data = fetch('http://localhost:3003/data/characters.json')
            .then(response => response.json())
            .then(setName)
            // .then((data) => data.map(({name,image}) => console.log(name, image)))
    }, [])

    const data = name?.map(({name, image}) => [name, image])
    console.log('data: ', data)
    useEffect(() => {
        console.log('name: ', name)
    }, [])
    return (
        <div>
            <header>
                <h1>Harry Potter Characters</h1>

                <div className="div">
                    <ul>
                        {
                            <li>Name:
                            <h3>Harry Potter</h3>
                            <img src="" alt="picture" />
                            </li>
                        }
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