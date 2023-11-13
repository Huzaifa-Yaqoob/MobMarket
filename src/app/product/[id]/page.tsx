import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import ItemView from "@/components/product/page/ItemView";
import BuyModel from "@/components/product/page/BuyModel";
import connectDb, { disConnectDB } from "@/database/connectDB";
import Rating from "@/database/models/ratingModel";
import productPage from "@/database/aggregations/productPage";
import { Product as ProductType } from "@/database/aggregations/productPage";

async function getProductsDate(id: string): Promise<ProductType | undefined> {
  try {
    await connectDb();
    const data = await productPage(id);
    return data[0];
  } catch (error) {
    console.log(error, "at getProductsDat function");
  } finally {
    await disConnectDB();
  }
}

async function getUserRatingOnProduct(
  id: string,
  userId: string
): Promise<number | undefined> {
  try {
    await connectDb();
    const res = await Rating.findOne({ user: userId, product: id });
    return res ? res?.rating : 0;
  } catch (error) {
    console.log(error, "at getting user rating");
  } finally {
    await disConnectDB();
  }
}

export default async function Phone({
  params,
}: {
  params: { id: string };
}): Promise<React.ReactElement> {
  const session = await getServerSession(authOption);
  let userRating = 0;
  if (session?.user?.id) {
    userRating = (await getUserRatingOnProduct(
      params.id,
      session?.user?.id
    )) as number;
  }
  const data = await getProductsDate(params.id);
  // console.log(userRating);
  const productId = data?._id.toString() as string;
  return (
    <div className="my-container ">
      <ItemView product={data} userRating={userRating} />
      <div className="fixed bottom-4 right-4">
        <BuyModel id={productId} bill={data ? data.price : 0} />
      </div>
    </div>
  );
}
