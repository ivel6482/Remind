import { useState } from "react";
import { Hero } from "../components/UI/Hero";
import { Navbar } from "../components/UI/Navbar";
import { useLatestExercise } from "../queryHooks/useLatestExercise";
import { useLogin } from "../queryHooks/useLogin";

export function Home() {
  const { data: exercise, isFetching } = useLatestExercise();
  const mutation = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (isFetching) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Navbar />
      <Hero exercise={exercise?.data} />
      <form onSubmit={(e) => {
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
      }}>
        <label htmlFor="email">Email</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" value={email} />
        <label htmlFor="password">Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" value={password} />
        <button type="submit">Login</button>
      </form>
    </>
  )
}
