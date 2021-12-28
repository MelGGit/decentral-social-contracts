/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Owned, OwnedInterface } from "../Owned";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610182806100326000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80639c675eaa1461003b578063f2fde38b1461006a575b600080fd5b60005461004e906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b61007d61007836600461011c565b61007f565b005b6000546001600160a01b031633146100e75760405162461bcd60e51b815260206004820152602160248201527f6f6e6c7920746865204f776e65722063616e2063616c6c2066756e6374696f6e6044820152602160f81b606482015260840160405180910390fd5b6001600160a01b0381166100fa57600080fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60006020828403121561012e57600080fd5b81356001600160a01b038116811461014557600080fd5b939250505056fea26469706673582212208bf27f23ef21e4013c4ced52edb377ceada89208842c389796878b09af34fa3964736f6c63430008090033";

type OwnedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Owned__factory extends ContractFactory {
  constructor(...args: OwnedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Owned> {
    return super.deploy(overrides || {}) as Promise<Owned>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Owned {
    return super.attach(address) as Owned;
  }
  connect(signer: Signer): Owned__factory {
    return super.connect(signer) as Owned__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnedInterface {
    return new utils.Interface(_abi) as OwnedInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Owned {
    return new Contract(address, _abi, signerOrProvider) as Owned;
  }
}
