import React, { useRef, useState } from 'react'
import "./style.scss"

const CircularSelector = ({title, subtitle, list, selected_id, select}) => {

    const [selected, setSelected] = useState({
        anchor: null,
        title: ""
    })
    const last_left = useRef(0);

    const left = selected.anchor != null ? selected.anchor.getBoundingClientRect().left - selected.anchor.parentNode.parentNode.getBoundingClientRect().left + 8 : 0;

    const target_elem = (elem, title) => {
        last_left.current = elem.getBoundingClientRect().left - elem.parentNode.parentNode.getBoundingClientRect().left + 8;
        setSelected({anchor: elem, title: title});
    }

    return (
        <div className='circular-selector'>
            <span className='subtitle'>{subtitle}</span>
            <div className='selector-container'>
                <div style={{left: selected.anchor == null ? `${last_left.current}px` : `${left}px` }} className={`show-selected ${selected.anchor == null ? "hidden" : ""}`}>
                    <span>{selected.title}</span>
                </div>
                <span className='title'>{title}</span>
                <div className='selector'>
                    {
                        list.map((elem, id) => {
                            if (elem.color)
                                return <span onMouseEnter={(e) => target_elem(e.target, elem.title)} onMouseLeave={() => setSelected({...selected, anchor: null})} onClick={() => select(id)} style={{backgroundColor: elem.color}} className={`selection ${selected_id == id ? "selected" : ""}`} key={id}></span>
                            return <img src={elem.image} onMouseEnter={(e) => target_elem(e.target, elem.title)} onMouseLeave={() => setSelected({...selected, anchor: null})} onClick={() => select(id)} className={`selection ${selected_id == id ? "selected" : ""}`} key={id}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CircularSelector