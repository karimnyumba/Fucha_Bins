const networkConfig = {
    31337: {
        name: "hardhat",
        mintFee: 10000000000
    },
    3141: {
        name: "hyperspace",
        mintFee: 90,
    }
}

export const DEVELOPMENT_NETWORKS = ["hardhat", "local-host"]

const tokenUris = ['ipfs://QmaVFyGCGvLvJtrXUjgyaDqAKqV877wtjajjS4BzoVeRXn',
    'ipfs://QmVTRSQ65pfautTg5HpCP1zHKAjuUpALoCAxMvppCcrghQ',
    'ipfs://QmNZtAmuXfyQsbANCiqBJtrR2Vp4BTwFRoQH91bPthhJSQ',
    'ipfs://QmT7p6na7aKD7qVLu2s6Mj1jbbNv6yqhhFJMDSxB3qBpc7']


module.exports = {
    networkConfig,
    DEVELOPMENT_NETWORKS,
    tokenUris
}