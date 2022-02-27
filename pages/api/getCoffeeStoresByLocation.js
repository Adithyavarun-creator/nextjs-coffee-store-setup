// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   //console.log({ req, res });
//   res.status(200).json({ name: "John Doe" });
// }
import { fetchCoffeeStores } from "../../lib/coffee-stores";

const getCoffeeStoresByLocation = async (req, res) => {
  //configure latlong
  try {
    const { latLong, limit } = req.query;
    const response = await fetchCoffeeStores(latLong, limit);
    res.status(200);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ message: "Something went wrong" });
  }

  //return something
};

export default getCoffeeStoresByLocation;
