import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footerButton'>
                <Link to='/newRod'>Save</Link>
            </div>
            <div className='footerButton'>
                <Link to='/'>Cancel</Link>
            </div>
        </footer>
    );
}