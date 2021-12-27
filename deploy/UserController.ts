
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction, Deployment } from 'hardhat-deploy/types';

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment): Promise<void> => {
  // @ts-ignore
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const contract = await deploy("UserController", {
    from: deployer,
  });
  const userStorageDeployment: Deployment = await deployments.get('UserStorage');
  // @ts-ignore
  const userStorageContract = await hre.ethers.getContractAt("UserStorage", userStorageDeployment.address)

  await userStorageContract.setControllerAddr(contract.address)

  console.log(`UserController deployed to ${contract.address}`);
};

export default func
func.tags = ['UserController']
func.dependencies = ['UserStorage']