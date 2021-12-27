
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction, Deployment } from 'hardhat-deploy/types';
import { ethers } from "ethers";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment): Promise<void> => {
  // @ts-ignore
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const contract = await deploy("UserController", {
    from: deployer,
  });
  // @ts-ignore
  const userControllerContract = await hre.ethers.getContractAt('UserController', contract.address)
  const userStorageDeployment: Deployment = await deployments.get('UserStorage');
  const contractManagerDeployment: Deployment = await deployments.get('ContractManager');
  // @ts-ignore
  const userStorageContract = await hre.ethers.getContractAt("UserStorage", userStorageDeployment.address)
  // @ts-ignore
  const contractManagerContract = await hre.ethers.getContractAt("ContractManager", contractManagerDeployment.address)

  await userControllerContract.setManagerAddr(contractManagerDeployment.address)
  await userStorageContract.setControllerAddr(contract.address)
  await contractManagerContract.setAddress('UserController', contract.address)

  console.log(`UserController deployed to ${contract.address}`);
};

export default func
func.tags = ['UserController']
func.dependencies = ['UserStorage', 'ContractManager']