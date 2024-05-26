import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function FetchExpenses() {
    const [categories, setcategories] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    useEffect(() => {
        getCategories();
    }, []);
    const getCategories = async () => {
        setisLoading(true);
        const category = await axios.get(`http://localhost:3003/userAddExpense/userExpense/${localStorage.getItem("userId")}`);
        setcategories(category.data.data);
        setisLoading(false);
    }
    console.log("categories :", categories);
    return (
        <div>
            {
                isLoading && (
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>

                )
            }
            <h1>Expenses LIST</h1>
            <table className='table table-hover table-striped table-dark'>
                <thead>
                    <tr>
                        <th scope='col'>Category</th>
                        <th scope='col'>Sub-Category</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'>Payment Method</th>
                        <th scope='col'>Describe</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        categories?.map((category) => {
                            return (
                                <tr>
                                    <td>{category.cat.name}</td>
                                    <td>{category.subcat.name}</td>
                                    <td>{category.amount}</td>
                                    <td>{category.paymentMethod}</td>
                                    <td>{category.describe}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
