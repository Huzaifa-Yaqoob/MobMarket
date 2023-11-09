import { userInstance } from "./instances";

export async function getBrands(): Promise<SelectItem[]> {
  try {
    const response = await userInstance().get("/user/product/brand");
    if (response.data === null) {
      throw new Error("error data is null");
    }
    return response.data;
  } catch (error) {
    console.log(error, "at fetching brand");
    return [];
  }
}
