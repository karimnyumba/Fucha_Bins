import {Contract, ethers} from "ethers"
import contractAbi from "../FuchaNft.json" assert {type: 'json'}

async function mintNft(){
 try {
    
    const provider = new ethers.JsonRpcProvider('https://api.hyperspace.node.glif.io/rpc/v1')
   
    // const provider = new ethers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/CNSwCYzWUGzxIeYEjdij9Yk-aF519PJD')
    let response = await provider.getBlockNumber()

    console.log(response)
    // const provider = new ethers.providers.JsonRpcProvider('https://api.hyperspace.node.glif.io/rpc/v1')
    // const provider = new ethers.provider.web3Provider (window.ethereum)
    const signer = await provider.getSigner()
    // const signer = await ethers.Wallet('')
    // // const nftContract = new Contract(ABI,signer, contract_address)
    // const nftContract = new Contract(abi,signer, address)

    // await nftContract.createNft(index, { value: fee.toString() })
    // await mintNFt()
 } catch (error) {
    console.log(error)
 }
}

mintNft()

