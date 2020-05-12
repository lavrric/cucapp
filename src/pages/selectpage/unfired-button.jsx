import React from 'react'
import './unfired-button.scss'

export default function UnfiredButton({children, ...otherProps}) {
    return (
        <button className={`unfired-button`} {...otherProps}>
            {children}
        </button>
    )
}
