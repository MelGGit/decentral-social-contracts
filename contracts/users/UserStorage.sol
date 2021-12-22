// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

contract UserStorage {
    struct Profile {
        uint256 id;
        bytes32 username;
    }

    mapping(uint256 => Profile) profiles;

    uint256 latestUserId;

    function createUser(bytes32 _username) public returns (uint256) {
        latestUserId++;

        profiles[latestUserId] = Profile(latestUserId, _username);

        return latestUserId;
    }

    function getUserFromId(uint256 _userId)
        public
        view
        returns (uint256, bytes32)
    {
        return (profiles[_userId].id, profiles[_userId].username);
    }
}
