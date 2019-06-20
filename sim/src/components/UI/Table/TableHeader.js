import React from 'react';
import TableBody from './TableBody';
import './Table.css';

const TableHeader = (props) => {
    return (
        <div className="panel panel-default">
            <div className="panel heading text-center"><h3>{props.title}</h3></div>
            <div className="panel-body">
                <table className="table table-hover" id='Table'>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Job Number</th>
                            <th scope="col">Part SKU</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableBody />
                    </tbody>
                </table>

            </div>
        </div>

    );
};
export default TableHeader