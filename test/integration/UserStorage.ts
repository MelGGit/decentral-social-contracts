import { ethers } from "hardhat";
import { assert, expect } from "chai";
import { UserStorage__factory, UserStorage } from '../../typechain-types'
import { assertVMException } from "../utils";

describe('UserStorage Integration Test', () => {

  let userstorage: UserStorage

  before(async () => {
    const UserStorage = await ethers.getContractFactory('UserStorage') as UserStorage__factory
    userstorage = await UserStorage.deploy()
    await userstorage.deployed()
    // const newUsername = ethers.utils.formatBytes32String('tristan')
    // await userstorage.createUser(newUsername)
  })

  it('cant create a user without controller', async () => {
    try {
      const username = ethers.utils.formatBytes32String('tristan')
      await userstorage.createUser(username)
      assert.fail()
    } catch (error) {
      assertVMException(error as Error)
    }
  })

  it('can get a user by an id', async () => {
    const userId = 1
    const newUsername = ethers.utils.formatBytes32String('tristan')
    await userstorage.createUser(newUsername)
    const userInfo = await userstorage.profiles(userId)

    const username = ethers.utils.parseBytes32String(userInfo[1])

    assert.equal(username, 'tristan')
  })

})
