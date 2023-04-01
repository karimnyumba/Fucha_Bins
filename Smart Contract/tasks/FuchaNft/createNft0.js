// const { network, ethers } = require("hardhat")
const { DEVELOPMENT_NETWORKS, networkConfig } = require("../../helper-hardhat.config")

task("create-nft0", "mints fuchanft of breed fuchaHippo").addParam("contract", "The FuchaNft address")
    // .addParam("toaccount", "The account to mint to")
    // .addParam("breedIndex", "The fuchaBin type,you want to mint, starts with index 0, as spexified in fuchaContract(breed)")
    .setAction(async (taskArgs) => {
        //store taskargs as useable variables
        const contractAddr = taskArgs.contract
        // const toAccount = taskArgs.toaccount
        // const breedIndex = taskArgs.breedindex
        // tokenUris
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
        const transaction = await fucha.createNft(0, { value: fee.toString() })
        await transaction.wait()
        let Id = await fucha.tokenCounter() - 1
        let breed = await fucha.tokenIdToBreed(Id)
        console.log("You minted FuchaNft of breed", breed, "of id", Id)
        // Setting tokenUri
        console.log("Setting tokenUri of", breed)
        const uri_tx = await fucha.setTokenUri(Id, tokenUris[0])
        await uri_tx.wait()
        let Uri = await fucha.tokenURI(Id)
        console.log("Yeay you minted fuchaNin nft of id ", Id, "and tokenUri", Uri)

    })