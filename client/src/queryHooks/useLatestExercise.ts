import { useQuery } from "@tanstack/react-query";
import { remindApi } from "../main";

export function useLatestExercise() {
  const query = useQuery({
    queryKey: ["latestExercise"],
    queryFn: () => {
      return remindApi.get("/exercises/latest");
    }
  });

  return query;
}
