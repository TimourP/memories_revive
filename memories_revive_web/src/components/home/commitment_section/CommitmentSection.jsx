import React from 'react'
import "./style.scss"
import BigTitle from '../../main/big_title/BigTitle'
import commitment1 from "../../../assets/home/commitment1.png"
import commitment2 from "../../../assets/home/commitment2.png"

const CommitmentSection = () => {
  return (
    <section id="commitment-section">
        <div className='commitment-row'>
            <div className='commitment-column text'>
                <BigTitle title={"éthique ET Qualité,<br>notre engagement"} subtitle="Nos produits" need_divider={true} />
                <div className='text-center'>
                  <p>
                    <strong>L'éthique</strong> est au cœur de notre engagement.<br/>Nous sommes fiers de promouvoir des produits fabriqués en imprimante 3D de haute qualité avec des composants recyclables. Nous veillons également à ce que la confection de nos pièces soit réalisée en collaboration avec des artisans locaux en Belgique. 
                  </p>
                  <p>Nous croyons que c'est notre responsabilité de contribuer positivement à la communauté et de minimiser notre impact sur l'environnement.</p>
                </div>
            </div>
            <div className='commitment-column image right'>
              <img src={commitment1} />
            </div>
        </div>
        <div className='commitment-row'>
            <div className='commitment-column image'>
              <img src={commitment2} />
            </div>
            <div className='commitment-column text right'>
                <p><strong>La qualité</strong> est également un élément clé de notre engagement. Nous sommes fiers de proposer des produits uniques sur le marché et de haute qualité. </p>
                <p>Nous utilisons les meilleurs matériaux pour nos produits et nous avons mis en place un processus de contrôle qualité rigoureux pour assurer la fiabilité et la durabilité de nos produits. </p>
                <p>Nous nous engageons à fournir des produits qui répondent aux normes les plus élevées de qualité, ainsi qu'à fournir une garantie à vie.</p>
            </div>
        </div>
    </section>
  )
}

export default CommitmentSection