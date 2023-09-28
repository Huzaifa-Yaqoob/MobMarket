import ItemView from "@/components/product/page/ItemView";

export default function Phone({ params }: { params: { id: string } }) {
  console.log(params.id);
  return (
    <div className="my-container ">
      <ItemView />
    </div>
  );
}

// export async function generateStaticParams() {

// }
