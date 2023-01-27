import { Link, useParams } from "react-router-dom"
import { useExerciseDetails } from "../queryHooks/useExerciseDetails";

export function ExerciseDetail() {

  const { exerciseId } = useParams();
  const query = useExerciseDetails(exerciseId);

  return (
    <>
      <h1>Exercise Detail Page</h1>
      <p>{query.data?.data.title}</p>
      <Link to="/">Home</Link>
    </>
  )
};
