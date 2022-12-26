/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IControllerManagerInterface extends utils.Interface {
  functions: {
    "addController(address)": FunctionFragment;
    "isControllerWhitelisted(address)": FunctionFragment;
    "removeController(address)": FunctionFragment;
    "viewCountWhitelistedControllers()": FunctionFragment;
    "viewWhitelistedControllers(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addController"
      | "isControllerWhitelisted"
      | "removeController"
      | "viewCountWhitelistedControllers"
      | "viewWhitelistedControllers"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addController",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isControllerWhitelisted",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeController",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "viewCountWhitelistedControllers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "viewWhitelistedControllers",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isControllerWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewCountWhitelistedControllers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewWhitelistedControllers",
    data: BytesLike
  ): Result;

  events: {
    "ControllerRemoved(address)": EventFragment;
    "ControllerWhitelisted(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ControllerRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ControllerWhitelisted"): EventFragment;
}

export interface ControllerRemovedEventObject {
  controller: string;
}
export type ControllerRemovedEvent = TypedEvent<
  [string],
  ControllerRemovedEventObject
>;

export type ControllerRemovedEventFilter =
  TypedEventFilter<ControllerRemovedEvent>;

export interface ControllerWhitelistedEventObject {
  controller: string;
}
export type ControllerWhitelistedEvent = TypedEvent<
  [string],
  ControllerWhitelistedEventObject
>;

export type ControllerWhitelistedEventFilter =
  TypedEventFilter<ControllerWhitelistedEvent>;

export interface IControllerManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IControllerManagerInterface;

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
    addController(
      controller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isControllerWhitelisted(
      controller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    removeController(
      controller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    viewCountWhitelistedControllers(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    viewWhitelistedControllers(
      cursor: PromiseOrValue<BigNumberish>,
      size: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber]>;
  };

  addController(
    controller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isControllerWhitelisted(
    controller: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  removeController(
    controller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  viewCountWhitelistedControllers(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  viewWhitelistedControllers(
    cursor: PromiseOrValue<BigNumberish>,
    size: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string[], BigNumber]>;

  callStatic: {
    addController(
      controller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isControllerWhitelisted(
      controller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeController(
      controller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    viewCountWhitelistedControllers(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewWhitelistedControllers(
      cursor: PromiseOrValue<BigNumberish>,
      size: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber]>;
  };

  filters: {
    "ControllerRemoved(address)"(
      controller?: PromiseOrValue<string> | null
    ): ControllerRemovedEventFilter;
    ControllerRemoved(
      controller?: PromiseOrValue<string> | null
    ): ControllerRemovedEventFilter;

    "ControllerWhitelisted(address)"(
      controller?: PromiseOrValue<string> | null
    ): ControllerWhitelistedEventFilter;
    ControllerWhitelisted(
      controller?: PromiseOrValue<string> | null
    ): ControllerWhitelistedEventFilter;
  };

  estimateGas: {
    addController(
      controller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isControllerWhitelisted(
      controller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeController(
      controller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    viewCountWhitelistedControllers(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewWhitelistedControllers(
      cursor: PromiseOrValue<BigNumberish>,
      size: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addController(
      controller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isControllerWhitelisted(
      controller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeController(
      controller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    viewCountWhitelistedControllers(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewWhitelistedControllers(
      cursor: PromiseOrValue<BigNumberish>,
      size: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}