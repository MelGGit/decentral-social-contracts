// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

contract Owned {
    address public ownerAddr;

    modifier onlyOwner() {
        require(msg.sender == ownerAddr);
        _;
    }

    constructor() {
        ownerAddr = msg.sender;
    }

    function transferOwnership(address _newOwner) public onlyOwner {
        require(_newOwner != address(0));

        ownerAddr = _newOwner;
    }
}
