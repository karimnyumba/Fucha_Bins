const { storeImages, storeTokenUriMetadata } = require("../utils/UploadToPinata")
const imagesLocation = "./img/"

const metadataTemplate = {
    name: "",
    description: "",
    image: "",
    attribute: {
        trait_type: "Bins weight",
        value: 1000
    }
}

module.exports = async () => {
    if (process.env.UPLOAD_TO_PINATA == 'true') {
        tokenUris = await handleTokenUris()
    }
}

async function handleTokenUris() {
    tokenUris = []
    const { responses: imageUploadResponses, files } = await storeImages(imagesLocation)
    for (imageUploadResponseIndex in imageUploadResponses) {
        let tokenUriMetadata = { ...metadataTemplate }
        tokenUriMetadata.name = files[imageUploadResponseIndex].replace(".jpg", "")
        tokenUriMetadata.description = `PLastic fuchabin breed of ${tokenUriMetadata.name} for preserving our environment`
        tokenUriMetadata.image = `ipfs://${imageUploadResponses[imageUploadResponseIndex].IpfsHash}`
        console.log(`Uploading ${tokenUriMetadata.name}...`)
        const metadataUploadResponse = await storeTokenUriMetadata(tokenUriMetadata)
        tokenUris.push(`ipfs://${metadataUploadResponse.IpfsHash}`)
        console.log(`The metadata template is`, tokenUriMetadata)
    }
    console.log("Token URIs uploaded! They are:")
    console.log(tokenUris)
    return tokenUris
}

module.exports.tags = ["all", "uri", "main"]