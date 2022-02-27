const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);

const table = base("coffeedatas");
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

const mappedRecords = (record) => {
  return {
    recordId: record.id,
    ...record.fields,
  };
};

const getRecords = (records) => {
  return records.map((record) => mappedRecords(record));
};

const findRecordByFilter = async (id) => {
  const findCoffeeStoreRecords = await table
    .select({
      filterByFormula: `id="${id}"`,
    })
    .firstPage();

  return getRecords(findCoffeeStoreRecords);
};

export { table, getRecords, findRecordByFilter };
