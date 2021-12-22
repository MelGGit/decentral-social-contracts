
import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async (hre: HardhatRuntimeEnvironment): Promise<void> => {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const contract = await deploy("UserStorage", {
    from: deployer,
  });

  console.log(`UserStorage deployed to ${contract.address}`);
};