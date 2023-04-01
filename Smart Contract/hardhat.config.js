require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
// require("@openzeppelin/contracts");
require("hardhat-deploy");
require("dotenv").config();
require("./tasks");
require("hardhat-deploy-ethers")
// require("hardhat");
// require('@nomiclabs/hardhat-waffle');
const PRIVATE_KEY = `${process.env.PRIVATE_KEY}`

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      // accounts: []
      saveDeployments: true
    },
    hyperspace: {
      chainId: 3141,
      url: "https://api.hyperspace.node.glif.io/rpc/v1",
      accounts: [PRIVATE_KEY],
      allowUnlimitedContractSize: true,
      blockGasLimit: 400000,
      saveDeployments: true
    }
  },
  solidity: "0.8.17",
  namedAccounts: {
    deployer: {
      default: 0,
      31341: 1
    }
  }
};
