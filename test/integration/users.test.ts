import { ethers } from "hardhat";
import { assert } from "chai";
import { UserController__factory, UserController, UserStorage, UserStorage__factory, ContractManager__factory } from '../../typechain-types'
import { assertVMException } from "../utils";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe('Users Integration Test', () => {

  let sender: SignerWithAddress
  let controller: SignerWithAddress
  let account2: SignerWithAddress
  let usercontroller: UserController
  let userstorage: UserStorage
  const username = ethers.utils.formatBytes32String('Dude')
  const firstName = ethers.utils.formatBytes32String('Mel')
  const lastName = ethers.utils.formatBytes32String('Grosser')

  before(async () => {
    [sender, controller, account2] = await ethers.getSigners()
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

    const tx = await usercontroller.createUser(username, firstName, lastName, 'Frontend and Blockchain Developer', 'test@test.com')
    assert.isOk(tx)
  })

  it('cant create a user without controller', async () => {
    try {
      await userstorage.createUser('0x0', username, firstName, lastName, 'Frontend and Blockchain Developer', 'test@test.com')
      assert.fail()
    } catch (error) {
      assertVMException(error as Error)
    }
  })

})
