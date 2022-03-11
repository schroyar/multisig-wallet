const args = require("./args");

const main = async() => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contract with account: ", deployer.address);
    console.log("Deployer account balance: ", hre.ethers.utils.formatEther(accountBalance));

    const Token = await hre.ethers.getContractFactory('MultiSig');
    const portal = await Token.deploy(['0x99ba82E610C7Ed000F2477F7F548dcadEe97a9a3'], 1);
    await portal.deployed();

    //Test transactions
    let retrieveOwners = await portal.getOwners();
    
    console.log("testando mostrar tudo: ", retrieveOwners);
    console.log('MultiSig address: ', portal.address);

};

const runMain = async () => {
    try {
        await main();
    } catch(error) {
        console.error(error);
        process.exit(1);
    }
};

runMain();