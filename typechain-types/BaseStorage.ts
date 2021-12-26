/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BaseStorageInterface extends utils.Interface {
  functions: {
    "controllerAddr()": FunctionFragment;
    "ownerAddr()": FunctionFragment;
    "setControllerAddr(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "controllerAddr",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ownerAddr", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setControllerAddr",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "controllerAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ownerAddr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setControllerAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {};
}

export interface BaseStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseStorageInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    controllerAddr(overrides?: CallOverrides): Promise<[string]>;

    ownerAddr(overrides?: CallOverrides): Promise<[string]>;

    setControllerAddr(
      _controllerAdrr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  controllerAddr(overrides?: CallOverrides): Promise<string>;

  ownerAddr(overrides?: CallOverrides): Promise<string>;

  setControllerAddr(
    _controllerAdrr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    controllerAddr(overrides?: CallOverrides): Promise<string>;

    ownerAddr(overrides?: CallOverrides): Promise<string>;

    setControllerAddr(
      _controllerAdrr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    controllerAddr(overrides?: CallOverrides): Promise<BigNumber>;

    ownerAddr(overrides?: CallOverrides): Promise<BigNumber>;

    setControllerAddr(
      _controllerAdrr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    controllerAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setControllerAddr(
      _controllerAdrr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
