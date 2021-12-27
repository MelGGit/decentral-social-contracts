import { ethers, waffle } from "hardhat";
import { expect } from "chai";
import { TweetStorage__factory, TweetStorage } from '../../typechain-types'
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

const { deployContract } = waffle

describe('TweetStorage Unit Test', () => {

  let sender: SignerWithAddress
  let controller: SignerWithAddress
  let account2: SignerWithAddress
  let tweetstorage: TweetStorage
  const userId = 1;

  beforeEach(async () => {
    [sender, controller, account2] = await ethers.getSigners()
    const TweetStorage = await ethers.getContractFactory('TweetStorage') as TweetStorage__factory
    tweetstorage = await TweetStorage.deploy()
    await tweetstorage.deployed()
    await tweetstorage.setControllerAddr(controller.address)
  })

  it('should create tweet with ID 1', async () => {
    const expectedTweetId = 1
    const firstTweetId = await tweetstorage.connect(controller.address).callStatic.createTweet(userId, "Hello World!")
    expect(firstTweetId).to.be.equal(expectedTweetId)
  })

  it('should revert', async () => {
    expect(tweetstorage.createTweet(userId, "Hello World!")).to.be.reverted
  })
})
