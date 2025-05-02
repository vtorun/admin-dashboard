import { getProducts } from "@/utils/service";
import DoughnutGraph from "../graphic/doughnut-graph";
import { ChartData } from "@/types";

export default async function CategoryChart() {
  const products = await getProducts();
  const labels = [...new Set(products.map((product) => product.category))];
  const object: Record<string, number> = {};
  products.forEach((product) => {
    object[product.category] = (object[product.category] || 0) + 1;
  });
  const data: ChartData = {
    labels,
    datasets: [
      {
        label: "Kategorideki Ürün Sayısı",
        data: Object.values(object),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-5">
      <h2 className="subtitle">Kategori Grafiği</h2>
      <DoughnutGraph data={data} />
    </div>
  );
}
