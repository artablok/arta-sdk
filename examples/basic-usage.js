const { ArtaClient } = require("../src/index.js");

async function main() {
  const client = new ArtaClient();
  const blockNumber = await client.getBlockNumber();
  console.log("Current block:", blockNumber);
}

main().catch(console.error);
