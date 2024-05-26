import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function UserAddExpense() {
    const { register, handleSubmit } = useForm();
    const [categories, setcategories] = useState([]);
    const [subCategories, setsubCategories] = useState([]);
    const [selectedCategory, setselectedCategory] = useState("65ad214e7f39b3031f91827d");
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        getCategories();
        // getSubCategories();
    }, []);
    const getCategories = async () => {
        const categories = await axios.get("http://localhost:3003/userAddExpense/expenseCategory");
        setcategories(categories.data.data);
        // console.log("set cat : ",categories.data.data);
    }
    const getSubCategories = async () => {
        // console.log("getsubcat : ",selectedCategory);
        const subCategories = await axios.get(`http://localhost:3003/userAddExpense/expenseSubCategory/${selectedCategory}`);
        setsubCategories(subCategories.data.data);
        // console.log(subCategories.data.data);
    }
    const submitHandler = async (data) => {
        console.log("data : ",data);
        const dataObj = {
            name: localStorage.getItem("userId"),
            cat: selectedCategory,
            subcat: data.subcat,
            amount: data.amount,
            paymentMethod: data.paymentMethod,
            describe: data.describe
        }
        console.log("obj : ", dataObj);
        setisLoading(true);
        const res = await axios.post("http://localhost:3003/userAddExpense/userExpense", dataObj)
        setisLoading(false);
        // console.log("hello");
        console.log("hi : ", res.data);
    }
    const handleChange =(event) =>{
        // console.log("event : ",event.target.value);
        setselectedCategory(event.target.value);
        // console.log("sel cat : ",selectedCategory);
    };
    
    getSubCategories();
    // console.log("selected cat : ",selectedCategory);
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
                    <div>
                        <select name="" id=""onChange={handleChange}>
                            <option value="" selected>select</option>
                            {
                                categories?.map((cat) => {
                                    // console.log("cat id : ",cat._id);
                                    return <option value={cat._id} >{cat.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <br />
                    <div>
                        <select name="" id="">
                            <option value="" selected>select</option>
                            {
                                subCategories?.map((subcat) => {
                                    return <option value={subcat._id}  {...register("subcat")}>{subcat.name}</option>
                                })
                            }
                        </select>
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
