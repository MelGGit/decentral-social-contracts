import { ethers } from "hardhat";
import { assert, expect } from "chai";
import { UserStorage__factory, UserStorage } from '../../typechain-types'

describe('UserStorage Unit Test', () => {

  let userstorage: UserStorage

  beforeEach(async () => {
    const UserStorage = await ethers.getContractFactory('UserStorage') as UserStorage__factory
    userstorage = await UserStorage.deploy()
    await userstorage.deployed()
  })

  it('can create a first user and returns its id of 1', async () => {
    const expectedId = 1

    const username = ethers.utils.formatBytes32String('tristan')
    const firstUserId = await userstorage.callStatic.createUser(username)
    expect(firstUserId).to.be.equal(expectedId)
  })
})
