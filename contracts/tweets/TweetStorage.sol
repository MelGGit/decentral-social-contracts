// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "../helpers/BaseStorage.sol";

contract TweetStorage is BaseStorage {
    mapping(uint256 => Tweet) public tweets;
    mapping(uint256 => bool) public doesTweetExist;
    mapping(uint256 => int256) public tweetToVotes;
    mapping(uint256 => uint256[]) userTweetIds;
    uint256[] public tweetIds;

    struct Tweet {
        uint256 id;
        string text;
        uint256 userId;
        uint256 postedAt;
    }

    uint256 latestTweetId;

    function createTweet(uint256 _userId, string memory _text)
        public
        onlyController
        returns (uint256)
    {
        latestTweetId++;

        tweets[latestTweetId] = Tweet(
            latestTweetId,
            _text,
            _userId,
            block.timestamp
        );
        userTweetIds[_userId].push(latestTweetId);
        tweetIds.push(latestTweetId);
        tweetToVotes[latestTweetId] = 0;
        doesTweetExist[latestTweetId] = true;

        return latestTweetId;
    }

    function getTweetIdsFromUser(uint256 _userId)
        public
        view
        returns (uint256[] memory)
    {
        return userTweetIds[_userId];
    }

    function getNumTweets() public view returns (uint256) {
        return tweetIds.length;
    }

    function changeVoteInTweet(uint256 _tweetId, int256 changeValue)
        public
        onlyController
    {
        tweetToVotes[_tweetId] = tweetToVotes[_tweetId] + changeValue;
    }
}
