
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction, Deployment } from 'hardhat-deploy/types';

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment): Promise<void> => {
  // @ts-ignore
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const contract = await deploy("TweetController", {
    from: deployer,
  });
  const tweetStorageDeployment: Deployment = await deployments.get('TweetStorage');
  const contractManagerDeployment: Deployment = await deployments.get('ContractManager');
  // @ts-ignore
  const tweetStorageContract = await hre.ethers.getContractAt("TweetStorage", tweetStorageDeployment.address)
  // @ts-ignore
  const contractManagerContract = await hre.ethers.getContractAt("ContractManager", contractManagerDeployment.address)

  await tweetStorageContract.setControllerAddr(contract.address)
  await contractManagerContract.setAddress('TweetController', contract.address)

  console.log(`TweetController deployed to ${contract.address}`);
};

export default func
func.tags = ['TweetController']
func.dependencies = ['TweetStorage', 'ContractManager']