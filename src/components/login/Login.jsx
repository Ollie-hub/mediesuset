import React from "react"
import { useForm } from "react-hook-form"

export function Login() {

    const { register, handleSubmit, errors } = useForm()

    return (
        <form>
            <label>Email</label>
            <input name="email" type="email" ref={register({ required: true })}></input>

            <label>Password</label>
            <input name="password" type="password" ref={register({ required: true })}></input>

            <button>LOGIN</button>
        </form>
    )

}