import { getOrders } from "@/utils/service";
import LineGraph from "../graphic/line-graph";
import { ChartData } from "@/types";

export default async function SalesChart() {
  const orders = await getOrders();

  const labels: string[] = orders.map((order) => order.order_date);

  const data: ChartData = {
    labels,
    datasets: [
      {
        label: "Satış Tutarı",
        data: orders.map((order) => order.total_price),
        borderColor: "rgb(0, 150, 255)",
        backgroundColor: "rgba(0, 150, 255, 0.5)",
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-5">
      <h2 className="subtitle">Satış Grafiği</h2>

      <LineGraph data={data} />
    </div>
  );
}
