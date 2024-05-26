import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

export default function AddExpenseCategory() {
    const { register, handleSubmit } = useForm();
    const submitHandler = async (data) => {
        console.log(data);
        const res = await axios.post("http://localhost:3003/userAddExpense/addExpensecategory", data)
        console.log(res.data);
    }
    return (
        <div>
            <h1>Add Expense Category</h1>
            <div>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div>
                        <label htmlFor="category">Category</label>
                        <br />
                        <input type="text" {...register("name")} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="status">Status</label>
                        <br />
                        True : <input type="radio" name="status" id="status" value="true" {...register("status")} />
                        False : <input type="radio" name="status" id="status" value="false" {...register("status")} />
                    </div>
                    <br />
                    <div>
                        <input type='submit' value="AddExpenseCategory" />
                    </div>
                </form>
            </div>
        </div>
    )
}
