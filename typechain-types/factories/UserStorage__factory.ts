/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UserStorage, UserStorageInterface } from "../UserStorage";

const _abi = [
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610161806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063abf7bfd81461003b578063c36fe3d614610061575b600080fd5b61004e6100493660046100e9565b61009d565b6040519081526020015b60405180910390f35b61008861006f3660046100e9565b6000602081905290815260409020805460019091015482565b60408051928352602083019190915201610058565b60018054600091826100ae83610102565b909155505060408051808201825260018054808352602080840196875260009182528190529290922090518155925192810192909255505490565b6000602082840312156100fb57600080fd5b5035919050565b600060001982141561012457634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220920db0324291925de95c626a9f137d3bb20870fc933f981e014d32beb06f1e9f64736f6c63430008090033";

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
