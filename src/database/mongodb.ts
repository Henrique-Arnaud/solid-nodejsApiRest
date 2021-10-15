const { MongoClient } = require('mongodb');
async function listDatabases(client){
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
async function main() {
  const uri = "mongodb+srv://dbAdmin:<dbAdmin>@cluster0.ayuen.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try{
    await client.connect();
    await listDatabases(client);
  }catch(error){
    console.error(error);
  }finally{
    await client.close();
  }
}
