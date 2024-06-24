import { useQuery } from "@tanstack/react-query";
import { getCerrentUser } from "../../services/apiAuth";

// current user
export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCerrentUser,
  });
  return { isLoading, user, isAthenticated: user?.role === "authenticated" };
}
