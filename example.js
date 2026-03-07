// Arta Blockchain SDK Example

const Web3 = require("web3")

const rpc = "https://rpc.arta-blockchain.org"

const web3 = new Web3(rpc)

async function getBlock() {
  const block = await web3.eth.getBlockNumber()
  console.log("Current block:", block)
}

getBlock()
