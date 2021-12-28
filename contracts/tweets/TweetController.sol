// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "../helpers/BaseController.sol";
import "../ContractManager.sol";
import "./TweetStorage.sol";
import "../users/UserStorage.sol";

contract TweetController is BaseController {
    function createTweet(string memory _text) public returns (uint256) {
        ContractManager _manager = ContractManager(managerAddr);

        address _userStorageAddr = _manager.getAddress("UserStorage");
        UserStorage _userStorage = UserStorage(_userStorageAddr);

        uint256 _userId = _userStorage.addresses(msg.sender);

        require(_userId != 0, "User does not exist!");

        address _tweetStorageAddr = _manager.getAddress("TweetStorage");
        TweetStorage _tweetStorage = TweetStorage(_tweetStorageAddr);

        return _tweetStorage.createTweet(_userId, _text);
    }

    function changeVoteInTweet(uint256 _tweetId, int256 changeValue) public {
        require(
            changeValue == 1 || changeValue == -1,
            "can only change votes by +1 or -1"
        );
        ContractManager _manager = ContractManager(managerAddr);
        address _tweetStorageAddr = _manager.getAddress("TweetStorage");
        TweetStorage _tweetStorage = TweetStorage(_tweetStorageAddr);

        require(_tweetStorage.doesTweetExist(_tweetId), "Tweet does not exist");

        _tweetStorage.changeVoteInTweet(_tweetId, changeValue);
    }
}
