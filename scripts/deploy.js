const hre = require("hardhat");
// 0x5FbDB2315678afecb367f032d93F642f64180aa3
async function main() {
  const Charity = await hre.ethers.getContractFactory("Charity");
  const charity = await Charity.deploy();

  await charity.deployed();

  console.log(
    `Charity deployed to ${charity.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
