import OrderDataTable from "@/components/admin/order/OrderDataTable";
import { orderColumns } from "@/components/admin/order/OrderColumns";

export default function AdminOrderPage(): React.ReactElement {
  const data = [
    {
      _id: "1",
      img: "ad",
      name: "app",
      bill: 100,
      status: "Cancelled",
      date: "2/2/2",
    },
  ];

  return (
    <div className="my-container">
      <OrderDataTable data={data} columns={orderColumns} />
    </div>
  );
}
