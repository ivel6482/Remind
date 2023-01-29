import { useMutation } from "@tanstack/react-query";
import { remindApi } from "../main";

type Credentials = {
  email: string;
  password: string;
};

export function useLogin() {
  const mutation = useMutation({
    mutationFn: ({ email, password }: Credentials) => {
      return remindApi.post("/auth/login", {
        email,
        password
      });
    }
  });

  return mutation;
}
