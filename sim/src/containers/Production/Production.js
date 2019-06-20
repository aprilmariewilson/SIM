import React, { Component } from 'react';

import CardNav from '../../Components/Navigation/CardNav/CardNav';
import Card from '../../Components/UI/Card/Card';
import TableHeader from '../../Components/UI/Table/TableHeader';
import ProductionForm from '../../Components/PageForms/ProductionForm/ProductionForm';

class Production extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='card'>
                    <CardNav />
                    <h1>Production</h1>
                    <Card />
                    <TableHeader />
                    <ProductionForm />
                </div>
            </React.Fragment>
        );
    };
};
export default Production;