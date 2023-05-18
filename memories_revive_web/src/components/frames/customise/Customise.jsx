
import React, { useContext, useState } from 'react'
import Render from '../render/Render'
import "./style.scss"
import CircularSelector from '../circular_selector/CircularSelector'
import CustomisationContext from '../../../contexts/CustomisationContext'
import { frame_selector, models, style_selector } from '../../../constants/frame'

import delivery from "../../../assets/home/delivery-icon.svg"
import diamond from "../../../assets/home/diamond-icon.svg"
import guarantee from "../../../assets/home/guarantee-icon.svg"
import bag from "../../../assets/main/bag.svg"

import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../../store/dispatcher'
import PopupContext from '../../../contexts/PopupContext'

const Customise = ({addToBasket, fetchBasket}) => {
    const {frame, set_frame} = useContext(CustomisationContext);
    const [loading, setLoading] = useState(false);
    const { setJustAdd } = useContext(PopupContext);

    const add_to_basket = async (product) => {
        if (loading) {
          return
        }
        setLoading(true)
        addToBasket({id: product.id, amount: 1}).then(e => {
          setJustAdd({
            picture: product.image,
            amount: 1,
            title: product.title,
          })
          fetchBasket().then(e => {
            setLoading(false)
          })
        })
    }

    return (
        <section id="customise-frame">
            <div className='render-container'>
                <h1>Créer votre cadre</h1>
                <p>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                <div className='renders'>
                    <Render/>
                </div>
            </div>
            <div className='action-container'>
                <h2>Personnaliser</h2>
                <CircularSelector title={"Style"} subtitle={"Fond du cadre"} list={style_selector} select={(id) => set_frame({style: id})} selected_id={frame.style} />
                <CircularSelector title={"Matière"} subtitle={"Cadre"} list={frame_selector} select={(id) => set_frame({frame: id})} selected_id={frame.frame} />
                <div className='attributes-container'>
                    <div className='attribute-elem'>
                        <span className='select-title'>Modèle</span>
                        <div className='select-container'>
                            <select onChange={e => set_frame({model: parseInt(e.target.value)})}>
                                {
                                    models.map((value, id) => (
                                        <option selected={value.key == id} key={id} value={id}>{value.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className='big-image-container'>
                    <img src={models[frame.model].image} />
                </div>
                <div className='price-container'>
                    <span className="price">{models[frame.model].price + frame_selector[frame.frame].price}€</span>
                    <span>TVAC</span>
                </div>
                <div className="legal-container">
                    <div className="legal-row">
                        <img src={delivery} />
                        <span>Livraison gratuite</span>
                    </div>
                    <div className="legal-row">
                        <img src={guarantee} />
                        <span>Garantie à vie</span>
                    </div>
                    <div className="legal-row">
                        <img src={diamond} />
                        <span>Droit de rétractation de 14 jours</span>
                    </div>
                </div>
                <div onClick={() => add_to_basket({image: "", title: "", id: 12})} className={`primary add-basket-btn ${loading ? "loading" : ""}`}>
                    <img src={bag} />
                    <span>Ajouter au panier</span>
                </div>
            </div>
        </section>
    )
}

export default connect(null, mapDispatchToProps)(Customise)