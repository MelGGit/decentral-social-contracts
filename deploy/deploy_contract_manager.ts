
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction, Deployment } from 'hardhat-deploy/types';

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment): Promise<boolean> => {
  // @ts-ignore
  const { deployments, getNamedAccounts } = hre
  const { deploy, execute } = deployments;
  const { deployer } = await getNamedAccounts();

  const contract = await deploy("ContractManager", {
    from: deployer,
  });

  // @ts-ignore
  const contractManagerContract = await hre.ethers.getContractAt("ContractManager", contract.address)
  const tweetStorageDeployment: Deployment = await deployments.get('TweetStorage');
  const userStorageDeployment: Deployment = await deployments.get('UserStorage');

  await contractManagerContract.setAddress("UserStorage", userStorageDeployment.address)
  await contractManagerContract.setAddress("TweetStorage", tweetStorageDeployment.address)

  console.log(`ContractManager deployed to ${contract.address}`);

  return true
};

export default func
func.tags = ['ContractManager']
func.dependencies = ['TweetStorage', 'UserStorage']
func.id = 'ContractManager'