const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { DEVELOPMENT_NETWORKS } = require("../helper-hardhat.config");
const { network, ethers } = require("hardhat");
// const { BigNumber } = require("ethers");
let tokenUris = ['ipfs://QmaVFyGCGvLvJtrXUjgyaDqAKqV877wtjajjS4BzoVeRXn',
  'ipfs://QmVTRSQ65pfautTg5HpCP1zHKAjuUpALoCAxMvppCcrghQ',
  'ipfs://QmNZtAmuXfyQsbANCiqBJtrR2Vp4BTwFRoQH91bPthhJSQ',
  'ipfs://QmT7p6na7aKD7qVLu2s6Mj1jbbNv6yqhhFJMDSxB3qBpc7']

if (!DEVELOPMENT_NETWORKS.includes(network.name)) {
  describe.skip()
}
else {
  describe("Fucha", function () {
    async function deployFuchaNft() {
      const mintFee = 1000000
      const accounts = await ethers.getSigners();
      const owner = accounts[0];
      const otherAccount = accounts[1];
      const Fucha = await ethers.getContractFactory("FuchaNft", owner)
      const fucha = await Fucha.deploy(mintFee);

      return { fucha, mintFee, owner, otherAccount };
    }

    describe("Deployment", function () {
      it("Should set the right mintFee", async function () {
        const { fucha, mintFee } = await loadFixture(deployFuchaNft);

        expect(await fucha.getMintFee()).to.equal(mintFee);
      });
    });

    describe("createNft", function () {
      describe("Validations", function () {
        it("Should revert with the not enough minting funds error", async function () {
          const { fucha } = await loadFixture(deployFuchaNft);

          await expect(fucha.createNft(1, { value: 10000 })).to.be.revertedWith(
            "Not enough balance to mint this FuchaNft"
          );
        });

        it("Should revert with breed doesnt exist error", async function () {
          const { fucha, mintFee } = await loadFixture(
            deployFuchaNft
          );
          await expect(fucha.createNft(5, { value: mintFee })).to.be.revertedWith(
            "Breed index doesnt exist"
          );
        });

        it("Shouldn't fail if the the right breed and value are inserted upon calling even from another account", async function () {
          const { fucha, mintFee, otherAccount } = await loadFixture(
            deployFuchaNft
          );

          await expect(fucha.connect(otherAccount).createNft(1, { value: mintFee })).not.to.be.reverted;
        });
      });
      it("Should expect the token id of the breed minted equal to right breed", async function () {
        const { fucha, mintFee } = await loadFixture(deployFuchaNft);
        await fucha.createNft(1, { value: mintFee })
        const token_counter = await fucha.tokenCounter()
        const tokenid = token_counter - 1
        expect(await fucha.tokenIdToBreed(tokenid)).to.equal("fuchaSimba");
      });

      it("Should return 1 to show that the owner is added to the fucha_owners array after minting", async function () {
        const { fucha, mintFee, owner, otherAccount } = await loadFixture(deployFuchaNft);
        await fucha.connect(owner).createNft(1, { value: mintFee })
        const ownerRepetitiob = 1
        const nfrepetition = await fucha.checkOwner(owner.address)
        expect(nfrepetition).to.equal(ownerRepetitiob);
      });
      it("should update contracts balance upon minting", async function () {
        const { fucha, owner, mintFee } = await loadFixture(deployFuchaNft);
        const initialbalance = await ethers.provider.getBalance(fucha.address);
        await fucha.createNft(2, { value: mintFee });
        // await time.increase(20);
        const finalbalance = initialbalance + mintFee;
        expect(await ethers.provider.getBalance(fucha.address)).to.equal(finalbalance);
      })
      describe("MintingEvent", function () {
        it("Should emit an event upon minting", async function () {
          const { fucha, mintFee } = await loadFixture(
            deployFuchaNft
          );
          // const tokenid = await fucha.getRecentTokenId()
          // const breed = await fucha.tokenIdToBreed(tokenid)
          await expect(fucha.createNft(1, { value: mintFee }))
            .to.emit(fucha, "breedAssigned")
          // .withArgs(breed, anyValue); // We accept any value as `when` arg
        });
      });

    });



    describe("setTokenUri", function () {
      it("Should set the token uri of the images", async function () {
        const { fucha, mintFee } = await loadFixture(
          deployFuchaNft
        );
        await fucha.createNft(2, { value: mintFee });
        const tokenid = await fucha.getRecentTokenId()
        const breed = await fucha.tokenIdToBreed(tokenid);
        let fuchaIndex = 0;
        // for (let fuchaIndex = 0; fuchaIndex< tokenUris.length; fuchaIndex++){
        //   if (tokenUris[fuchaIndex] == )
        // } 
        if (breed == "fuchaHippo") {
          return fuchaIndex = 0;
        }
        if (breed == 'fuchaSimba') {
          return fuchaIndex = 1;
        }
        if (breed == "fuchaNyati") {
          return fuchaIndex = 3;
        }
        if (breed == 'fuchaRhino') {
          return fuchaIndex = 2;
        }
        const tokenuri = tokenUris[fuchaIndex];
        await fucha.setTokenUri(tokenid, tokenuri);

        expect(await fucha.tokenUri(tokenid)).to.equal(tokenuri);
      });
    });
    describe("withdraw", function () {
      describe("owner validation", function () {
        it("Should not withdraw upon calling it from another account", async function () {
          const { fucha, mintFee, otherAccount } = await loadFixture(
            deployFuchaNft
          );
          await expect(fucha.connect(otherAccount).withdraw(mintFee, otherAccount.address)).to.be.revertedWith("Ownable: caller is not the owner");
        });
        it("Should withdraw upon calling it from the owner", async function () {
          const { fucha, mintFee, owner } = await loadFixture(
            deployFuchaNft
          );
          await fucha.createNft(1, { value: mintFee })
          const amount = 500000;
          expect(await fucha.withdraw(amount, owner.address)).to.not.be.reverted;
        });
      });

      it("Should update toAddress balance after withdraw", async function () {
        const { fucha, mintFee, otherAccount } = await loadFixture(
          deployFuchaNft
        );
        await fucha.createNft(1, { value: mintFee })
        // const initialbalance = await ethers.provider.getBalance(otherAccount.address);
        const amount = (mintFee / 2);
        ;
        // const assumednetsum = initialbalance + amount;
        // const finalbalance = await ethers.provider.getBalance(otherAccount.address);
        // expect(finalbalance).to.equal(assumednetsum);
        expect(await fucha.withdraw(amount, otherAccount.address)).to.changeEtherBalances(
          [otherAccount.address, fucha.address],
          [amount, -amount])
      });
      it("Should update contracts balance after withdraw", async function () {
        const { fucha, mintFee, otherAccount } = await loadFixture(
          deployFuchaNft
        );
        // const fucha_ = await ethers.getContract("FuchaNft")
        const amount = (mintFee / 2);
        await fucha.createNft(1, { value: mintFee })
        const initialbalance = await ethers.provider.getBalance(fucha.address)
        await fucha.withdraw(amount, otherAccount.address);
        const assumednetsum = initialbalance - (mintFee / 2);
        expect(await ethers.provider.getBalance(fucha.address)).to.equal(assumednetsum);
      });
      describe("WithdrawalEvent", function () {
        it("Should emit an event upon withdraw", async function () {
          const { fucha, mintFee, otherAccount } = await loadFixture(
            deployFuchaNft
          );
          const amount = (mintFee / 2);
          // const tokenid = await fucha.getRecentTokenId()
          // const breed = await fucha.tokenIdToBreed(tokenid)
          await (fucha.createNft(1, { value: mintFee }))
          await expect(fucha.withdraw(amount, otherAccount.address)).to.emit(fucha, "amountWithdrawn")
          // .withArgs(breed, anyValue); // We accept any value as `when` arg
        });
      });
    });
  });
};

