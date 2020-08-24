import React from 'react'

export default function ParagraphRapidFire({paragraph1 ,paragraph2}) {
    return (
        <div className="text-muted mt-4 mb-3 paragraph__rapid__fire__content">
            <h6>Q: {paragraph1}</h6>
            <h6>A: {paragraph2}</h6>
        </div>
    )
}
