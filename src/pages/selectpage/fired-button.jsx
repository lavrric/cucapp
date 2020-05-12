import React from 'react'
import './fired-button.scss'

export default function FiredButton({ children, ...otherProps }) {
    return (
        <button className={`fired-button`} {...otherProps}>
            {children}
        </button>
    )
}
