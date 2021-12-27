import { ethers } from "hardhat";
import { assert } from "chai";
import { UserController__factory, UserController, UserStorage, UserStorage__factory, ContractManager__factory } from '../../typechain-types'
import { assertVMException } from "../utils";

describe('Users Integration Test', () => {

  let usercontroller: UserController
  let userstorage: UserStorage
  const username = ethers.utils.formatBytes32String('tristan')

  before(async () => {
    const UserStorage = await ethers.getContractFactory('UserStorage') as UserStorage__factory
    userstorage = await UserStorage.deploy()
    await userstorage.deployed()
    const ContractManager = await ethers.getContractFactory('ContractManager') as ContractManager__factory
    const contractmanager = await ContractManager.deploy()
    await contractmanager.deployed()
    const UserController = await ethers.getContractFactory('UserController') as UserController__factory
    usercontroller = await UserController.deploy()
    await usercontroller.deployed()
    await contractmanager.setAddress('UserStorage', userstorage.address)
    await userstorage.setControllerAddr(usercontroller.address)
    await usercontroller.setManagerAddr(contractmanager.address)
  })

  it('can create a user with controller', async () => {

    const tx = await usercontroller.createUser(username)
    assert.isOk(tx)
  })

  it('cant create a user without controller', async () => {
    try {
      await userstorage.createUser(username)
      assert.fail()
    } catch (error) {
      assertVMException(error as Error)
    }
  })

})
