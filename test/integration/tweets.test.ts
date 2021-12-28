import { ethers } from "hardhat";
import { assert } from "chai";
import { TweetStorage__factory, TweetStorage, TweetController, ContractManager__factory, TweetController__factory, UserStorage__factory, UserController__factory } from '../../typechain-types'
import { assertVMException } from "../utils";

describe('TweetStorage Integration Test', () => {

  let tweetstorage: TweetStorage
  let tweetcontroller: TweetController

  const tweetText = 'Hello World!'
  const tweetUserId = 1
  const username = ethers.utils.formatBytes32String('Dude')
  const firstName = ethers.utils.formatBytes32String('Mel')
  const lastName = ethers.utils.formatBytes32String('Grosser')

  before(async () => {
    const TweetStorage = await ethers.getContractFactory('TweetStorage') as TweetStorage__factory
    tweetstorage = await TweetStorage.deploy()
    await tweetstorage.deployed()
    const ContractManager = await ethers.getContractFactory('ContractManager') as ContractManager__factory
    const contractmanager = await ContractManager.deploy()
    await contractmanager.deployed()
    const UserStorage = await ethers.getContractFactory('UserStorage') as UserStorage__factory
    const userstorage = await UserStorage.deploy()
    await userstorage.deployed()
    const TweetController = await ethers.getContractFactory('TweetController') as TweetController__factory
    tweetcontroller = await TweetController.deploy()
    await tweetcontroller.deployed()
    const UserController = await ethers.getContractFactory('UserController') as UserController__factory
    const usercontroller = await UserController.deploy()
    await usercontroller.deployed()

    await contractmanager.setAddress('UserStorage', userstorage.address)
    await contractmanager.setAddress('TweetStorage', tweetstorage.address)
    await tweetstorage.setControllerAddr(tweetcontroller.address)
    await tweetcontroller.setManagerAddr(contractmanager.address)
    await usercontroller.setManagerAddr(contractmanager.address)
    await userstorage.setControllerAddr(usercontroller.address)
    await usercontroller.createUser(username, firstName, lastName, 'Some bio', 'an email')
  })

  it('cant create a tweet without controller', async () => {
    try {
      await tweetstorage.createTweet(tweetUserId, tweetText)
      assert.fail()
    } catch (error) {
      assertVMException(error as Error)
    }
  })

  it('can create tweet with controller', async () => {
    const tx = await tweetcontroller.createTweet(tweetText)

    assert.isOk(tx)
  })

  it('can get all tweet IDs from a user', async () => {
    const expectedTweetId = 1
    const ids = await tweetstorage.getTweetIdsFromUser(tweetUserId)
    assert.isOk(Array.isArray(ids))
    assert.equal(Number(ids[0]), expectedTweetId)
  })

})
