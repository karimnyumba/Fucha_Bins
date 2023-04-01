task("create-nft2", "mints fuchanft of breed fuchaRhino").addParam("contract", "The FuchaNft address")
    // .addParam("toaccount", "The account to mint to")
    // .addParam("breedIndex", "The fuchaBin type,you want to mint, starts with index 0, as spexified in fuchaContract(breed)")
    .setAction(async (taskArgs) => {
        //store taskargs as useable variables
        const contractAddr = taskArgs.contract
        // contract
        // const breedIndex = taskArgs.breedindex
        // tokenUris
        let tokenUris = ['ipfs://QmaVFyGCGvLvJtrXUjgyaDqAKqV877wtjajjS4BzoVeRXn',
            'ipfs://QmVTRSQ65pfautTg5HpCP1zHKAjuUpALoCAxMvppCcrghQ',
            'ipfs://QmNZtAmuXfyQsbANCiqBJtrR2Vp4BTwFRoQH91bPthhJSQ',
            'ipfs://QmT7p6na7aKD7qVLu2s6Mj1jbbNv6yqhhFJMDSxB3qBpc7']


        //create a new wallet instance
        const wallet = new ethers.Wallet(network.config.accounts[0], ethers.provider)

        //create a SimpleCoin contract factory
        const fucha_ = await ethers.getContractFactory("FuchaNft", wallet.address)
        //create a SimpleCoin contract instance 
        //this is what you will call to interact with the deployed contract
        const fucha = await fucha_.attach(contractAddr)
        const fee = await fucha.getMintFee()
        console.log("Minting fuchanft from collection:", contractAddr, "to address", wallet.address)

        //send transaction to call the sendCoin() method
        const transaction = await fucha.createNft(2, { value: fee.toString() })
        await transaction.wait()
        let Id = await fucha.tokenCounter() - 1
        let breed = await fucha.tokenIdToBreed(Id)
        console.log("You minted FuchaNft of breed", breed, "of id", Id)
        // Setting tokenUri
        console.log("Setting tokenUri of", breed)
        const uri_tx = await fucha.setTokenUri(Id, tokenUris[2])
        await uri_tx.wait()
        let Uri = await fucha.tokenURI(Id)
        console.log("Yeay you minted fuchaNin nft of id ", Id, "and tokenUri", Uri)

    })