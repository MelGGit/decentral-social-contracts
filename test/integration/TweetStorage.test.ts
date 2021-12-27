import { ethers } from "hardhat";
import { assert } from "chai";
import { TweetStorage__factory, TweetStorage } from '../../typechain-types'
import { assertVMException } from "../utils";

describe('TweetStorage Integration Test', () => {

  let tweetstorage: TweetStorage

  const tweetText = 'Hello World!'
  const tweetUserId = 1

  before(async () => {
    const TweetStorage = await ethers.getContractFactory('TweetStorage') as TweetStorage__factory
    tweetstorage = await TweetStorage.deploy()
    await tweetstorage.deployed()
    // await tweetstorage.createTweet(tweetUserId, tweetText)
  })

  it('cant create a tweet without controller', async () => {
    try {
      await tweetstorage.createTweet(tweetUserId, tweetText)
      assert.fail()
    } catch (error) {
      assertVMException(error as Error)
    }
  })

  it('can get a tweet by an id', async () => {
    await tweetstorage.createTweet(tweetUserId, tweetText)
    const tweet = await tweetstorage.tweets(1)
    const { id, text, userId } = tweet

    assert.equal(Number(id), 1)
    assert.equal(text, tweetText)
    assert.equal(Number(userId), tweetUserId)
  })

})
