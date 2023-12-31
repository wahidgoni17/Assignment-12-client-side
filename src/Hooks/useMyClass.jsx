import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useMyClass = () => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {data: myClass = [], refetch} = useQuery({
    queryKey: ["myClass"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/class`)
      return res.data
    },
  })
  return [myClass, refetch]
};

export default useMyClass;
