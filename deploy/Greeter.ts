/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async (hre: HardhatRuntimeEnvironment) => {
  const {deployments, getNamedAccounts} = hre
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const contract = await deploy("Greeter", {
    from: deployer,
    args: ["Hello, world!"],
  });

  console.log(`Greeter deployed to ${contract.address}`);
};
