import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useClassCart = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {data: classCart = [], refetch} = useQuery({
    queryKey: ["classCart", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/classCart?email=${user?.email}`)
      console.log(res.data)
      return res.data
    },
  })
  return [classCart, refetch]
};

export default useClassCart;
