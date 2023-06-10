import React from "react";
import Title from "../../../Component/Title";
import usePayment from "../../../Hooks/usePayment";
import useAuth from "../../../Hooks/useAuth";

const PaymentHistory = () => {
  const [payment] = usePayment();
  const { user } = useAuth();
  const history = payment.filter((data) => data.email === user?.email);
  return (
    <div>
      <Title title={"payment history"}></Title>
      <div className="overflow-x-auto bg-slate-100 w-full px-10 py-10">
        <table className="table text-xl w-full">
          <thead className="text-black text-xl">
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Transection Id</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.cartItem.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.cartItem.name}</td>
                <td>{item.transactionId}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
