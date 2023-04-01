const { networkConfig, DEVELOPMENT_NETWORKS, tokenUris } = require("../helper-hardhat.config")
const { ethers, network } = require("hardhat")
// import { networks } from "../hardhat.config"

const PRIVATE_KEY = network.config.accounts[0]
const chainId = network.config.chainId
const payValue = 10000000001
const breedIndex = 2


const mintNFt = async function (contractAddr, breedIndex){
    if (!DEVELOPMENT_NETWORKS.includes(network.name)) {
        let tokenUris = ['ipfs://QmaVFyGCGvLvJtrXUjgyaDqAKqV877wtjajjS4BzoVeRXn',
            'ipfs://QmVTRSQ65pfautTg5HpCP1zHKAjuUpALoCAxMvppCcrghQ',
            'ipfs://QmNZtAmuXfyQsbANCiqBJtrR2Vp4BTwFRoQH91bPthhJSQ',
            'ipfs://QmT7p6na7aKD7qVLu2s6Mj1jbbNv6yqhhFJMDSxB3qBpc7']
        // to change the interaction wallet add private key to .env and call it on hardhat config
        wallet = new ethers.Wallet(network.config.accounts[0], ethers.provider)

        //create a SimpleCoin contract factory
        const fucha_ = await ethers.getContractFactory("FuchaNft", wallet.address)
        //create a SimpleCoin contract instance 
        //this is what you will call to interact with the deployed contract
        const fucha = await fucha_.attach(contractAddr)
        const fee = await fucha.getMintFee()
        console.log("Minting fuchanft from collection:", contractAddr, "to address", wallet.address)

        //send transaction to call the sendCoin() method
        const transaction = await fucha.createNft(breedIndex, { value: fee.toString() })
        await transaction.wait()
        let Id = await fucha.tokenCounter() - 1
        let breed = await fucha.tokenIdToBreed(Id)
        console.log("You minted FuchaNft of breed", breed, "of id", Id)
        // Setting tokenUri
        console.log("Setting tokenUri of", breed)
        const uri_tx = await fucha.setTokenUri(Id, tokenUris[breedIndex])
        await uri_tx.wait()
        let Uri = await fucha.tokenURI(Id)
        console.log("Yeay you minted fuchaNin nft of id ", Id, "and tokenUri", Uri)
    }
}

mintNFt("0xEe291e4eB901a444C6c73839f1bdD4046a375B99", 3).then(() => process.exit(0)).catch((error) => {
    console.error(error)
    process.exit(1)
})

// module.exports = {mintNFt}
 export {mintNFt}
// module.exports.tags = ["all", "local-mint"]
// // module.exports.dependencies = ["fucha"]