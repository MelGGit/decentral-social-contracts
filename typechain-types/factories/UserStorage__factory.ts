/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UserStorage, UserStorageInterface } from "../UserStorage";

const _abi = [
  {
    inputs: [],
    name: "controllerAddr",
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
        internalType: "bytes32",
        name: "_username",
        type: "bytes32",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "profiles",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "username",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_controllerAdrr",
        type: "address",
      },
    ],
    name: "setControllerAddr",
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
  "0x608060405234801561001057600080fd5b50600080546001600160a01b031916331790556102c4806100326000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80636981fa7d146100675780639c675eaa1461007c578063abf7bfd8146100ac578063c36fe3d6146100cd578063ee255c5714610109578063f2fde38b1461011c575b600080fd5b61007a61007536600461021c565b61012f565b005b60005461008f906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100bf6100ba36600461024c565b610168565b6040519081526020016100a3565b6100f46100db36600461024c565b6002602052600090815260409020805460019091015482565b604080519283526020830191909152016100a3565b60015461008f906001600160a01b031681565b61007a61012a36600461021c565b6101d0565b6000546001600160a01b0316331461014657600080fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001546000906001600160a01b0316331461018257600080fd5b6003805490600061019283610265565b909155505060408051808201825260038054808352602080840187815260009283526002909152939020915182559151600190910155549050919050565b6000546001600160a01b031633146101e757600080fd5b6001600160a01b0381166101fa57600080fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60006020828403121561022e57600080fd5b81356001600160a01b038116811461024557600080fd5b9392505050565b60006020828403121561025e57600080fd5b5035919050565b600060001982141561028757634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220ecdedf37173a416ee6f11fec4529c1ae507cd81349d419c68e46d33b6f14aacb64736f6c63430008090033";

type UserStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UserStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UserStorage__factory extends ContractFactory {
  constructor(...args: UserStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UserStorage> {
    return super.deploy(overrides || {}) as Promise<UserStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UserStorage {
    return super.attach(address) as UserStorage;
  }
  connect(signer: Signer): UserStorage__factory {
    return super.connect(signer) as UserStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UserStorageInterface {
    return new utils.Interface(_abi) as UserStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UserStorage {
    return new Contract(address, _abi, signerOrProvider) as UserStorage;
  }
}
