import { Hero } from "../components/UI/Hero";
import { Navbar } from "../components/UI/Navbar";
import { useLatestExercise } from "../queryHooks/useLatestExercise";

export function Home() {
  const { data: exercise, isFetching } = useLatestExercise();

  if (isFetching) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Navbar />
      <Hero exercise={exercise?.data} />
    </>
  )
}
