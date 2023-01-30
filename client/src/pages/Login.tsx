import {FormEvent, useState} from "react";
import {useLogin} from "../queryHooks/useLogin";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const mutation = useLogin();

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        mutation.mutate({
            email,
            password
        }, {
            onSuccess(data) {
                alert("Login successful");
            },
            onError(error: any) {
                alert(error.response.data.msg);
                console.log(error.response.data);
            }
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" value={email}/>
            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" value={password}/>
            <button type="submit">Login</button>
        </form>
    );
}
