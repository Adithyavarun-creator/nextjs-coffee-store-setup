import { table, findRecordByFilter, getRecords } from "../../lib/airtable";

const favouriteCoffeeStoreById = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const { id } = req.body;

      if (id) {
        const records = await findRecordByFilter(id);

        if (records.length !== 0) {
          const record = records[0];

          const calculateVoting = parseInt(record.voting) + 1;
          console.log({ calculateVoting });

          //update a record
          const updateRecord = await table.update([
            {
              id: record.recordId,
              fields: {
                voting: calculateVoting,
              },
            },
          ]);

          if (updateRecord) {
            const minifiedRecord = getRecords(updateRecord);
            res.json(minifiedRecord);
          }
        } else {
          res.json({ message: "coffeestore id does not exist" });
        }
      } else {
        res.status(400);
        res.json({ message: "id missing" });
      }
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ message: "Error upvoting", error });
    }
  }
};

export default favouriteCoffeeStoreById;
