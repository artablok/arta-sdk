/**
 * Arta Blockchain SDK
 *
 * Minimal client wrapper around Web3 for interacting with the Arta network.
 * This is an early-stage SDK — see README for current scope and roadmap.
 */

const Web3 = require("web3");

const DEFAULT_RPC = "https://rpc.arta-blockchain.org";

class ArtaClient {
  /**
   * @param {string} [rpcUrl] - RPC endpoint. Defaults to the public Arta RPC.
   */
  constructor(rpcUrl = DEFAULT_RPC) {
    this.web3 = new Web3(rpcUrl);
  }

  /**
   * Get the current block number.
   * @returns {Promise<number>}
   */
  async getBlockNumber() {
    return this.web3.eth.getBlockNumber();
  }

  /**
   * Get the balance of an address, in wei.
   * @param {string} address
   * @returns {Promise<string>}
   */
  async getBalance(address) {
    return this.web3.eth.getBalance(address);
  }

  /**
   * Get a block by number or hash.
   * @param {number|string} blockHashOrNumber
   * @returns {Promise<object>}
   */
  async getBlock(blockHashOrNumber) {
    return this.web3.eth.getBlock(blockHashOrNumber);
  }
}

module.exports = { ArtaClient };
