import React, { Component } from 'react';
import {connect} from 'react-redux';

import TableHeader from '../../Components/UI/Table/TableHeader';
import ReceivingForm from '../../Components/PageForms/ReceivingForm/ReceivingForm'
import CardNav from '../../Components/Navigation/CardNav/CardNav';
import { initSaveMaterial } from '../../actions/material';

class Inventory extends Component {
    onSubmit = (material) => {
        this.props.startReceiving(material);
    };
    render() {
        return (
            <React.Fragment>
                <div className='card'>
                    <CardNav />
                    <h1>Inventory</h1>
                    <TableHeader />
                    <TableHeader />
                    <ReceivingForm
                        onSubmit={this.onSubmit} />
                </div>
            </React.Fragment>
        );
    };
};
const mapDispatchToProps = (dispatch) => ({
    startReceiving: (material) => dispatch(initSaveMaterial(material))
});
export default connect(null, mapDispatchToProps)(Inventory);