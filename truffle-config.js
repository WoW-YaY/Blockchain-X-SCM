const path = require("path");

const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config({ path: './client/.env' });

module.exports = {
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true,
          runs: 200  
        }
      }
    }
  },
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    // Local Chain Built by Ganache
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // match any network
      websockets: true
    },
    // Polygon Testnet -- Mumbai
    mumbai: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://rpc-mumbai.maticvigil.com"),
      network_id: 80001,
      gas: 8000000,
      gasPrice: 100000000000,
      confirmations: 2,
      deploymentPollingInterval: 10000,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  }
};
