const { networkConfig, DEVELOPMENT_NETWORKS, tokenUris } = require("../helper-hardhat.config")
const { ethers, network } = require("hardhat")
const { networks } = require("../hardhat.config")

const PRIVATE_KEY = network.config.accounts[0]
const chainId = network.config.chainId
const payValue = 10000000001
const breedIndex = 2


module.exports = async ({ deployments, getNamedAccounts }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    if (DEVELOPMENT_NETWORKS.includes(network.name)) {

        const fucha = await ethers.getContract("FuchaNft", deployer)
        // const fucha__ = await ethers.getContractFactory("FuchaNft", wallet)
        // const fucha = fucha__.attach(fucha_.address)
        log("Minting fucha nft_______")
        const mint_tx = await fucha.createNft(breedIndex, { value: payValue })
        const Id = await fucha.tokenCounter() - 1
        const breed = await fucha.tokenIdToBreed(Id)
        log("Created fuchaNft of breed:", breed)
        log("---------------------------------")
        log("Setting the tokenUri of ", breed)
        let uri = tokenUris[breedIndex]
        await fucha.setTokenUri(Id, uri)
        let set_uri = await fucha.tokenURI(Id)
        log("Yeay the token uri of ", breed, "is ", set_uri)
    }


}

module.exports.tags = ["all", "local-mint"]
// // module.exports.dependencies = ["fucha"]