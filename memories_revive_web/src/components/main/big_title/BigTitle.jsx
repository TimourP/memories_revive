import React from 'react'
import "./style.scss"

const BigTitle = ({title, subtitle, need_divider}) => {
  return (
    <div className='big-title'>
        <span className='subtitle'>{subtitle}</span>
        <h2 dangerouslySetInnerHTML={{__html: title}}></h2>
        {
            need_divider ? <span className='divider'></span> : null
        }
    </div>
  )
}

export default BigTitle