import React, {useState} from 'react'
import './index.styles.scss'


export default function PromoCode() {
    const [hasPromoCode , setHasPromoCode] = useState(true);

    return (
        <div className="mb-2 code__promos__container">
            {
                hasPromoCode 
                ?
                <input type="button" className="promo__code__btn__style" onClick={() => setHasPromoCode(false)} value="Promo code?"/>
                :
                <div className="position-relative">
                    <input type="text" className="promo__code__textInput__style" autoFocus/>
                      <span className="apply__promo__code">Apply</span>
                      <span className="cancel__promo__code text-muted" onClick={() => setHasPromoCode(true)}>Cancel</span>
                </div>
            }
        </div>
    )
}
