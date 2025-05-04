
import UserTable from "@/components/table/user-table";
import { Suspense } from "react";
import Loading from "../loading";
import UserModal from "@/components/modal/user-modal";

type Props = {
  searchParams: Promise<{ show?: string }>;
};

export default async function Users({ searchParams }: Props) {
  
  const { show } = await searchParams;

  return (
    <div className="page">
      <h1 className="title">Kullanıcılar</h1>

      <Suspense fallback={<Loading designs="my-30" />}>
        <UserTable />
      </Suspense>

      {show && <UserModal userId={show} />}
    </div>
  );
}
