// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "../helpers/BaseController.sol";
import "../ContractManager.sol";
import "./UserStorage.sol";

// import "hardhat/console.sol";

contract UserController is BaseController {
    function createUser(
        bytes32 _username,
        bytes32 _firstName,
        bytes32 _lastName,
        string memory _bio,
        string memory _eMail
    ) public returns (uint256) {
        ContractManager _manager = ContractManager(managerAddr);
        address _userStorageAddr = _manager.getAddress("UserStorage");
        UserStorage _userStorage = UserStorage(_userStorageAddr);

        require(
            _userStorage.addresses(msg.sender) == 0,
            "This address already has an account."
        );
        require(
            _userStorage.usernames(_username) == 0,
            "The username is already taken."
        );

        return
            _userStorage.createUser(
                msg.sender,
                _username,
                _firstName,
                _lastName,
                _bio,
                _eMail
            );
    }
}
