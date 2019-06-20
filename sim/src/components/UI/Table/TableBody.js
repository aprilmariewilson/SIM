import React from 'react';
import { Link } from 'react-router-dom';


const TableBody = (props) => {
    return (

        <tr key={props.id}>
            <td>
                <Link className="square" to={props.link}>■</Link>
            </td>
            <td>{props.id}</td>
            <td>{props.sku}</td>
            <td>{props.quantity}</td>
            <td>{props.date}</td>
        </tr>
    );
};
export default TableBody;