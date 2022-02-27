//const table = base("coffeedatas");
//console.log({ table });
// console will give you
// {
//     table: Table {
//       _base: Base { _airtable: Airtable {}, _id: 'appVYppBHYrVDcdV1' },
//       id: null,
//       name: 'coffeedatas',
//       find: [Function (anonymous)],
//       select: [Function: bound ],
//       create: [Function (anonymous)],
//       update: [Function (anonymous)],
//       replace: [Function (anonymous)],
//       destroy: [Function (anonymous)],
//       list: [Function (anonymous)],
//       forEach: [Function (anonymous)]
//     }
//   }
import { table, getRecords } from "../../lib/airtable";

const createCoffeeStore = async (req, res) => {
  //if id exists return the store else create a store and add that item

  //now get the id,name,neighbourhood,etc from  req
  const { id, name, neighbourhood, voting, address, imgUrl } = req.body;
  if (req.method === "POST") {
    //find a record
    try {
      if (id) {
        const findCoffeeStoreRecords = await table
          .select({
            filterByFormula: `id="${id}"`,
          })
          .firstPage();

        // console.log({ findCoffeeStoreRecords });

        if (findCoffeeStoreRecords.length !== 0) {
          //if id exists return the store
          const records = getRecords(findCoffeeStoreRecords);
          res.json(records);
        } else {
          //create a record
          if (name) {
            const createRecords = await table.create([
              {
                fields: {
                  id: id,
                  name: name,
                  address: address,
                  neighbourhood: neighbourhood,
                  voting: voting,
                  imgUrl: imgUrl,
                },
              },
            ]);
            const records = getRecords(createRecords);

            res.json({ message: "created a record", records: records });
          } else {
            res.status(400);
            res.json({ message: "id or name are missing" });
          }
        }
      } else {
        res.status(400);
        res.json({ message: "id is missing" });
      }
    } catch (error) {
      console.log("Error creating or finding store", error);
      res.status(500);
      res.json({ message: "Error creating or finding store", error });
    }
  }

  //console.log({ req }); //by default method is GET
};

export default createCoffeeStore;
