import React, { Component } from 'react';

import CardNav from '../../Components/Navigation/CardNav/CardNav';
import TableHeader from '../../Components/UI/Table/TableHeader';
import AdminForm from '../../Components/PageForms/AdminForm/AdminForm';

class Admin extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='card'>
                    <CardNav />
                    <h1>Admin</h1>
                    <TableHeader />
                    <TableHeader />
                    <AdminForm />
                </div>
            </React.Fragment>
        );
    };
};

export default Admin;