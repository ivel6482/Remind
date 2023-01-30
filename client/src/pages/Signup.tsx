import {FormEvent, useState} from "react";
import {useSignup} from "../queryHooks/useSignup";

export function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const mutation = useSignup();

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        mutation.mutate({
            email,
            password,
            confirmPassword
        }, {
            onSuccess: () => {
                alert("Signup successful");
            },
            onError: (error: any) => {
                alert(error.response.data);
                console.log(error.response.data);
            }
        });
    }

  return (
    <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" value={email} />
        <label htmlFor="password">Password</label>
        <input onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" value={password} />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input onChange={e => setConfirmPassword(e.target.value)} type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} />
        <button type="submit">Signup</button>
    </form>
  );
}
