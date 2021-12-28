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
}
