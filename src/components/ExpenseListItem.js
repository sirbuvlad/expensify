import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';



const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    return (
    <div>
    <h3><Link to={`/edit/${id}`} >{description}</Link></h3>
    <p>{amount} - {moment(createdAt).format('MMM Do, YYYY')}</p>
    </div>
)};

export default ExpenseListItem;
