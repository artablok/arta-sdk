# arta-sdk

Software development kit for building applications on the Arta Blockchain.

## Status

Early-stage SDK. Currently provides a minimal client wrapper (`ArtaClient`) for reading chain
state over JSON-RPC. Transaction signing/broadcasting and contract helpers are planned — see
[Roadmap](https://github.com/artablok/arta-improvement-proposals/blob/main/AIPS/ROADMAP.md).

## Installation

```bash
npm install arta-sdk
```

## Usage

```js
const { ArtaClient } = require("arta-sdk");

const client = new ArtaClient(); // uses default public RPC
const block = await client.getBlockNumber();
console.log(block);
```

See [`examples/basic-usage.js`](./examples/basic-usage.js) for a runnable example.

## API

| Method | Description |
|---|---|
| `getBlockNumber()` | Returns the current head block number |
| `getBalance(address)` | Returns the balance (wei) of an address |
| `getBlock(blockHashOrNumber)` | Returns block data |

## Related

- [arta-core](https://github.com/artablok/arta-core) — ecosystem overview
- [arta-node](https://github.com/artablok/arta-node) — node implementation

## License

MIT
