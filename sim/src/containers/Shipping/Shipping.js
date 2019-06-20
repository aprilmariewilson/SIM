import React, {Component} from 'react';
import CardNav from '../../Components/Navigation/CardNav/CardNav';
import Card from '../../Components/UI/Card/Card';
import TableHeader from '../../Components/UI/Table/TableHeader';

class Shipping extends Component{
    render(){
        return(
            <React.Fragment>
            <div className='card'>
            <CardNav />
            <h1>Shipping</h1>
            <Card />
            <TableHeader />
            </div>
            </React.Fragment>
        );
    };
};

export default Shipping;