import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footerButton'>
                <Link to='/newRod'>To New Fishing Rod</Link>
            </div>
        </footer>
    );
}