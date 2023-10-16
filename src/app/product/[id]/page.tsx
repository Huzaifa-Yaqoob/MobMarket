import ItemView from "@/components/product/page/ItemView";
import BuyModel from "@/components/product/page/BuyModel";

export default function Phone({
  params,
}: {
  params: { id: string };
}): React.ReactElement {
  // console.log(params.id);
  return (
    <div className="my-container ">
      <ItemView />
      <div className="fixed bottom-4 right-4">
        <BuyModel />
      </div>
    </div>
  );
}

// export async function generateStaticParams() {

// }
