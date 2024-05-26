import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/userRegister">User Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/userLogin">User Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/userExpense">User Expenses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addExpenseCategory">Expense Category</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addExpenseSubCategory">Expense Sub-Category</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/fetchExpenses">Fetch Expenses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/popupBox">PopUp Box</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pieChart">Pie Chart</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pieChart1">Pie Chart S</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
Navbar.propType = { title: PropTypes.string }

Navbar.defaultProps = {
    title: "set title here"
}