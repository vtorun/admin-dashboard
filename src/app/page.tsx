import InfoCard from "@/components/card/info-card";
import icon1 from "../assets/images/icon-1.webp";
import icon2 from "../assets/images/icon-2.webp";
import icon3 from "../assets/images/icon-3.webp";
import icon4 from "../assets/images/icon-4.png";
import { InfoCardItem } from "@/types";
import SalesChart from "@/components/home/sales-chart";
import CategoryChart from "@/components/home/category-chart";

export default function Home() {
  const cards: InfoCardItem[] = [
    {
      icon: icon1,
      label: "Toplam Kullanıcı",
      value: 3210,
    },
    {
      icon: icon2,
      label: "Toplam Sipariş",
      value: 698,
    },
    {
      icon: icon3,
      label: "Toplam Satış",
      value: "450.500,20" + "$",
    },
    {
      icon: icon4,
      label: "Toplam Ürün",
      value: 1500,
    },
  ];

  return (
    <div className="page">
      <h1 className="title">Admin Paneli</h1>
      <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
        {cards.map((item, key) => (
          <InfoCard key={key} item={item} />
        ))}
      </section>
      <section className="grid lg:grid-cols-14 gap-5 my-10">
        <div className="lg:col-span-9">
          <SalesChart />
        </div>
        <div className="lg:col-span-5">
          <CategoryChart />
        </div>
      </section>
    </div>
  );
}
