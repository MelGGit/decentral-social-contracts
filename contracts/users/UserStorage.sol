// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "../helpers/BaseStorage.sol";

// import "hardhat/console.sol";

contract UserStorage is BaseStorage {
    struct Profile {
        uint256 id;
        bytes32 username;
        bytes32 firstName;
        bytes32 lastName;
        string bio;
        string eMail;
    }

    mapping(uint256 => Profile) public profiles;
    mapping(address => uint256) public addresses;
    mapping(bytes32 => uint256) public usernames;

    uint256 latestUserId;

    function createUser(
        address _address,
        bytes32 _username,
        bytes32 _firstName,
        bytes32 _lastName,
        string memory _bio,
        string memory _eMail
    ) public onlyController returns (uint256) {
        latestUserId++;

        profiles[latestUserId] = Profile(
            latestUserId,
            _username,
            _firstName,
            _lastName,
            _bio,
            _eMail
        );

        addresses[_address] = latestUserId;
        usernames[_username] = latestUserId;

        return latestUserId;
    }
}
