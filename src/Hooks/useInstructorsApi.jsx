import { useQuery } from "@tanstack/react-query";

const useInstuctorsApi = () => {
  const {
    data: instructors = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch("https://summer-camp-server-side-omega.vercel.app/instructors");
      return res.json();
    },
  });
  return [instructors, loading, refetch];
};

export default useInstuctorsApi
