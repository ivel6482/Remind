import { Hero } from "../components/UI/Hero";
import { Navbar } from "../components/UI/Navbar";
import { useLatestExercise } from "../queryHooks/useLatestExercise";
import {Login} from "./Login";
import {Signup} from "./Signup";

export function Home() {
  const { data: exercise, isFetching } = useLatestExercise();

  if (isFetching) {
    return <p>Loading...</p>
  }

  return (
    <main>
      <Navbar/>
      <Hero exercise={exercise?.data}/>
      <Login />
      <Signup />
    </main>
  )
}
