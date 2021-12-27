// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "../helpers/BaseStorage.sol";

// import "hardhat/console.sol";

contract UserStorage is BaseStorage {
    struct Profile {
        uint256 id;
        bytes32 username;
    }

    mapping(uint256 => Profile) public profiles;

    uint256 latestUserId;

    function createUser(bytes32 _username)
        public
        onlyController
        returns (uint256)
    {
        latestUserId++;

        profiles[latestUserId] = Profile(latestUserId, _username);

        return latestUserId;
    }
}
