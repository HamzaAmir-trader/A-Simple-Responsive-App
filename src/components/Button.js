import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
    children,
    type,
    onClick,
    buttonSize,
    buttonStyle
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <>
            <Link to="/sign-up" className="btn-mobile">
                <button type={type} onClick={onClick} className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
                    {children}
                </button>
            </Link>
        </>
    )
}

export default Button;
