import { useQuery } from "@tanstack/react-query";

const useInstuctorsApi = () => {
  const {
    data: instructors = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5050/instructors");
      return res.json();
    },
  });
  return [instructors, loading, refetch];
};

export default useInstuctorsApi
