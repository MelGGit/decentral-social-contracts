
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment): Promise<boolean> => {
  // @ts-ignore
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const contract = await deploy("UserStorage", {
    from: deployer,
  });

  console.log(`UserStorage deployed to ${contract.address}`);

  return true
};

export default func
func.tags = ["UserStorage"]
func.id = 'UserStorage'