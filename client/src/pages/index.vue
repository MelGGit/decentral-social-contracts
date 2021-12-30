<script setup lang="ts">
import { Contract, ethers, ContractTransaction } from 'ethers'
import * as tweetStorage from '../../../artifacts/contracts/tweets/TweetStorage.sol/TweetStorage.json'
import * as tweetController from '../../../artifacts/contracts/tweets/TweetController.sol/TweetController.json'
import * as userStorage from '../../../artifacts/contracts/users/UserStorage.sol/UserStorage.json'
import * as userController from '../../../artifacts/contracts/users/UserController.sol/UserController.json'

const tweetStorageAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
const tweetControllerAddress = '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707'
const userStorageAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
const userControllerAddress = '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318'
const tweetStorageContract = ref<Contract>()
const tweetControllerContract = ref<Contract>()
const userStorageContract = ref<Contract>()
const userControllerContract = ref<Contract>()
const numberTweets = ref(0)
const latestTweetText = ref('')
const text = ref('')

const init = async () => {
  // const { ethereum } = window
  // const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
}

const fetchFeed = async () => {
  console.log('test')
  numberTweets.value = await tweetStorageContract.value?.getNumTweets()
  // tweetIds.value = await tweetStorageContract.value?.tweetIds(1)
}

const send = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  tweetStorageContract.value = new ethers.Contract(
    tweetStorageAddress,
    tweetStorage.abi,
    signer
  )
  tweetControllerContract.value = new ethers.Contract(
    tweetControllerAddress,
    tweetController.abi,
    signer
  )
  userStorageContract.value = new ethers.Contract(
    userStorageAddress,
    userStorage.abi,
    signer
  )
  userControllerContract.value = new ethers.Contract(
    userControllerAddress,
    userController.abi,
    signer
  )
}

const createUser = async () => {
  const tx: ContractTransaction = await userControllerContract.value?.createUser(ethers.utils.formatBytes32String('Dude'), ethers.utils.formatBytes32String('Mel'), ethers.utils.formatBytes32String('Grosser'), 'I like coding..', 'test@test.de')
  tx.wait()
}

const logAccount = async () => {
  const profile = await userStorageContract.value?.profiles(1)
  const userID = await userStorageContract.value?.addresses('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
  console.log(profile)
  console.log(userID)
}

const createTweet = async () => {
  const tx: ContractTransaction = await tweetControllerContract.value?.createTweet(text.value)
  await tx.wait()
  await fetchFeed()
  await getLatestTweet()
}

const getLatestTweet = async () => {
  const object = await tweetStorageContract.value?.tweets(numberTweets.value - 1)
  latestTweetText.value = object.text
}

</script>

<template>
  <div flex="~ col" justify="center" align="items-center" gap="20">
    <div m="b-10">Number of Tweets: {{ numberTweets }}</div>
    <div>{{ latestTweetText }}</div>
    <div flex="~" justify="center" gap="10">
      <button border="~ solid white" @click="init">Connect</button>
      <button border="~ solid white" @click="send">Instanziate Contract</button>
      <button border="~ solid white" @click="fetchFeed">Fetch</button>
      <button border="~ solid white" @click="logAccount">Log Account</button>
      <button border="~ solid white" @click="getLatestTweet">Latest Tweet</button>
    </div>
    <div flex="~ col" justify="center" text="left" gap="4">
      <span>Username: Dude</span>
      <span>First Name: Mel</span>
      <span>Last Name: Grosser</span>
      <span>Bio: I like coding...</span>
      <span>Mail: test@test.de</span>
      <button border="~ solid white" @click="createUser">Create User</button>
    </div>
    <div flex="~ col" gap="4" justify="center" align="items-center">
      <button border="~ solid white" @click="createTweet">Create Tweet</button>
      <input v-model="text" type="text" text="black" p="x-10 y-2" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
