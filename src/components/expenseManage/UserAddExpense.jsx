import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useForm } from 'react-hook-form'

export default function UserAddExpense() {
    const { register, handleSubmit } = useForm();
    const [categories, setcategories] = useState([]);
    const [subCategories, setsubCategories] = useState([]);
    const [selectedCategory, SetselectedCategory] = useState("65ad214e7f39b3031f91827d");
    const [selectedSubCategory, SetselectedSubCategory] = useState(null);
    const [isLoading, setisLoading] = useState(false)

    const categoryHandler = (item) => {
        console.log("selected");
        SetselectedCategory(item);
        getSubCategories();
    };
    // console.log(selectedCategory);
    const subCategoryHandler = (item) => {
        console.log("selected");
        SetselectedSubCategory(item);

    };
    // console.log(selectedSubCategory);

    // console.log(selectedItem);
    useEffect(() => {
        getCategories();
        // getSubCategories();
    }, []);
    const getCategories = async () => {
        const categories = await axios.get("http://localhost:3003/userAddExpense/expenseCategory");
        setcategories(categories.data.data);
        console.log(categories.data.data);
    }
    const getSubCategories = async () => {
        console.log(selectedCategory);
        const subCategories = await axios.get(`http://localhost:3003/userAddExpense/expenseSubCategory/${selectedCategory}`);
        setsubCategories(subCategories.data.data);
        console.log(subCategories.data.data);
    }
    const submitHandler = async (data) => {
        console.log(data);
        const dataObj = {
            id: localStorage.getItem("userId"),
            cat: selectedCategory,
            subcat: selectedSubCategory,
            amount: data.amount,
            paymentMethod: data.paymentMethod,
            describe: data.describe
        }
        console.log("obj : ", dataObj);
        setisLoading(true);
        const res = await axios.post("http://localhost:3003/userAddExpense/userExpense", dataObj)
        setisLoading(false);
        console.log("hello");
        console.log("hi : ", res.data);
    }
    return (
        <div>
            {
                isLoading && (
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                )
            }
            <h1>Add User Expense</h1>
            <div>
                <form onSubmit={handleSubmit(submitHandler)}>
                    {/* <div>
                        <label htmlFor="category">Category</label>
                        <br />
                        <input type="text" {...register("cat")} />
                    </div> */}
                    <div>
                        <DropdownButton title="Select an item" onSelect={categoryHandler}>
                            {
                                categories?.map((category) => {
                                    return (
                                        <Dropdown.Item eventKey={category._id} >{category.name}</Dropdown.Item>
                                    )
                                })
                            }
                        </DropdownButton>
                    </div>
                    <br />
                    {/* <div>
                        <label htmlFor="subCategory">Sub Category</label>
                        <br />
                        <input type="text" {...register("subcat")} />
                    </div> */}
                    <div>
                        <DropdownButton title="Select an item" onSelect={subCategoryHandler}>
                            {
                                subCategories?.map((subCategory) => {
                                    return (
                                        <Dropdown.Item eventKey={subCategory._id} >{subCategory.name}</Dropdown.Item>
                                    )
                                })
                            }
                        </DropdownButton>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="amount">Amount</label>
                        <br />
                        <input type='number' {...register("amount")} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="paymentMethod">Payment Method</label>
                        <br />
                        <input type="text" {...register("paymentMethod")} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="describe">Describe</label>
                        <br />
                        <textarea name="" id="" cols="30" rows="5" {...register("describe")}></textarea>
                    </div>
                    <br />
                    <div>
                        <input type='submit' value="AddExpense" />
                    </div>
                </form>
            </div>
        </div>
    )
}
