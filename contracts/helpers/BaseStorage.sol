// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "./Owned.sol";

contract BaseStorage is Owned {
    address public controllerAddr;

    modifier onlyController() {
        require(msg.sender == controllerAddr);
        _;
    }

    function setControllerAddr(address _controllerAdrr) public onlyOwner {
        controllerAddr = _controllerAdrr;
    }
}
