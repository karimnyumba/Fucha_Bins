# FuchaBin Nft Project
This project describes the functionalities of the FuchaBin NFT project, including minting, setting the token URI, storing images to Pinata (IPFS), and running tests. It comes with the NFT Contract, a contract test, and a script that deploys and interacts with the contratct. The project is tested on the hardhat development network and the hyperspace testnet (FVM).

## Technologies Used
* HardHat
* JavaScript
* Solidity
* Pinata
* Ethers.Js

## Getting Started
### Requirements
* Node.Js

### QuickStart
1. Open your terminal and navigate to the directory where you want to clone the repository. 
2. Run the following command to clone the repository.

```bash
git clone https://github.com/Rasta669/Fucha-on-FVM.git
```

3. Once the repository has been cloned, navigate to the project directory using the following command.

```bash
cd Fucha-on-FVM/Smart\ Contract/
```

4. Install dependencies and packages, by running either of the following commands:

```
yarn install
```

or

```
npm install
```

### Getting A FileCoin Related Address

1.  To obtain a Filecoin-related address (t4). see [this link](https://github.com/filecoin-project/testnet-hyperspace) for instructions on linking your ETH address to Filecoin and accessing faucets for testnet testing.

2.  Set the `PRIVATE_KEY` in `.env` as shown in `.envexample`.

3.  To check your ETH equivalent t4 address, run the following command:

```hardhat
npx hardhat get-address
```

### Deploying FuchaBins on Local Hardhat Network

* To deploy `fuchaContract` on the Hardhat dev network, run the following command:

```hardhat
hh deploy --tags fucha
```

## How the Project Uses FVM

* The project deploys the FuchaBin contract, mints NFTs and queries information on FVM (Hyperspace Testnet).

### Deploying on FVM

* To deploy `fuchaContract` to the Hyperspace testnet, run the followinng command:

```
hh deploy --tags fucha --network hyperspace
```

* To upload images to Pinata, set the `PINATA_API_SECRET` and `PINATA_API_KEY` variables as obtained from Pinata by logging in and generating new keys. Set `UPLOAD_TO_PINATA` to true as shown in `.envexample`, and run the command:

```
hh deploy --tags url
```

* This will return IPFS URIs on the terminal, which can be viewed on Pinata [here](https://app.pinata.cloud/pinmanager#).

### Minting the NFT

* Minting on the local network is written in **`deploy/03.mint.js`**. To change the breed to mint, simply change the breedIndex parameter to suit your breed type. 

* To mint on the local network, simply run the following command:

```
hh deploy
```

**This will run the local deploy script, upload the images to IPFS, and mint a breed of FuchaBin.**

#### Minting on Filecoin testnet

If you run the command:

```
npx hardhat
``` 

* You will get a list of tasks. You may have spotted `create-nft0`, `create-nft1`, `create-nft2`, and `create-nft3`, which explain the subsequent breeds you can mint by running those commands. 

* To mint a FuchaBin NFT from the deployed collection, your wallet must have more than **0.9 tFil** to mint an NFT, of which is customizable from the helper-hardhat.config. Also, the wallet's `PRIVATE_KEY` to mint to, must be added to `.env` as shown in `.envexample`.

*For example, to mint a `fuchaHippo` breed to the deployed collection at `contractAddr`, run the following command:

```
npx hardhat create-nft0 --contract contractAddr --network hyperspace
```

* Theres also a mint script on scripts/mint.js which has a mintNft fx with two parameters; the address of the deployed FuchaBin collection and breedIndex which are customizable, to mint FuchaBIn on hyperspace testnet using this script simply run:

```
npx hardhat run scripts/mint.js --network hyperspace
```


### Testing

* To run tests, enter the following command:

```
hh test
```

* To check test coverage, enter the following command:

```
npx hardhat coverage
```

### Images and metadata on IPFS:

You can find the uploaded content on the links below:

* [FuchaNyati](https://ipfs.io/ipfs/QmY6sAQQJaUTHYjp24wHRaG3t27eVhKkb7HF2HioBL2RJ9?filename=fuchaNyati.jpg), [FuchaNyati metadata](https://ipfs.io/ipfs/QmZYRrYPkNvZioeoAS3aq82rCoe5Gjc9xVmoaKG7BnAc91?filename=fuchaNyati.json).


* [FuchaSimba](https://ipfs.io/ipfs/QmXGXWivnCKC4A55UKgXAQSJAvneaAze2KKtVbmhPW62Hd?filename=fuchaSimba.jpg), [FuchaSimba metadata](https://ipfs.io/ipfs/QmVxJqc9owsrNvpPjqkCAhWEoEyqZNcQnt8tZFeh4BB94q?filename=fuchaSimba.json).


* [FuchaHippo](https://ipfs.io/ipfs/QmehCt7S8WXeA6srd9nukuZaVyeRJ4K7ARLwu9qjuztoeK?filename=fuchaHippo.jpg), [FuchaHippo metadata](https://ipfs.io/ipfs/QmeSbkumWmf3Wsj4ehaLuFPDBupm1e9Ws761wWhpUgxpSE?filename=fuchaHippo.json).


* [FuchaRhino](https://ipfs.io/ipfs/QmbaaebZBR5w16rQqdAkuTKNtmF33S66jBmVKmiEVPy8sk?filename=fuchaRhino.jpg), [FuchaRhino metadata](https://ipfs.io/ipfs/QmTjHH2PbmjZ1XMeyVS3uwnJkxReC3ns6367gaU7f9LH6Z?filename=fuchaRhino.json).

### Conclusion

* You can check the deployed contract on FVM (Hyperspace Testnet) using the contract Address : 
**t410fl663emkwpcx6zm3h6aznsp3ef5sbqcvdf5mfrna** on any [Filecoin Explorer](https://hyperspace.filscan.io/address/general?address=t410fl663emkwpcx6zm3h6aznsp3ef5sbqcvdf5mfrna)
