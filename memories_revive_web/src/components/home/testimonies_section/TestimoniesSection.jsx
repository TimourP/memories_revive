import React, { useEffect, useRef, useState } from 'react'
import BigTitle from '../../main/big_title/BigTitle'
import "./style.scss"
import porsche911 from "../../../assets/home/porsche911.png"
import quote from "../../../assets/home/quote.svg"

const testimonies = [
    {
        author: "Julien D.",
        product: "Porsche 911 Turbo",
        testimony: "Je suis absolument ravi de mon nouveau cadre ! La finition est exceptionnelle et il est évident que chaque détail a été soigneusement pensé. De plus, la livraison a été rapide et soignée, avec un emballage de protection de qualité supérieure pour assurer que mon cadre arrive en parfait état. Je recommande vivement cette entreprise à tous ceux qui recherchent un produit de qualité et un excellent service client",
        picture: porsche911,
    },
    {
        author: "Bob H.",
        product: "Porsche 911 Turbo",
        testimony: "Je suis absolument ravi de mon nouveau cadre ! La finition est exceptionnelle et il est évident que chaque détail a été soigneusement pensé. De plus, la livraison a été rapide et soignée, avec un emballage de protection de qualité supérieure pour assurer que mon cadre arrive en parfait état. Je recommande vivement cette entreprise à tous ceux qui recherchent un produit de qualité et un excellent service client",
        picture: porsche911,
    },
]

const TestimoniesSection = () => {

    const [selected, setSelected] = useState(0);
    const testimony = testimonies[selected];
    const switching = useRef(false);

    const change_testimony = async (id) => {
        let next_id = id;
        if (id == undefined) {
            next_id = 0;
            const content = document.getElementById("testimony-content");
            if (content) {
                let html_id = content.getAttribute("testimony-id");
                if (html_id != null) {
                    next_id = parseInt(html_id) + 1;
                    if (next_id >= testimonies.length)
                        next_id = 0;
                }
            }
        }
        if (switching.current)
            return;
        switching.current = true;
        let content = document.getElementById("testimony-content");
        if (content)
            content.classList.add("loading");
        await new Promise(r => setTimeout(r, 600));
        setSelected(next_id);
        content = document.getElementById("testimony-content");
        if (content)
            content.classList.remove("loading");
        switching.current = false;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            change_testimony();
        }, 10000);
        
        return () => {
            clearInterval(interval);
        }
    }, [])
    
    
    return (
        <section id="testimonies-section">
            <BigTitle title={"Vos retours<br>nous sont précieux"} subtitle={"Témoignages"} />
            <div className='testimony-container'>
                <div testimony-id={selected} id="testimony-content" className='testimony-content'>
                    <div className='image-container'>
                        <img className='product-image' src={testimony.picture} />
                        <img className='quote' src={quote} />
                    </div>
                    <div className='text-container'>
                        <div className="testimony-header">
                            <span className='author'>{testimony.author}</span>
                            <span className='divider'></span>
                            <span className='product'>{testimony.product}</span>
                        </div>
                        <p>{testimony.testimony}</p>
                    </div>
                </div>
            </div>
            <div className='selector'>
                {
                    testimonies.map((elem, id) => (
                        <span className={`testimony-selector ${id == selected ? "selected" : ""}`} key={id} onClick={() => change_testimony(id)}></span>
                    ))
                }
            </div>
        </section>
    )
}

export default TestimoniesSection