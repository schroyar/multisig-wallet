const { hexStripZeros } = require("ethers/lib/utils");
const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  await deploy("MultiSig", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    value: hre.ethers.utils.parseEther("0.01"),
    // args: [ "Hello", ethers.utils.parseEther("1.5") ],
    args: [['0x99ba82E610C7Ed000F2477F7F548dcadEe97a9a3'], 1],
    log: true,
    waitConfirmations: 5,
  });

  // Getting a previously deployed contract
  const MultiSig = await ethers.getContract("MultiSig", deployer);

};
module.exports.tags = ["MultiSig"];
