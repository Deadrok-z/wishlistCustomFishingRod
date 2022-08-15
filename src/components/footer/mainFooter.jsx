import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer.css';
import { Routings } from '../../Routes/routes'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footerButton'>
                <Link to={Routings.NEWROD_PAGE}>To New Fishing Rod</Link>
            </div>
        </footer>
    );
}