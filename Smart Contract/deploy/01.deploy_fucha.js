require("hardhat-deploy-ethers")
const { ethers } = require("hardhat")
const { networkConfig, DEVELOPMENT_NETWORKS } = require("../helper-hardhat.config")

// const { getChainId, getNamedAccounts, deployments } = require("hardhat")
const payValue = 10000000001
const payValue1 = 101
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments
    const chainId = network.config.chainId
    log("-----------------------------")
    if (DEVELOPMENT_NETWORKS.includes(network.name)) {
        args = [networkConfig[chainId]["mintFee"]]
        fucha_ = await deploy("FuchaNft", { from: deployer, log: true, args: args })
        // await fucha.deployed()
        log("Fucha deployed to by", deployer)
        log("-------------------------------")

        log("minting fuchabin nft")
        const fuchaContract = await ethers.getContractFactory("FuchaNft", deployer)
        const fucha = fuchaContract.attach(fucha_.address)
        const fucha_args = [1]
        const create_tx = await fucha.createNft(fucha_args, { value: payValue.toString() })
        const Id = await fucha.tokenCounter() - 1
        const breed = await fucha.tokenIdToBreed(Id)
        log("Created fuchaNft of breed:", breed)
    }
    else {
        log("Deploying fucha on hyperspace...")
        const private_key = network.config.accounts[0]
        const WALLET = new ethers.Wallet(private_key, ethers.provider)
        log("Wallet Ethereum Address:", WALLET.address)
        const fucha_ = await ethers.getContractFactory("FuchaNft", WALLET)
        const fucha_args = networkConfig[chainId]["mintFee"]
        const fucha = await fucha_.deploy(fucha_args)
        await fucha.deployed()
        log("Contract deployed... to", fucha.address)
        // args = [networkConfig[chainId]["mintFee"]]
        // const fucha = await deploy("FuchaNft", { from: WALLET, args: args, log: true })
        // log("fucha deployed to>>>", fucha.address)
        // log("minting fuchabin nft")
        // const create_tx = await fucha.createNft([2], { value: ethers.utils.parseUnits('101'), gasLimit: 400000 })
        // const Id = await fucha.tokenCounter() - 1
        // const breed = await fucha.tokenIdToBreed(Id)
        // log("Created fuchaNft of breed:", breed)
        // fucha = fucha_.attach(Fucha.address)

    }

}

module.exports.tags = ["all", "fucha"]



// const simpleCoin = await SimpleCoin.deploy(tokensToBeMinted);
// await simpleCoin.deployed()
// console.log('SimpleCoin deployed to:', simpleCoin.address);