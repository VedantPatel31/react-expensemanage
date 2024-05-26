import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form'

export default function UserRegistration() {
    const { register, handleSubmit } = useForm();
    const [isLoading, setisLoading] = useState(false);
    const [isDisable, setisDisable] = useState(false);
    const submitHandler = async (data) => {
        setisLoading(true);
        setisDisable(true);
        const res = await axios.post("http://localhost:3003/userRegister/user", data);
        setisLoading(false);
        setisDisable(false);
        console.log(res.data);
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
            <h1>USER REGISTER</h1>
            <div>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div>
                        <label htmlFor="userfName">User fName</label>
                        <input
                            type="text"
                            name="userfName"
                            id="userfName"
                            {...register("fName")}
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="userlName">User fName</label>
                        <input
                            type="text"
                            name="userlName"
                            id="userlName"
                            {...register("lName")}
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" {...register("email")} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" {...register("password")} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="mobileNo">Mobile NUmber : </label>
                        <input type="phone" {...register("mobileNo")} />
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
                        <input disabled={isDisable} type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>

    );
};
