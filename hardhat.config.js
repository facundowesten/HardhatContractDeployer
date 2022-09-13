require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path:__dirname+'/.env'});


const {OPTIMISM_NODE_URL, ARBITRUM_NODE_URL, PRIVATE_KEY} = process.env;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    optimism: {
      url: `${OPTIMISM_NODE_URL}`,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    arbitrum: {
      url: `${ARBITRUM_NODE_URL}`,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
