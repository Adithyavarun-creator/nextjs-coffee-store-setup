import { table, getRecords, findRecordByFilter } from "../../lib/airtable";

const getCoffeeStoreById = async (req, res) => {
  const { id } = req.query;

  try {
    if (id) {
      const records = await findRecordByFilter(id);

      if (records.length !== 0) {
        //if id records return the store
        res.json(records);
      } else {
        res.json({ message: `id could not be found` });
      }
    } else {
      res.status(400);
      res.json({ message: "id not exist buddy" });
    }
  } catch (error) {
    res.status(500);
    res.json({ message: "Something went wrong", error });
    console.log(error);
  }
};

export default getCoffeeStoreById;
