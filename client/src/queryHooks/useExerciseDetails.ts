import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useExerciseDetails(exerciseId: string | undefined) {
  const query = useQuery({
    queryKey: ["exerciseDetails", exerciseId],
    queryFn: () => {
      return axios.get(`http://localhost:8000/exercises/${exerciseId}`)
    }
  });

  return query;
}
