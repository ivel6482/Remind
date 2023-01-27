import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useLatestExercise() {
  const query = useQuery({
    queryKey: ["latestExercise"],
    queryFn: () => {
      return axios.get("http://localhost:8000/exercises/latest");
    }
  });

  return query;
}
