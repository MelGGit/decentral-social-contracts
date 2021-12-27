// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "./Owned.sol";

contract BaseController is Owned {
    address managerAddr;

    function setManager(address _managerAddr) public onlyOwner {
        managerAddr = _managerAddr;
    }
}
