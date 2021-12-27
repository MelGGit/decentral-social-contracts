import { ethers } from "hardhat";
import { assert } from "chai";
import { TweetStorage__factory, TweetStorage, TweetController, ContractManager__factory, TweetController__factory } from '../../typechain-types'
import { assertVMException } from "../utils";

describe('TweetStorage Integration Test', () => {

  let tweetstorage: TweetStorage
  let tweetcontroller: TweetController

  const tweetText = 'Hello World!'
  const tweetUserId = 1

  before(async () => {
    const TweetStorage = await ethers.getContractFactory('TweetStorage') as TweetStorage__factory
    tweetstorage = await TweetStorage.deploy()
    await tweetstorage.deployed()
    const ContractManager = await ethers.getContractFactory('ContractManager') as ContractManager__factory
    const contractmanager = await ContractManager.deploy()
    await contractmanager.deployed()
    const TweetController = await ethers.getContractFactory('TweetController') as TweetController__factory
    tweetcontroller = await TweetController.deploy()
    await tweetcontroller.deployed()

    await contractmanager.setAddress('TweetStorage', tweetstorage.address)
    await tweetstorage.setControllerAddr(tweetcontroller.address)
    await tweetcontroller.setManagerAddr(contractmanager.address)
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
    const tx = await tweetcontroller.createTweet(tweetUserId, tweetText)

    assert.isOk(tx)
  })

})
