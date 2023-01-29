import { useQuery } from "@tanstack/react-query";
import { remindApi } from "../main";

export function useExerciseDetails(exerciseId: string | undefined) {
  const query = useQuery({
    queryKey: ["exerciseDetails", exerciseId],
    queryFn: () => {
      return remindApi.get(`/exercises/${exerciseId}`)
    }
  });

  return query;
}
