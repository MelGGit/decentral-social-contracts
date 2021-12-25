import { ethers } from "hardhat";
import { assert, expect } from "chai";
import { TweetStorage__factory, TweetStorage } from '../typechain-types'

describe('TweetStorage', () => {

  let tweetstorage: TweetStorage

  beforeEach(async () => {
    const TweetStorage = await ethers.getContractFactory('TweetStorage') as TweetStorage__factory
    tweetstorage = await TweetStorage.deploy()
    await tweetstorage.deployed()
  })

  it('can create a tweet and returns the id', async () => {
    const expectedTweetId = 1
    const userId = 1;

    const firstTweetId = await tweetstorage.callStatic.createTweet(userId, "Hello World!")
    expect(firstTweetId).to.be.equal(expectedTweetId)
  })
})
