import React from 'react';
import Table from '../table/table';
import ButtonTabBar from '../buttonTabBar/buttonTabBar';
import Footer from '../footer/footer';

export default function MainPage() {
    return (
        <div>
            <h3 className='d-flex justify-content-left'>Main Page</h3>
            <ButtonTabBar />
            <p className="Table-header">Wide range of available products</p>
            <Table />
            <Footer />
        </div>
    );
}