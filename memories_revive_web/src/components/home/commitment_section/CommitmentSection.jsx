import React from 'react'
import "./style.scss"
import BigTitle from '../../main/big_title/BigTitle'

const CommitmentSection = () => {
  return (
    <section id="commitment-section">
        <div className='commitment-row'>
            <div className='commitment-column text'>
                <BigTitle title={"éthique ET Qualité,<br>notre engagement"} description="Nos produits" need_divider={true} />
            </div>
            <div className='commitment-column image'>

            </div>
        </div>
    </section>
  )
}

export default CommitmentSection