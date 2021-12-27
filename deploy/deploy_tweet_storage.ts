
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment): Promise<boolean> => {
  // @ts-ignore
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const contract = await deploy("TweetStorage", {
    from: deployer,
  });

  console.log(`TweetStorage deployed to ${contract.address}`);

  return true
};

export default func;
func.tags = ['TweetStorage']
func.id = 'TweetStorage'