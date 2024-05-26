import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function AddExpenseSubcategory() {
    const { register, handleSubmit } = useForm();
    const [categories, setcategories] = useState([]);  
    const [selectedCategory, SetselectedCategory] = useState(null);
 
    const submitHandler = async (data) => {
        console.log(data);
        const dataObj = {
            category:selectedCategory,
            name:data.name,
            status : data.status
        }
        const res = await axios.post("http://localhost:3003/userAddExpense/addExpenseSubcategory", dataObj)
        console.log(res.data);
    }
    useEffect(() => {
        getCategories();
    }, [])
    const getCategories = async () => {
        const categories = await axios.get("http://localhost:3003/userAddExpense/expenseCategory");
        setcategories(categories.data.data);
        console.log(categories.data.data);
    }
    const categoryHandler = (item) => {
        console.log("selected");
        SetselectedCategory(item);
    };
    console.log(selectedCategory);
    return (
        <div>
            <h1>Add Expense Sub-Category</h1>
            <div>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div>
                        <DropdownButton title="Select an item" onSelect={categoryHandler}>
                            {
                                categories?.map((category) => {
                                    return (
                                        <Dropdown.Item eventKey={category._id}>{category.name}</Dropdown.Item>
                                    )
                                })
                            }
                        </DropdownButton>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="category">Sub-Category</label>
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
                        <input type='submit' value="AddExpenseSubCategory" />
                    </div>
                </form>
            </div>
        </div>
    )
}
