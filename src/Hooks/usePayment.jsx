import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const usePayment = () => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {data: payment = [], refetch} = useQuery({
    queryKey: ["payment"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/payments`)
      return res.data
    },
  })
  return [payment, refetch]
};

export default usePayment;
