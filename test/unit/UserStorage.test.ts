import { ethers } from "hardhat";
import { assert, expect } from "chai";
import { UserStorage__factory, UserStorage } from '../../typechain-types'
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe('UserStorage Unit Test', () => {

  let sender: SignerWithAddress
  let controller: SignerWithAddress
  let account2: SignerWithAddress
  let userstorage: UserStorage
  const username = ethers.utils.formatBytes32String('tristan')

  beforeEach(async () => {
    [sender, controller, account2] = await ethers.getSigners()
    const UserStorage = await ethers.getContractFactory('UserStorage') as UserStorage__factory
    userstorage = await UserStorage.deploy()
    await userstorage.deployed()
    await userstorage.setControllerAddr(controller.address)
  })

  it('should create tweet with ID 1', async () => {
    const expectedId = 1
    const firstUserId = await userstorage.connect(controller.address).callStatic.createUser(username)
    expect(firstUserId).to.be.equal(expectedId)
  })

  it('should revert', async () => {
    expect(userstorage.createUser(username)).to.be.reverted
  })
})
