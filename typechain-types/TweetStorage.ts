/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
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

export interface TweetStorageInterface extends utils.Interface {
  functions: {
    "controllerAddr()": FunctionFragment;
    "createTweet(uint256,string)": FunctionFragment;
    "ownerAddr()": FunctionFragment;
    "setControllerAddr(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "tweets(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "controllerAddr",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createTweet",
    values: [BigNumberish, string]
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
  encodeFunctionData(
    functionFragment: "tweets",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "controllerAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createTweet",
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
  decodeFunctionResult(functionFragment: "tweets", data: BytesLike): Result;

  events: {};
}

export interface TweetStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TweetStorageInterface;

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

    createTweet(
      _userId: BigNumberish,
      _text: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ownerAddr(overrides?: CallOverrides): Promise<[string]>;

    setControllerAddr(
      _controllerAdrr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tweets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber] & {
        id: BigNumber;
        text: string;
        userId: BigNumber;
        postedAt: BigNumber;
      }
    >;
  };

  controllerAddr(overrides?: CallOverrides): Promise<string>;

  createTweet(
    _userId: BigNumberish,
    _text: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ownerAddr(overrides?: CallOverrides): Promise<string>;

  setControllerAddr(
    _controllerAdrr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tweets(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, BigNumber] & {
      id: BigNumber;
      text: string;
      userId: BigNumber;
      postedAt: BigNumber;
    }
  >;

  callStatic: {
    controllerAddr(overrides?: CallOverrides): Promise<string>;

    createTweet(
      _userId: BigNumberish,
      _text: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerAddr(overrides?: CallOverrides): Promise<string>;

    setControllerAddr(
      _controllerAdrr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    tweets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber] & {
        id: BigNumber;
        text: string;
        userId: BigNumber;
        postedAt: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    controllerAddr(overrides?: CallOverrides): Promise<BigNumber>;

    createTweet(
      _userId: BigNumberish,
      _text: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ownerAddr(overrides?: CallOverrides): Promise<BigNumber>;

    setControllerAddr(
      _controllerAdrr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tweets(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    controllerAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createTweet(
      _userId: BigNumberish,
      _text: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ownerAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setControllerAddr(
      _controllerAdrr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tweets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}