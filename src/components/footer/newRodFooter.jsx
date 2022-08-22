import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer.css';
import { Routings } from '../../Routes/routes';

export default function Footer({ onClick }) {
    return (
        <footer className='footer'>
            <div className='footerButton'>
                <Link to={Routings.INDEX} onClick={onClick}>Save</Link>
            </div>
            <div className='footerButton'>
                <Link to={Routings.INDEX}>Cancel</Link>
            </div>
        </footer>
    );
}