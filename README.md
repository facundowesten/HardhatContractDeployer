# Optimism Hardhat example

> Example using [Hardhat](https://hardhat.org/) toolchain to deploy to [Optimism](https://optimism.io/) L2

## Getting started

Set up environment variables in `.env` (use your own):

```bash
PRIVATE_KEY=0x754fde3f5e60ef2c7649061e06957c29017fe21032a8017132c0078e37f6193a
L2_NODE_URL=https://opt-mainnet.g.alchemy.com/v2/KEY
```

Build contract OVM bytecode:

```bash
npm run build
```

Deploy to L2:

```bash
npx hardhat run scripts/deploy.js --network optimism
```