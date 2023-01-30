import { useMutation } from "@tanstack/react-query";
import {remindApi} from "../main";

type SignupCredentials = {
  email: string;
  password: string;
  confirmPassword: string;
}

export function useSignup() {
  const mutation = useMutation({
    mutationFn: ({ email, password, confirmPassword }: SignupCredentials) => {
      return remindApi.post("/auth/signup", {
        email,
        password,
        confirmPassword
      })
    }
  });

  return mutation;
}
