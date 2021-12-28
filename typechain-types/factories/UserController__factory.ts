/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UserController,
  UserControllerInterface,
} from "../UserController";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_username",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_firstName",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_lastName",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_bio",
        type: "string",
      },
      {
        internalType: "string",
        name: "_eMail",
        type: "string",
      },
    ],
    name: "createUser",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_managerAddr",
        type: "address",
      },
    ],
    name: "setManagerAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163317905561067d806100326000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80637978b231146100515780639c675eaa14610066578063f2fde38b14610096578063f901175b146100a9575b600080fd5b61006461005f366004610437565b6100ca565b005b600054610079906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100646100a4366004610437565b610103565b6100bc6100b73660046104fe565b61014f565b60405190815260200161008d565b6000546001600160a01b031633146100e157600080fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b0316331461011a57600080fd5b6001600160a01b03811661012d57600080fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60015460405163bf40fac160e01b815260206004820152600b60248201526a5573657253746f7261676560a81b60448201526000916001600160a01b0316908290829063bf40fac19060640160206040518083038186803b1580156101b357600080fd5b505afa1580156101c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101eb919061057f565b6040516320b4e25560e21b815233600482015290915081906001600160a01b038216906382d389549060240160206040518083038186803b15801561022f57600080fd5b505afa158015610243573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610267919061059c565b156102c55760405162461bcd60e51b8152602060048201526024808201527f54686973206164647265737320616c72656164792068617320616e206163636f6044820152633ab73a1760e11b60648201526084015b60405180910390fd5b60405163ec4d88d760e01b8152600481018a90526001600160a01b0382169063ec4d88d79060240160206040518083038186803b15801561030557600080fd5b505afa158015610319573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033d919061059c565b1561038a5760405162461bcd60e51b815260206004820152601e60248201527f54686520757365726e616d6520697320616c72656164792074616b656e2e000060448201526064016102bc565b60405163d399e63d60e01b81526001600160a01b0382169063d399e63d906103c09033908d908d908d908d908d90600401610602565b602060405180830381600087803b1580156103da57600080fd5b505af11580156103ee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610412919061059c565b9998505050505050505050565b6001600160a01b038116811461043457600080fd5b50565b60006020828403121561044957600080fd5b81356104548161041f565b9392505050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261048257600080fd5b813567ffffffffffffffff8082111561049d5761049d61045b565b604051601f8301601f19908116603f011681019082821181831017156104c5576104c561045b565b816040528381528660208588010111156104de57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600060a0868803121561051657600080fd5b853594506020860135935060408601359250606086013567ffffffffffffffff8082111561054357600080fd5b61054f89838a01610471565b9350608088013591508082111561056557600080fd5b5061057288828901610471565b9150509295509295909350565b60006020828403121561059157600080fd5b81516104548161041f565b6000602082840312156105ae57600080fd5b5051919050565b6000815180845260005b818110156105db576020818501810151868301820152016105bf565b818111156105ed576000602083870101525b50601f01601f19169290920160200192915050565b60018060a01b038716815285602082015284604082015283606082015260c06080820152600061063560c08301856105b5565b82810360a084015261041281856105b556fea26469706673582212206a94642af670b6209877bb7430bb8a6aa53e3dc8f5f4b8693f58b0a6511f296364736f6c63430008090033";

type UserControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UserControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UserController__factory extends ContractFactory {
  constructor(...args: UserControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UserController> {
    return super.deploy(overrides || {}) as Promise<UserController>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UserController {
    return super.attach(address) as UserController;
  }
  connect(signer: Signer): UserController__factory {
    return super.connect(signer) as UserController__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UserControllerInterface {
    return new utils.Interface(_abi) as UserControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UserController {
    return new Contract(address, _abi, signerOrProvider) as UserController;
  }
}
