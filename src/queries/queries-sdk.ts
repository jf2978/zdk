import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date (isoformat) */
  Date: any;
  /** Date with time (isoformat) */
  DateTime: any;
  /** The GenericScalar scalar type represents a generic GraphQL scalar value that could be: List or Object. */
  JSONScalar: any;
};

export type AggregateAttribute = {
  __typename?: 'AggregateAttribute';
  traitType: Scalars['String'];
  valueMetrics: Array<AggregateAttributeValue>;
};

export type AggregateAttributeValue = {
  __typename?: 'AggregateAttributeValue';
  count: Scalars['Int'];
  percent: Scalars['Float'];
  value: Scalars['String'];
};

export type AggregateAttributesQueryInput = {
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  ownerAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export type AggregateStat = {
  __typename?: 'AggregateStat';
  floorPrice?: Maybe<Scalars['Float']>;
  nftCount: Scalars['Int'];
  ownerCount: Scalars['Int'];
  ownersByCount: OwnerCountConnection;
  salesVolume: SalesVolume;
};


export type AggregateStatFloorPriceArgs = {
  networks: Array<NetworkInput>;
  where: CollectionAddressAndAttributesInput;
};


export type AggregateStatNftCountArgs = {
  networks: Array<NetworkInput>;
  where: CollectionAddressOwnerAddressAttributesInput;
};


export type AggregateStatOwnerCountArgs = {
  networks: Array<NetworkInput>;
  where: CollectionAddressAndAttributesInput;
};


export type AggregateStatOwnersByCountArgs = {
  networks: Array<NetworkInput>;
  pagination: PaginationInput;
  where: CollectionAddressAndAttributesInput;
};


export type AggregateStatSalesVolumeArgs = {
  networks: Array<NetworkInput>;
  timeFilter?: InputMaybe<TimeFilter>;
  where: CollectionAddressAndAttributesInput;
};

export type AttributeFilter = {
  traitType: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export enum Chain {
  Mainnet = 'MAINNET'
}

export type Collection = {
  __typename?: 'Collection';
  address: Scalars['String'];
  attributes?: Maybe<Array<CollectionAttribute>>;
  description: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  networkInfo: NetworkInfo;
  symbol?: Maybe<Scalars['String']>;
  totalSupply?: Maybe<Scalars['Int']>;
};

export type CollectionAddressAndAttributesInput = {
  attributes?: InputMaybe<Array<AttributeFilter>>;
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
};

export type CollectionAddressOwnerAddressAttributesInput = {
  attributes?: InputMaybe<Array<AttributeFilter>>;
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  ownerAddresses?: InputMaybe<Array<Scalars['String']>>;
};

export type CollectionAttribute = {
  __typename?: 'CollectionAttribute';
  traitType?: Maybe<Scalars['String']>;
  valueMetrics: Array<CollectionAttributeValue>;
};

export type CollectionAttributeValue = {
  __typename?: 'CollectionAttributeValue';
  count: Scalars['Int'];
  percent: Scalars['Float'];
  value: Scalars['String'];
};

export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  hasNextPage: Scalars['Boolean'];
  nodes: Array<Collection>;
  pageInfo: PageInfo;
};

export enum CollectionSortKey {
  Created = 'CREATED',
  Name = 'NAME',
  None = 'NONE'
}

export type CollectionSortKeySortInput = {
  sortDirection: SortDirection;
  sortKey: CollectionSortKey;
};

export type CollectionsQueryInput = {
  collectionAddresses: Array<Scalars['String']>;
};

export type Currency = {
  __typename?: 'Currency';
  address: Scalars['String'];
  decimals: Scalars['Int'];
  name: Scalars['String'];
};

export type CurrencyAmount = {
  __typename?: 'CurrencyAmount';
  currency: Currency;
  decimal: Scalars['Float'];
  raw: Scalars['String'];
};

export type Event = {
  __typename?: 'Event';
  collectionAddress: Scalars['String'];
  eventType: EventType;
  networkInfo: NetworkInfo;
  properties: EventProperties;
  tokenId: Scalars['String'];
  transactionInfo: TransactionInfo;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  hasNextPage: Scalars['Boolean'];
  nodes: Array<Event>;
  pageInfo: PageInfo;
};

export type EventProperties = MintEvent | TransferEvent | V1MarketEvent | V2AuctionEvent | V3AskEvent;

export enum EventSortKey {
  Created = 'CREATED',
  None = 'NONE'
}

export type EventSortKeySortInput = {
  sortDirection: SortDirection;
  sortKey: EventSortKey;
};

export enum EventType {
  MintEvent = 'MINT_EVENT',
  TransferEvent = 'TRANSFER_EVENT',
  V1MarketEvent = 'V1_MARKET_EVENT',
  V2AuctionEvent = 'V2_AUCTION_EVENT',
  V3AskEvent = 'V3_ASK_EVENT'
}

export type EventsQueryFilter = {
  eventTypes?: InputMaybe<Array<EventType>>;
  recipientAddresses?: InputMaybe<Array<Scalars['String']>>;
  senderAddresses?: InputMaybe<Array<Scalars['String']>>;
  timeFilter?: InputMaybe<TimeFilter>;
};

export type EventsQueryInput = {
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export type Market = {
  __typename?: 'Market';
  collectionAddress: Scalars['String'];
  marketAddress: Scalars['String'];
  marketType: MarketType;
  networkInfo: NetworkInfo;
  price?: Maybe<PriceAtTime>;
  properties: MarketProperties;
  status: Scalars['String'];
  tokenId: Scalars['String'];
  transactionInfo: TransactionInfo;
};

export enum MarketCategory {
  Ask = 'ASK',
  Auction = 'AUCTION',
  Offer = 'OFFER'
}

export type MarketProperties = V1Ask | V1BidShare | V1Offer | V2Auction | V3Ask;

export enum MarketSortKey {
  EthPrice = 'ETH_PRICE',
  NativePrice = 'NATIVE_PRICE',
  None = 'NONE',
  TimedSaleEnding = 'TIMED_SALE_ENDING'
}

export type MarketSortKeySortInput = {
  sortDirection: SortDirection;
  sortKey: MarketSortKey;
};

export enum MarketStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED'
}

export enum MarketType {
  V1Ask = 'V1_ASK',
  V1BidShare = 'V1_BID_SHARE',
  V1Offer = 'V1_OFFER',
  V2Auction = 'V2_AUCTION',
  V3Ask = 'V3_ASK'
}

export type MarketTypeFilter = {
  bidderAddresses?: InputMaybe<Array<Scalars['String']>>;
  marketType: MarketType;
  statuses?: InputMaybe<Array<MarketStatus>>;
};

export type MarketWithToken = {
  __typename?: 'MarketWithToken';
  market: Market;
  token?: Maybe<Token>;
};

export type MarketWithTokenConnection = {
  __typename?: 'MarketWithTokenConnection';
  hasNextPage: Scalars['Boolean'];
  nodes: Array<MarketWithToken>;
  pageInfo: PageInfo;
};

export type MarketsQueryFilter = {
  marketFilters?: InputMaybe<Array<MarketTypeFilter>>;
  priceFilter?: InputMaybe<PriceFilter>;
};

export type MarketsQueryInput = {
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export type MediaEncoding = {
  __typename?: 'MediaEncoding';
  large: Scalars['String'];
  poster: Scalars['String'];
  preview: Scalars['String'];
  thumbnail: Scalars['String'];
};

export enum MediaType {
  Audio = 'AUDIO',
  Gif = 'GIF',
  Html = 'HTML',
  Image = 'IMAGE',
  Text = 'TEXT',
  Video = 'VIDEO'
}

export type Mint = {
  __typename?: 'Mint';
  collectionAddress: Scalars['String'];
  fee: PriceAtTime;
  networkInfo: NetworkInfo;
  originatorAddress: Scalars['String'];
  toAddress: Scalars['String'];
  tokenId: Scalars['String'];
  transactionInfo: TransactionInfo;
};

export type MintEvent = {
  __typename?: 'MintEvent';
  collectionAddress: Scalars['String'];
  fee: PriceAtTime;
  originatorAddress: Scalars['String'];
  toAddress: Scalars['String'];
  tokenId: Scalars['String'];
};

export type MintInfo = {
  __typename?: 'MintInfo';
  mintContext: TransactionInfo;
  originatorAddress: Scalars['String'];
  price: PriceAtTime;
  toAddress: Scalars['String'];
};

export enum MintSortKey {
  None = 'NONE',
  Price = 'PRICE',
  Time = 'TIME',
  TokenId = 'TOKEN_ID'
}

export type MintSortKeySortInput = {
  sortDirection: SortDirection;
  sortKey: MintSortKey;
};

export type MintWithTokenAndMarkets = {
  __typename?: 'MintWithTokenAndMarkets';
  markets: Array<Market>;
  mint: Mint;
  token?: Maybe<Token>;
};


export type MintWithTokenAndMarketsMarketsArgs = {
  filter?: InputMaybe<MarketsQueryFilter>;
  pagination: PaginationInput;
  sort: MarketSortKeySortInput;
};

export type MintWithTokenAndMarketsConnection = {
  __typename?: 'MintWithTokenAndMarketsConnection';
  hasNextPage: Scalars['Boolean'];
  nodes: Array<MintWithTokenAndMarkets>;
  pageInfo: PageInfo;
};

export type MintsQueryFilter = {
  priceFilter?: InputMaybe<PriceFilter>;
  timeFilter?: InputMaybe<TimeFilter>;
};

export type MintsQueryInput = {
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  minterAddresses?: InputMaybe<Array<Scalars['String']>>;
  recipientAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export enum Network {
  Ethereum = 'ETHEREUM'
}

export type NetworkInfo = {
  __typename?: 'NetworkInfo';
  chain: Chain;
  network: Network;
};

export type NetworkInput = {
  chain?: Chain;
  network?: Network;
};

export type OwnerCount = {
  __typename?: 'OwnerCount';
  count: Scalars['Int'];
  owner: Scalars['String'];
};

export type OwnerCountConnection = {
  __typename?: 'OwnerCountConnection';
  hasNextPage: Scalars['Boolean'];
  nodes: Array<OwnerCount>;
  pageInfo: PageInfo;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type PaginationInput = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
};

export type PriceAtTime = {
  __typename?: 'PriceAtTime';
  blockNumber: Scalars['Int'];
  ethPrice?: Maybe<CurrencyAmount>;
  nativePrice: CurrencyAmount;
  usdcPrice?: Maybe<CurrencyAmount>;
};

export type PriceFilter = {
  currencyAddress?: InputMaybe<Scalars['String']>;
  maximumEthPrice?: InputMaybe<Scalars['String']>;
  maximumNativePrice?: InputMaybe<Scalars['String']>;
  minimumEthPrice?: InputMaybe<Scalars['String']>;
  minimumNativePrice?: InputMaybe<Scalars['String']>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  /** Gets the total set of NFT attributes */
  aggregateAttributes: Array<AggregateAttribute>;
  /** Gets counts, sales volume, and other statistics */
  aggregateStat: AggregateStat;
  /** NFT collection data */
  collections: CollectionConnection;
  /** Contract event information, e.g. Sales, Transfers, Mints, etc. */
  events: EventConnection;
  /** Data for specific ZORA markets, e.g. Buy Now, Auctions, Offers */
  markets: MarketWithTokenConnection;
  /** Historical minting data */
  mints: MintWithTokenAndMarketsConnection;
  /** Historical sales data from ZORA, OpenSea, LooksRare, 0x, and more */
  sales: SaleWithTokenConnection;
  /** Returns search results for a query */
  search: SearchResultConnection;
  /** Gets data on a single token */
  token?: Maybe<TokenWithFullMarketHistory>;
  /** Gets data for multiple tokens */
  tokens: TokenWithMarketsSummaryConnection;
};


export type RootQueryAggregateAttributesArgs = {
  networks: Array<NetworkInput>;
  where: AggregateAttributesQueryInput;
};


export type RootQueryCollectionsArgs = {
  networks: Array<NetworkInput>;
  pagination: PaginationInput;
  sort: CollectionSortKeySortInput;
  where?: InputMaybe<CollectionsQueryInput>;
};


export type RootQueryEventsArgs = {
  filter?: InputMaybe<EventsQueryFilter>;
  networks: Array<NetworkInput>;
  pagination: PaginationInput;
  sort: EventSortKeySortInput;
  where?: InputMaybe<EventsQueryInput>;
};


export type RootQueryMarketsArgs = {
  filter?: InputMaybe<MarketsQueryFilter>;
  networks: Array<NetworkInput>;
  pagination: PaginationInput;
  sort: MarketSortKeySortInput;
  where?: InputMaybe<MarketsQueryInput>;
};


export type RootQueryMintsArgs = {
  filter?: InputMaybe<MintsQueryFilter>;
  networks: Array<NetworkInput>;
  pagination: PaginationInput;
  sort: MintSortKeySortInput;
  where?: InputMaybe<MintsQueryInput>;
};


export type RootQuerySalesArgs = {
  filter?: InputMaybe<SalesQueryFilter>;
  networks: Array<NetworkInput>;
  pagination: PaginationInput;
  sort: SaleSortKeySortInput;
  where?: InputMaybe<SalesQueryInput>;
};


export type RootQuerySearchArgs = {
  pagination: SearchPaginationInput;
  query: SearchQuery;
};


export type RootQueryTokenArgs = {
  network: NetworkInput;
  token: TokenInput;
};


export type RootQueryTokensArgs = {
  filter?: InputMaybe<TokensQueryFilter>;
  networks: Array<NetworkInput>;
  pagination: PaginationInput;
  sort: TokenSortInput;
  where?: InputMaybe<TokensQueryInput>;
};

export type Sale = {
  __typename?: 'Sale';
  buyerAddress: Scalars['String'];
  collectionAddress: Scalars['String'];
  networkInfo: NetworkInfo;
  price: PriceAtTime;
  saleContractAddress?: Maybe<Scalars['String']>;
  saleType: SaleType;
  sellerAddress: Scalars['String'];
  tokenId: Scalars['String'];
  transactionInfo: TransactionInfo;
};

export enum SaleSortKey {
  EthPrice = 'ETH_PRICE',
  NativePrice = 'NATIVE_PRICE',
  None = 'NONE',
  Time = 'TIME'
}

export type SaleSortKeySortInput = {
  sortDirection: SortDirection;
  sortKey: SaleSortKey;
};

export enum SaleType {
  FoundationSale = 'FOUNDATION_SALE',
  LarvaLabsSale = 'LARVA_LABS_SALE',
  LooksRareSale = 'LOOKS_RARE_SALE',
  OpenseaBundleSale = 'OPENSEA_BUNDLE_SALE',
  OpenseaSingleSale = 'OPENSEA_SINGLE_SALE',
  RaribleSale = 'RARIBLE_SALE',
  SuperrareSale = 'SUPERRARE_SALE',
  ZeroxSale = 'ZEROX_SALE',
  ZoraV2AuctionSale = 'ZORA_V2_AUCTION_SALE',
  ZoraV3AskSale = 'ZORA_V3_ASK_SALE'
}

export type SaleWithToken = {
  __typename?: 'SaleWithToken';
  sale: Sale;
  token?: Maybe<Token>;
};

export type SaleWithTokenConnection = {
  __typename?: 'SaleWithTokenConnection';
  hasNextPage: Scalars['Boolean'];
  nodes: Array<SaleWithToken>;
  pageInfo: PageInfo;
};

export type SalesQueryFilter = {
  priceFilter?: InputMaybe<PriceFilter>;
  saleTypes?: InputMaybe<Array<SaleType>>;
  timeFilter?: InputMaybe<TimeFilter>;
};

export type SalesQueryInput = {
  buyerAddresses?: InputMaybe<Array<Scalars['String']>>;
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  sellerAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export type SalesVolume = {
  __typename?: 'SalesVolume';
  ethPrice: Scalars['Float'];
  totalCount: Scalars['Int'];
  usdcPrice: Scalars['Float'];
};

export type SearchPaginationInput = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
};

export type SearchQuery = {
  text: Scalars['String'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  address: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  entityType: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
};

export type SearchResultConnection = {
  __typename?: 'SearchResultConnection';
  hasNextPage: Scalars['Boolean'];
  nodes: Array<SearchResult>;
  pageInfo: PageInfo;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type TimeFilter = {
  endDate?: InputMaybe<Scalars['String']>;
  lookbackHours?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['String']>;
};

export type Token = {
  __typename?: 'Token';
  attributes?: Maybe<Array<TokenAttribute>>;
  collectionAddress: Scalars['String'];
  content?: Maybe<TokenContentMedia>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<TokenContentMedia>;
  lastRefreshTime?: Maybe<Scalars['DateTime']>;
  metadata?: Maybe<Scalars['JSONScalar']>;
  mintInfo?: Maybe<MintInfo>;
  name?: Maybe<Scalars['String']>;
  networkInfo: NetworkInfo;
  owner?: Maybe<Scalars['String']>;
  tokenContract?: Maybe<TokenContract>;
  tokenId: Scalars['String'];
  tokenUrl?: Maybe<Scalars['String']>;
  tokenUrlMimeType?: Maybe<Scalars['String']>;
};

export type TokenAttribute = {
  __typename?: 'TokenAttribute';
  displayType?: Maybe<Scalars['String']>;
  traitType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TokenContentMedia = {
  __typename?: 'TokenContentMedia';
  mediaEncoding?: Maybe<MediaEncoding>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TokenContract = {
  __typename?: 'TokenContract';
  chain: Scalars['Int'];
  collectionAddress: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  network: Scalars['String'];
  symbol?: Maybe<Scalars['String']>;
  totalSupply?: Maybe<Scalars['Int']>;
};

export type TokenInput = {
  address: Scalars['String'];
  tokenId: Scalars['String'];
};

export type TokenSortInput = {
  sortAxis?: InputMaybe<MarketCategory>;
  sortDirection: SortDirection;
  sortKey: TokenSortKey;
};

export enum TokenSortKey {
  EthPrice = 'ETH_PRICE',
  Minted = 'MINTED',
  NativePrice = 'NATIVE_PRICE',
  None = 'NONE',
  TimedSaleEnding = 'TIMED_SALE_ENDING',
  TokenId = 'TOKEN_ID',
  Transferred = 'TRANSFERRED'
}

export type TokenWithFullMarketHistory = {
  __typename?: 'TokenWithFullMarketHistory';
  events: Array<Event>;
  markets: Array<Market>;
  sales: Array<Sale>;
  token: Token;
};


export type TokenWithFullMarketHistoryEventsArgs = {
  filter?: InputMaybe<EventsQueryFilter>;
  pagination: PaginationInput;
  sort: EventSortKeySortInput;
};


export type TokenWithFullMarketHistoryMarketsArgs = {
  filter?: InputMaybe<MarketsQueryFilter>;
  pagination: PaginationInput;
  sort: MarketSortKeySortInput;
};


export type TokenWithFullMarketHistorySalesArgs = {
  filter?: InputMaybe<SalesQueryFilter>;
  pagination: PaginationInput;
  sort: SaleSortKeySortInput;
};

export type TokenWithMarketsSummary = {
  __typename?: 'TokenWithMarketsSummary';
  events: Array<Event>;
  marketsSummary: Array<Market>;
  sales: Array<Sale>;
  token: Token;
};


export type TokenWithMarketsSummaryEventsArgs = {
  filter?: InputMaybe<EventsQueryFilter>;
  pagination: PaginationInput;
  sort: EventSortKeySortInput;
};


export type TokenWithMarketsSummarySalesArgs = {
  filter?: InputMaybe<SalesQueryFilter>;
  pagination: PaginationInput;
  sort: SaleSortKeySortInput;
};

export type TokenWithMarketsSummaryConnection = {
  __typename?: 'TokenWithMarketsSummaryConnection';
  hasNextPage: Scalars['Boolean'];
  nodes: Array<TokenWithMarketsSummary>;
  pageInfo: PageInfo;
};

export type TokensQueryFilter = {
  attributeFilters?: InputMaybe<Array<AttributeFilter>>;
  marketFilters?: InputMaybe<Array<MarketTypeFilter>>;
  mediaType?: InputMaybe<MediaType>;
  priceFilter?: InputMaybe<PriceFilter>;
};

export type TokensQueryInput = {
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  ownerAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export type TransactionInfo = {
  __typename?: 'TransactionInfo';
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['Date'];
  logIndex?: Maybe<Scalars['Int']>;
  transactionHash?: Maybe<Scalars['String']>;
};

export type TransferEvent = {
  __typename?: 'TransferEvent';
  collectionAddress: Scalars['String'];
  fromAddress: Scalars['String'];
  toAddress: Scalars['String'];
  tokenId: Scalars['String'];
};

export type V1Ask = {
  __typename?: 'V1Ask';
  amount: PriceAtTime;
  collectionAddress: Scalars['String'];
  currency: Scalars['String'];
  status: V1MarketEntityStatus;
  tokenId: Scalars['String'];
};

export type V1BidShare = {
  __typename?: 'V1BidShare';
  collectionAddress: Scalars['String'];
  creator: Scalars['String'];
  owner: Scalars['String'];
  previousOwner: Scalars['String'];
  status: V1MarketEntityStatus;
  tokenId: Scalars['String'];
};

export type V1MarketAskCreatedEventProperties = {
  __typename?: 'V1MarketAskCreatedEventProperties';
  amount: Scalars['String'];
  currency: Scalars['String'];
  price: PriceAtTime;
};

export type V1MarketAskRemovedEventProperties = {
  __typename?: 'V1MarketAskRemovedEventProperties';
  amount: Scalars['String'];
  currency: Scalars['String'];
  price: PriceAtTime;
};

export type V1MarketBidShareUpdatedEventProperties = {
  __typename?: 'V1MarketBidShareUpdatedEventProperties';
  creator: Scalars['String'];
  owner: Scalars['String'];
  previousOwner: Scalars['String'];
};

export enum V1MarketEntityStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED'
}

export type V1MarketEvent = {
  __typename?: 'V1MarketEvent';
  address: Scalars['String'];
  collectionAddress: Scalars['String'];
  eventType: V1MarketEventType;
  properties: V1MarketEventProperties;
  tokenId: Scalars['String'];
};

export type V1MarketEventProperties = V1MarketAskCreatedEventProperties | V1MarketAskRemovedEventProperties | V1MarketBidShareUpdatedEventProperties | V1MarketOfferCreatedEventProperties | V1MarketOfferFinalizedEventProperties | V1MarketOfferRemovedEventProperties;

export enum V1MarketEventType {
  V1MarketAskCreated = 'V1_MARKET_ASK_CREATED',
  V1MarketAskRemoved = 'V1_MARKET_ASK_REMOVED',
  V1MarketBidCreated = 'V1_MARKET_BID_CREATED',
  V1MarketBidFinalized = 'V1_MARKET_BID_FINALIZED',
  V1MarketBidRemoved = 'V1_MARKET_BID_REMOVED',
  V1MarketBidShareUpdated = 'V1_MARKET_BID_SHARE_UPDATED'
}

export type V1MarketOfferCreatedEventProperties = {
  __typename?: 'V1MarketOfferCreatedEventProperties';
  amount: Scalars['String'];
  bidder: Scalars['String'];
  currency: Scalars['String'];
  price: PriceAtTime;
  recipient: Scalars['String'];
  sellOnShare: Scalars['String'];
};

export type V1MarketOfferFinalizedEventProperties = {
  __typename?: 'V1MarketOfferFinalizedEventProperties';
  amount: Scalars['String'];
  bidder: Scalars['String'];
  currency: Scalars['String'];
  price: PriceAtTime;
  recipient: Scalars['String'];
  sellOnShare: Scalars['String'];
};

export type V1MarketOfferRemovedEventProperties = {
  __typename?: 'V1MarketOfferRemovedEventProperties';
  amount: Scalars['String'];
  bidder: Scalars['String'];
  currency: Scalars['String'];
  price: PriceAtTime;
  recipient: Scalars['String'];
  sellOnShare: Scalars['String'];
};

export type V1Offer = {
  __typename?: 'V1Offer';
  amount: PriceAtTime;
  bidder: Scalars['String'];
  collectionAddress: Scalars['String'];
  currency: Scalars['String'];
  recipient: Scalars['String'];
  sellOnShare: Scalars['String'];
  status: V1MarketEntityStatus;
  tokenId: Scalars['String'];
};

export type V2Auction = {
  __typename?: 'V2Auction';
  address: Scalars['String'];
  amountCuratorReceived?: Maybe<PriceAtTime>;
  amountTokenOwnerReceived?: Maybe<PriceAtTime>;
  approved: Scalars['Boolean'];
  auctionCurrency: Scalars['String'];
  auctionId: Scalars['String'];
  collectionAddress: Scalars['String'];
  curator: Scalars['String'];
  curatorFeePercentage: Scalars['Int'];
  duration: Scalars['String'];
  estimatedExpirationTime?: Maybe<Scalars['DateTime']>;
  firstBidTime?: Maybe<Scalars['DateTime']>;
  highestBidPrice?: Maybe<PriceAtTime>;
  highestBidder?: Maybe<Scalars['String']>;
  reservePrice: PriceAtTime;
  status: V2AuctionStatus;
  tokenId: Scalars['String'];
  tokenOwner: Scalars['String'];
};

export type V2AuctionApprovalUpdatedEventProperties = {
  __typename?: 'V2AuctionApprovalUpdatedEventProperties';
  approved: Scalars['Boolean'];
};

export type V2AuctionBidEventProperties = {
  __typename?: 'V2AuctionBidEventProperties';
  extended: Scalars['Boolean'];
  firstBid: Scalars['Boolean'];
  price: PriceAtTime;
  sender: Scalars['String'];
  value: Scalars['String'];
};

export type V2AuctionCanceledEventProperties = {
  __typename?: 'V2AuctionCanceledEventProperties';
  tokenOwner: Scalars['String'];
};

export type V2AuctionCreatedEventProperties = {
  __typename?: 'V2AuctionCreatedEventProperties';
  auctionCurrency: Scalars['String'];
  curator: Scalars['String'];
  curatorFeePercentage: Scalars['Int'];
  duration: Scalars['String'];
  price: PriceAtTime;
  reservePrice: Scalars['String'];
  tokenOwner: Scalars['String'];
};

export type V2AuctionDurationExtendedEventProperties = {
  __typename?: 'V2AuctionDurationExtendedEventProperties';
  duration: Scalars['String'];
};

export type V2AuctionEndedEventProperties = {
  __typename?: 'V2AuctionEndedEventProperties';
  amount: Scalars['String'];
  auctionCurrency: Scalars['String'];
  curator: Scalars['String'];
  curatorFee: Scalars['String'];
  tokenOwner: Scalars['String'];
  winner: Scalars['String'];
};

export type V2AuctionEvent = {
  __typename?: 'V2AuctionEvent';
  address: Scalars['String'];
  auctionId: Scalars['Int'];
  collectionAddress: Scalars['String'];
  eventType: V2AuctionEventType;
  properties: V2AuctionEventProperties;
  tokenId: Scalars['String'];
};

export type V2AuctionEventProperties = V2AuctionApprovalUpdatedEventProperties | V2AuctionBidEventProperties | V2AuctionCanceledEventProperties | V2AuctionCreatedEventProperties | V2AuctionDurationExtendedEventProperties | V2AuctionEndedEventProperties | V2AuctionReservePriceUpdatedEventProperties;

export enum V2AuctionEventType {
  V2AuctionApprovalUpdated = 'V2_AUCTION_APPROVAL_UPDATED',
  V2AuctionBid = 'V2_AUCTION_BID',
  V2AuctionCanceled = 'V2_AUCTION_CANCELED',
  V2AuctionCreated = 'V2_AUCTION_CREATED',
  V2AuctionDurationExtended = 'V2_AUCTION_DURATION_EXTENDED',
  V2AuctionEnded = 'V2_AUCTION_ENDED',
  V2AuctionReservePriceUpdated = 'V2_AUCTION_RESERVE_PRICE_UPDATED'
}

export type V2AuctionReservePriceUpdatedEventProperties = {
  __typename?: 'V2AuctionReservePriceUpdatedEventProperties';
  price: PriceAtTime;
  reservePrice: Scalars['String'];
};

export enum V2AuctionStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED'
}

export type V3Ask = {
  __typename?: 'V3Ask';
  address: Scalars['String'];
  askCurrency: Scalars['String'];
  askPrice: PriceAtTime;
  buyer?: Maybe<Scalars['String']>;
  collectionAddress: Scalars['String'];
  finder?: Maybe<Scalars['String']>;
  findersFeeBps: Scalars['Int'];
  seller: Scalars['String'];
  sellerFundsRecipient: Scalars['String'];
  status: V3AskStatus;
  tokenId: Scalars['String'];
};

export type V3AskCanceledEventProperties = {
  __typename?: 'V3AskCanceledEventProperties';
  askCurrency: Scalars['String'];
  askPrice: Scalars['String'];
  findersFeeBps: Scalars['Int'];
  price: PriceAtTime;
  seller: Scalars['String'];
  sellerFundsRecipient: Scalars['String'];
};

export type V3AskCreatedEventProperties = {
  __typename?: 'V3AskCreatedEventProperties';
  askCurrency: Scalars['String'];
  askPrice: Scalars['String'];
  findersFeeBps: Scalars['Int'];
  price: PriceAtTime;
  seller: Scalars['String'];
  sellerFundsRecipient: Scalars['String'];
};

export type V3AskEvent = {
  __typename?: 'V3AskEvent';
  address: Scalars['String'];
  collectionAddress: Scalars['String'];
  eventType: V3AskEventType;
  properties: V3AskEventProperties;
  tokenId: Scalars['String'];
};

export type V3AskEventProperties = V3AskCanceledEventProperties | V3AskCreatedEventProperties | V3AskFilledEventProperties | V3AskPriceUpdatedEventProperties;

export enum V3AskEventType {
  V3AskCanceled = 'V3_ASK_CANCELED',
  V3AskCreated = 'V3_ASK_CREATED',
  V3AskFilled = 'V3_ASK_FILLED',
  V3AskPriceUpdated = 'V3_ASK_PRICE_UPDATED'
}

export type V3AskFilledEventProperties = {
  __typename?: 'V3AskFilledEventProperties';
  askCurrency: Scalars['String'];
  askPrice: Scalars['String'];
  buyer: Scalars['String'];
  finder: Scalars['String'];
  findersFeeBps: Scalars['Int'];
  price: PriceAtTime;
  seller: Scalars['String'];
  sellerFundsRecipient: Scalars['String'];
};

export type V3AskPriceUpdatedEventProperties = {
  __typename?: 'V3AskPriceUpdatedEventProperties';
  askCurrency: Scalars['String'];
  askPrice: Scalars['String'];
  findersFeeBps: Scalars['Int'];
  price: PriceAtTime;
  seller: Scalars['String'];
  sellerFundsRecipient: Scalars['String'];
};

export enum V3AskStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED'
}

export const TransactionDetailsFragmentDoc = gql`
    fragment TransactionDetails on TransactionInfo {
  blockNumber
  blockTimestamp
  transactionHash
  logIndex
}
    `;
export const PriceSummaryFragmentDoc = gql`
    fragment PriceSummary on PriceAtTime {
  blockNumber
  ethPrice {
    decimal
    raw
  }
  nativePrice {
    decimal
    raw
    currency {
      address
      decimals
      name
    }
  }
  usdcPrice {
    decimal
    raw
  }
}
    `;
export const SaleInfoFragmentDoc = gql`
    fragment SaleInfo on Sale {
  saleContractAddress
  transactionInfo {
    ...TransactionDetails
  }
  buyerAddress
  collectionAddress
  price {
    ...PriceSummary
  }
  sellerAddress
  tokenId
}
    ${TransactionDetailsFragmentDoc}
${PriceSummaryFragmentDoc}`;
export const MarketInfoFragmentDoc = gql`
    fragment MarketInfo on Market {
  collectionAddress
  marketAddress
  marketType
  transactionInfo {
    ...TransactionDetails
  }
  price {
    ...PriceSummary
  }
  status
  networkInfo {
    chain
    network
  }
}
    ${TransactionDetailsFragmentDoc}
${PriceSummaryFragmentDoc}`;
export const V2AuctionMarketPropertiesFragmentDoc = gql`
    fragment V2AuctionMarketProperties on V2Auction {
  __typename
  firstBidTime
  highestBidder
  curator
  collectionAddress
  curatorFeePercentage
  status
  tokenId
  auctionCurrency
  duration
  estimatedExpirationTime
  auctionStatus: status
  tokenOwner
  address
  auctionId
  approved
  reservePrice {
    ...PriceSummary
  }
  highestBidPrice {
    ...PriceSummary
  }
}
    ${PriceSummaryFragmentDoc}`;
export const V3AskPropertiesFragmentDoc = gql`
    fragment V3AskProperties on V3Ask {
  __typename
  buyer
  finder
  findersFeeBps
  sellerFundsRecipient
  askStatus: status
  seller
  address
  askCurrency
  collectionAddress
  askPrice {
    ...PriceSummary
  }
}
    ${PriceSummaryFragmentDoc}`;
export const MarketPropertiesFullFragmentDoc = gql`
    fragment MarketPropertiesFull on MarketProperties {
  ...V2AuctionMarketProperties
  ...V3AskProperties
}
    ${V2AuctionMarketPropertiesFragmentDoc}
${V3AskPropertiesFragmentDoc}`;
export const MarketDetailsFragmentDoc = gql`
    fragment MarketDetails on Market {
  properties {
    ...MarketPropertiesFull
  }
}
    ${MarketPropertiesFullFragmentDoc}`;
export const TokenContractInfoFragmentDoc = gql`
    fragment TokenContractInfo on TokenContract {
  name
  network
  description
  collectionAddress
  symbol
  chain
}
    `;
export const MintDetailsFragmentDoc = gql`
    fragment MintDetails on MintInfo {
  price {
    ...PriceSummary
  }
  originatorAddress
  toAddress
  mintContext {
    ...TransactionDetails
  }
}
    ${PriceSummaryFragmentDoc}
${TransactionDetailsFragmentDoc}`;
export const FullMediaFragmentDoc = gql`
    fragment FullMedia on TokenContentMedia {
  size
  url
  size
  mimeType
  mimeType
  mediaEncoding {
    large
    poster
    preview
    thumbnail
  }
}
    `;
export const TokenInfoFragmentDoc = gql`
    fragment TokenInfo on Token {
  tokenId
  tokenContract {
    ...TokenContractInfo
  }
  mintInfo {
    ...MintDetails
  }
  collectionAddress
  lastRefreshTime
  owner
  name
  description
  image {
    ...FullMedia
  }
  content {
    ...FullMedia
  }
}
    ${TokenContractInfoFragmentDoc}
${MintDetailsFragmentDoc}
${FullMediaFragmentDoc}`;
export const EventInfoFragmentDoc = gql`
    fragment EventInfo on Event {
  transactionInfo {
    ...TransactionDetails
  }
  eventType
  collectionAddress
  tokenId
  properties {
    ... on MintEvent {
      tokenId
      collectionAddress
      originatorAddress
      toAddress
      fee {
        ...PriceSummary
      }
    }
    ... on TransferEvent {
      fromAddress
      toAddress
      collectionAddress
      tokenId
    }
    ... on V1MarketEvent {
      marketEventType: eventType
      address
      collectionAddress
      tokenId
    }
    ... on V2AuctionEvent {
      auctionEventType: eventType
      address
      auctionId
      collectionAddress
      tokenId
    }
    ... on V3AskEvent {
      v3AskEventType: eventType
      address
      collectionAddress
      tokenId
    }
  }
}
    ${TransactionDetailsFragmentDoc}
${PriceSummaryFragmentDoc}`;
export const TokenDetailsFragmentDoc = gql`
    fragment TokenDetails on Token {
  metadata
  tokenUrl
  tokenUrlMimeType
  attributes {
    traitType
    value
    displayType
  }
}
    `;
export const CollectionInfoFragmentDoc = gql`
    fragment CollectionInfo on Collection {
  address
  description
  name
  symbol
  totalSupply
}
    `;
export const CollectionDetailsFragmentDoc = gql`
    fragment CollectionDetails on Collection {
  attributes {
    traitType
    valueMetrics {
      count
      percent
      value
    }
  }
}
    `;
export const PageInfoDefaultFragmentDoc = gql`
    fragment PageInfoDefault on PageInfo {
  limit
  offset
}
    `;
export const OwnerCountInfoFragmentDoc = gql`
    fragment OwnerCountInfo on OwnerCount {
  owner
  count
}
    `;
export const EventsDocument = gql`
    query events($networks: [NetworkInput!]!, $filter: EventsQueryFilter, $pagination: PaginationInput!, $sort: EventSortKeySortInput!, $where: EventsQueryInput) {
  events(
    networks: $networks
    filter: $filter
    pagination: $pagination
    sort: $sort
    where: $where
  ) {
    hasNextPage
    pageInfo {
      limit
      offset
    }
    nodes {
      ...EventInfo
    }
  }
}
    ${EventInfoFragmentDoc}`;
export const MarketsDocument = gql`
    query markets($networks: [NetworkInput!]!, $filter: MarketsQueryFilter, $pagination: PaginationInput!, $sort: MarketSortKeySortInput!, $where: MarketsQueryInput, $includeFullDetails: Boolean!) {
  markets(
    networks: $networks
    filter: $filter
    sort: $sort
    where: $where
    pagination: $pagination
  ) {
    hasNextPage
    pageInfo {
      limit
      offset
    }
    nodes {
      token {
        ...TokenInfo
        ...TokenDetails @include(if: $includeFullDetails)
      }
      market {
        ...MarketInfo
        ...MarketDetails @include(if: $includeFullDetails)
      }
    }
  }
}
    ${TokenInfoFragmentDoc}
${TokenDetailsFragmentDoc}
${MarketInfoFragmentDoc}
${MarketDetailsFragmentDoc}`;
export const MintsDocument = gql`
    query mints($networks: [NetworkInput!]!, $filter: MintsQueryFilter, $pagination: PaginationInput!, $sort: MintSortKeySortInput!, $where: MintsQueryInput, $includeFullDetails: Boolean!) {
  mints(
    where: $where
    networks: $networks
    filter: $filter
    pagination: $pagination
    sort: $sort
  ) {
    nodes {
      mint {
        collectionAddress
        tokenId
      }
      markets(pagination: $pagination, sort: {sortKey: NONE, sortDirection: DESC}) {
        ...MarketInfo
        ...MarketDetails @include(if: $includeFullDetails)
      }
    }
  }
}
    ${MarketInfoFragmentDoc}
${MarketDetailsFragmentDoc}`;
export const CollectionsDocument = gql`
    query collections($networks: [NetworkInput!]!, $where: CollectionsQueryInput!, $pagination: PaginationInput!, $sort: CollectionSortKeySortInput!, $includeFullDetails: Boolean!) {
  collections(
    where: $where
    networks: $networks
    pagination: $pagination
    sort: $sort
  ) {
    hasNextPage
    pageInfo {
      limit
      offset
    }
    nodes {
      ...CollectionInfo
      ...CollectionDetails @include(if: $includeFullDetails)
    }
  }
}
    ${CollectionInfoFragmentDoc}
${CollectionDetailsFragmentDoc}`;
export const TokensDocument = gql`
    query tokens($networks: [NetworkInput!]!, $where: TokensQueryInput, $filter: TokensQueryFilter, $pagination: PaginationInput!, $sort: TokenSortInput!, $includeFullDetails: Boolean!, $includeSalesHistory: Boolean!) {
  tokens(
    where: $where
    networks: $networks
    pagination: $pagination
    sort: $sort
    filter: $filter
  ) {
    hasNextPage
    pageInfo {
      limit
      offset
    }
    nodes {
      marketsSummary {
        ...MarketInfo
        ...MarketDetails @include(if: $includeFullDetails)
      }
      token {
        ...TokenInfo
        ...TokenDetails @include(if: $includeFullDetails)
      }
      sales(
        pagination: {limit: 10, offset: 0}
        sort: {sortKey: TIME, sortDirection: DESC}
      ) {
        ...SaleInfo @include(if: $includeSalesHistory)
      }
    }
  }
}
    ${MarketInfoFragmentDoc}
${MarketDetailsFragmentDoc}
${TokenInfoFragmentDoc}
${TokenDetailsFragmentDoc}
${SaleInfoFragmentDoc}`;
export const TokenDocument = gql`
    query token($network: NetworkInput!, $token: TokenInput!, $includeFullDetails: Boolean!) {
  token(network: $network, token: $token) {
    token {
      ...TokenInfo
      ...TokenDetails @include(if: $includeFullDetails)
    }
    sales(
      pagination: {limit: 10, offset: 0}
      sort: {sortKey: TIME, sortDirection: DESC}
    ) {
      ...SaleInfo @include(if: $includeFullDetails)
    }
    events(
      pagination: {limit: 10, offset: 0}
      sort: {sortKey: NONE, sortDirection: DESC}
    ) {
      ...EventInfo
    }
    markets(
      pagination: {limit: 10, offset: 0}
      sort: {sortKey: NONE, sortDirection: DESC}
    ) {
      ...MarketInfo
      ...MarketDetails @include(if: $includeFullDetails)
    }
  }
}
    ${TokenInfoFragmentDoc}
${TokenDetailsFragmentDoc}
${SaleInfoFragmentDoc}
${EventInfoFragmentDoc}
${MarketInfoFragmentDoc}
${MarketDetailsFragmentDoc}`;
export const AggregateAttributesDocument = gql`
    query aggregateAttributes($networks: [NetworkInput!]!, $where: AggregateAttributesQueryInput!) {
  aggregateAttributes(networks: $networks, where: $where) {
    traitType
    valueMetrics {
      value
      count
      percent
    }
  }
}
    `;
export const OwnersByCountDocument = gql`
    query ownersByCount($networks: [NetworkInput!]!, $pagination: PaginationInput!, $where: CollectionAddressAndAttributesInput!) {
  aggregateStat {
    ownersByCount(networks: $networks, pagination: $pagination, where: $where) {
      hasNextPage
      pageInfo {
        limit
        offset
      }
      nodes {
        ...OwnerCountInfo
      }
    }
  }
}
    ${OwnerCountInfoFragmentDoc}`;
export const SalesVolumeDocument = gql`
    query salesVolume($networks: [NetworkInput!]!, $where: CollectionAddressAndAttributesInput!, $timeFilter: TimeFilter) {
  aggregateStat {
    salesVolume(where: $where, networks: $networks, timeFilter: $timeFilter) {
      ethPrice
      usdcPrice
      totalCount
    }
  }
}
    `;
export const OwnerCountDocument = gql`
    query ownerCount($networks: [NetworkInput!]!, $where: CollectionAddressAndAttributesInput!) {
  aggregateStat {
    ownerCount(where: $where, networks: $networks)
  }
}
    `;
export const NftCountDocument = gql`
    query nftCount($networks: [NetworkInput!]!, $where: CollectionAddressOwnerAddressAttributesInput!) {
  aggregateStat {
    nftCount(where: $where, networks: $networks)
  }
}
    `;
export const FloorPriceDocument = gql`
    query floorPrice($networks: [NetworkInput!]!, $where: CollectionAddressAndAttributesInput!) {
  aggregateStat {
    floorPrice(where: $where, networks: $networks)
  }
}
    `;
export const FullTextSearchDocument = gql`
    query fullTextSearch($pagination: SearchPaginationInput!, $query: SearchQuery!) {
  search(pagination: $pagination, query: $query) {
    hasNextPage
    pageInfo {
      limit
      offset
    }
    nodes {
      address
      description
      entityType
      name
      tokenId
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    events(variables: EventsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EventsQuery>(EventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'events');
    },
    markets(variables: MarketsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MarketsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MarketsQuery>(MarketsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'markets');
    },
    mints(variables: MintsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MintsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MintsQuery>(MintsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'mints');
    },
    collections(variables: CollectionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CollectionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CollectionsQuery>(CollectionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'collections');
    },
    tokens(variables: TokensQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TokensQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TokensQuery>(TokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tokens');
    },
    token(variables: TokenQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TokenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TokenQuery>(TokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'token');
    },
    aggregateAttributes(variables: AggregateAttributesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AggregateAttributesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AggregateAttributesQuery>(AggregateAttributesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'aggregateAttributes');
    },
    ownersByCount(variables: OwnersByCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OwnersByCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OwnersByCountQuery>(OwnersByCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ownersByCount');
    },
    salesVolume(variables: SalesVolumeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SalesVolumeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SalesVolumeQuery>(SalesVolumeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'salesVolume');
    },
    ownerCount(variables: OwnerCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OwnerCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OwnerCountQuery>(OwnerCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ownerCount');
    },
    nftCount(variables: NftCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NftCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NftCountQuery>(NftCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'nftCount');
    },
    floorPrice(variables: FloorPriceQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FloorPriceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FloorPriceQuery>(FloorPriceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'floorPrice');
    },
    fullTextSearch(variables: FullTextSearchQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FullTextSearchQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FullTextSearchQuery>(FullTextSearchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'fullTextSearch');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type TokenContractInfoFragment = { __typename?: 'TokenContract', name?: string | null, network: string, description?: string | null, collectionAddress: string, symbol?: string | null, chain: number };

export type FullMediaFragment = { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename?: 'MediaEncoding', large: string, poster: string, preview: string, thumbnail: string } | null };

export type PriceSummaryFragment = { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null };

export type MintDetailsFragment = { __typename?: 'MintInfo', originatorAddress: string, toAddress: string, price: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null }, mintContext: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null } };

export type TransactionDetailsFragment = { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null };

export type SaleInfoFragment = { __typename?: 'Sale', saleContractAddress?: string | null, buyerAddress: string, collectionAddress: string, sellerAddress: string, tokenId: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } };

export type V2AuctionMarketPropertiesFragment = { __typename: 'V2Auction', firstBidTime?: any | null, highestBidder?: string | null, curator: string, collectionAddress: string, curatorFeePercentage: number, status: V2AuctionStatus, tokenId: string, auctionCurrency: string, duration: string, estimatedExpirationTime?: any | null, tokenOwner: string, address: string, auctionId: string, approved: boolean, auctionStatus: V2AuctionStatus, reservePrice: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null }, highestBidPrice?: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null };

export type V3AskPropertiesFragment = { __typename: 'V3Ask', buyer?: string | null, finder?: string | null, findersFeeBps: number, sellerFundsRecipient: string, seller: string, address: string, askCurrency: string, collectionAddress: string, askStatus: V3AskStatus, askPrice: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } };

type MarketPropertiesFull_V1Ask_Fragment = { __typename?: 'V1Ask' };

type MarketPropertiesFull_V1BidShare_Fragment = { __typename?: 'V1BidShare' };

type MarketPropertiesFull_V1Offer_Fragment = { __typename?: 'V1Offer' };

type MarketPropertiesFull_V2Auction_Fragment = { __typename: 'V2Auction', firstBidTime?: any | null, highestBidder?: string | null, curator: string, collectionAddress: string, curatorFeePercentage: number, status: V2AuctionStatus, tokenId: string, auctionCurrency: string, duration: string, estimatedExpirationTime?: any | null, tokenOwner: string, address: string, auctionId: string, approved: boolean, auctionStatus: V2AuctionStatus, reservePrice: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null }, highestBidPrice?: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null };

type MarketPropertiesFull_V3Ask_Fragment = { __typename: 'V3Ask', buyer?: string | null, finder?: string | null, findersFeeBps: number, sellerFundsRecipient: string, seller: string, address: string, askCurrency: string, collectionAddress: string, askStatus: V3AskStatus, askPrice: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } };

export type MarketPropertiesFullFragment = MarketPropertiesFull_V1Ask_Fragment | MarketPropertiesFull_V1BidShare_Fragment | MarketPropertiesFull_V1Offer_Fragment | MarketPropertiesFull_V2Auction_Fragment | MarketPropertiesFull_V3Ask_Fragment;

export type MarketInfoFragment = { __typename?: 'Market', collectionAddress: string, marketAddress: string, marketType: MarketType, status: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price?: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, networkInfo: { __typename?: 'NetworkInfo', chain: Chain, network: Network } };

export type MarketDetailsFragment = { __typename?: 'Market', properties: { __typename?: 'V1Ask' } | { __typename?: 'V1BidShare' } | { __typename?: 'V1Offer' } | { __typename: 'V2Auction', firstBidTime?: any | null, highestBidder?: string | null, curator: string, collectionAddress: string, curatorFeePercentage: number, status: V2AuctionStatus, tokenId: string, auctionCurrency: string, duration: string, estimatedExpirationTime?: any | null, tokenOwner: string, address: string, auctionId: string, approved: boolean, auctionStatus: V2AuctionStatus, reservePrice: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null }, highestBidPrice?: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null } | { __typename: 'V3Ask', buyer?: string | null, finder?: string | null, findersFeeBps: number, sellerFundsRecipient: string, seller: string, address: string, askCurrency: string, collectionAddress: string, askStatus: V3AskStatus, askPrice: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } };

export type TokenInfoFragment = { __typename?: 'Token', tokenId: string, collectionAddress: string, lastRefreshTime?: any | null, owner?: string | null, name?: string | null, description?: string | null, tokenContract?: { __typename?: 'TokenContract', name?: string | null, network: string, description?: string | null, collectionAddress: string, symbol?: string | null, chain: number } | null, mintInfo?: { __typename?: 'MintInfo', originatorAddress: string, toAddress: string, price: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null }, mintContext: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null } } | null, image?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename?: 'MediaEncoding', large: string, poster: string, preview: string, thumbnail: string } | null } | null, content?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename?: 'MediaEncoding', large: string, poster: string, preview: string, thumbnail: string } | null } | null };

export type EventInfoFragment = { __typename?: 'Event', eventType: EventType, collectionAddress: string, tokenId: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, properties: { __typename?: 'MintEvent', tokenId: string, collectionAddress: string, originatorAddress: string, toAddress: string, fee: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename?: 'TransferEvent', fromAddress: string, toAddress: string, collectionAddress: string, tokenId: string } | { __typename?: 'V1MarketEvent', address: string, collectionAddress: string, tokenId: string, marketEventType: V1MarketEventType } | { __typename?: 'V2AuctionEvent', address: string, auctionId: number, collectionAddress: string, tokenId: string, auctionEventType: V2AuctionEventType } | { __typename?: 'V3AskEvent', address: string, collectionAddress: string, tokenId: string, v3AskEventType: V3AskEventType } };

export type TokenDetailsFragment = { __typename?: 'Token', metadata?: any | null, tokenUrl?: string | null, tokenUrlMimeType?: string | null, attributes?: Array<{ __typename?: 'TokenAttribute', traitType?: string | null, value?: string | null, displayType?: string | null }> | null };

export type CollectionInfoFragment = { __typename?: 'Collection', address: string, description: string, name?: string | null, symbol?: string | null, totalSupply?: number | null };

export type CollectionDetailsFragment = { __typename?: 'Collection', attributes?: Array<{ __typename?: 'CollectionAttribute', traitType?: string | null, valueMetrics: Array<{ __typename?: 'CollectionAttributeValue', count: number, percent: number, value: string }> }> | null };

export type PageInfoDefaultFragment = { __typename?: 'PageInfo', limit: number, offset: number };

export type OwnerCountInfoFragment = { __typename?: 'OwnerCount', owner: string, count: number };

export type EventsQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  filter?: InputMaybe<EventsQueryFilter>;
  pagination: PaginationInput;
  sort: EventSortKeySortInput;
  where?: InputMaybe<EventsQueryInput>;
}>;


export type EventsQuery = { __typename?: 'RootQuery', events: { __typename?: 'EventConnection', hasNextPage: boolean, pageInfo: { __typename?: 'PageInfo', limit: number, offset: number }, nodes: Array<{ __typename?: 'Event', eventType: EventType, collectionAddress: string, tokenId: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, properties: { __typename?: 'MintEvent', tokenId: string, collectionAddress: string, originatorAddress: string, toAddress: string, fee: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename?: 'TransferEvent', fromAddress: string, toAddress: string, collectionAddress: string, tokenId: string } | { __typename?: 'V1MarketEvent', address: string, collectionAddress: string, tokenId: string, marketEventType: V1MarketEventType } | { __typename?: 'V2AuctionEvent', address: string, auctionId: number, collectionAddress: string, tokenId: string, auctionEventType: V2AuctionEventType } | { __typename?: 'V3AskEvent', address: string, collectionAddress: string, tokenId: string, v3AskEventType: V3AskEventType } }> } };

export type MarketsQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  filter?: InputMaybe<MarketsQueryFilter>;
  pagination: PaginationInput;
  sort: MarketSortKeySortInput;
  where?: InputMaybe<MarketsQueryInput>;
  includeFullDetails: Scalars['Boolean'];
}>;


export type MarketsQuery = { __typename?: 'RootQuery', markets: { __typename?: 'MarketWithTokenConnection', hasNextPage: boolean, pageInfo: { __typename?: 'PageInfo', limit: number, offset: number }, nodes: Array<{ __typename?: 'MarketWithToken', token?: { __typename?: 'Token', tokenId: string, collectionAddress: string, lastRefreshTime?: any | null, owner?: string | null, name?: string | null, description?: string | null, metadata?: any | null, tokenUrl?: string | null, tokenUrlMimeType?: string | null, tokenContract?: { __typename?: 'TokenContract', name?: string | null, network: string, description?: string | null, collectionAddress: string, symbol?: string | null, chain: number } | null, mintInfo?: { __typename?: 'MintInfo', originatorAddress: string, toAddress: string, price: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null }, mintContext: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null } } | null, image?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename?: 'MediaEncoding', large: string, poster: string, preview: string, thumbnail: string } | null } | null, content?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename?: 'MediaEncoding', large: string, poster: string, preview: string, thumbnail: string } | null } | null, attributes?: Array<{ __typename?: 'TokenAttribute', traitType?: string | null, value?: string | null, displayType?: string | null }> | null } | null, market: { __typename?: 'Market', collectionAddress: string, marketAddress: string, marketType: MarketType, status: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price?: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, networkInfo: { __typename?: 'NetworkInfo', chain: Chain, network: Network }, properties: { __typename?: 'V1Ask' } | { __typename?: 'V1BidShare' } | { __typename?: 'V1Offer' } | { __typename: 'V2Auction', firstBidTime?: any | null, highestBidder?: string | null, curator: string, collectionAddress: string, curatorFeePercentage: number, status: V2AuctionStatus, tokenId: string, auctionCurrency: string, duration: string, estimatedExpirationTime?: any | null, tokenOwner: string, address: string, auctionId: string, approved: boolean, auctionStatus: V2AuctionStatus, reservePrice: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null }, highestBidPrice?: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null } | { __typename: 'V3Ask', buyer?: string | null, finder?: string | null, findersFeeBps: number, sellerFundsRecipient: string, seller: string, address: string, askCurrency: string, collectionAddress: string, askStatus: V3AskStatus, askPrice: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } } }> } };

export type MintsQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  filter?: InputMaybe<MintsQueryFilter>;
  pagination: PaginationInput;
  sort: MintSortKeySortInput;
  where?: InputMaybe<MintsQueryInput>;
  includeFullDetails: Scalars['Boolean'];
}>;


export type MintsQuery = { __typename?: 'RootQuery', mints: { __typename?: 'MintWithTokenAndMarketsConnection', nodes: Array<{ __typename?: 'MintWithTokenAndMarkets', mint: { __typename?: 'Mint', collectionAddress: string, tokenId: string }, markets: Array<{ __typename?: 'Market', collectionAddress: string, marketAddress: string, marketType: MarketType, status: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price?: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, networkInfo: { __typename?: 'NetworkInfo', chain: Chain, network: Network }, properties: { __typename?: 'V1Ask' } | { __typename?: 'V1BidShare' } | { __typename?: 'V1Offer' } | { __typename: 'V2Auction', firstBidTime?: any | null, highestBidder?: string | null, curator: string, collectionAddress: string, curatorFeePercentage: number, status: V2AuctionStatus, tokenId: string, auctionCurrency: string, duration: string, estimatedExpirationTime?: any | null, tokenOwner: string, address: string, auctionId: string, approved: boolean, auctionStatus: V2AuctionStatus, reservePrice: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null }, highestBidPrice?: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null } | { __typename: 'V3Ask', buyer?: string | null, finder?: string | null, findersFeeBps: number, sellerFundsRecipient: string, seller: string, address: string, askCurrency: string, collectionAddress: string, askStatus: V3AskStatus, askPrice: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } }> }> } };

export type CollectionsQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  where: CollectionsQueryInput;
  pagination: PaginationInput;
  sort: CollectionSortKeySortInput;
  includeFullDetails: Scalars['Boolean'];
}>;


export type CollectionsQuery = { __typename?: 'RootQuery', collections: { __typename?: 'CollectionConnection', hasNextPage: boolean, pageInfo: { __typename?: 'PageInfo', limit: number, offset: number }, nodes: Array<{ __typename?: 'Collection', address: string, description: string, name?: string | null, symbol?: string | null, totalSupply?: number | null, attributes?: Array<{ __typename?: 'CollectionAttribute', traitType?: string | null, valueMetrics: Array<{ __typename?: 'CollectionAttributeValue', count: number, percent: number, value: string }> }> | null }> } };

export type TokensQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  where?: InputMaybe<TokensQueryInput>;
  filter?: InputMaybe<TokensQueryFilter>;
  pagination: PaginationInput;
  sort: TokenSortInput;
  includeFullDetails: Scalars['Boolean'];
  includeSalesHistory: Scalars['Boolean'];
}>;


export type TokensQuery = { __typename?: 'RootQuery', tokens: { __typename?: 'TokenWithMarketsSummaryConnection', hasNextPage: boolean, pageInfo: { __typename?: 'PageInfo', limit: number, offset: number }, nodes: Array<{ __typename?: 'TokenWithMarketsSummary', marketsSummary: Array<{ __typename?: 'Market', collectionAddress: string, marketAddress: string, marketType: MarketType, status: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price?: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, networkInfo: { __typename?: 'NetworkInfo', chain: Chain, network: Network }, properties: { __typename?: 'V1Ask' } | { __typename?: 'V1BidShare' } | { __typename?: 'V1Offer' } | { __typename: 'V2Auction', firstBidTime?: any | null, highestBidder?: string | null, curator: string, collectionAddress: string, curatorFeePercentage: number, status: V2AuctionStatus, tokenId: string, auctionCurrency: string, duration: string, estimatedExpirationTime?: any | null, tokenOwner: string, address: string, auctionId: string, approved: boolean, auctionStatus: V2AuctionStatus, reservePrice: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null }, highestBidPrice?: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null } | { __typename: 'V3Ask', buyer?: string | null, finder?: string | null, findersFeeBps: number, sellerFundsRecipient: string, seller: string, address: string, askCurrency: string, collectionAddress: string, askStatus: V3AskStatus, askPrice: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } }>, token: { __typename?: 'Token', tokenId: string, collectionAddress: string, lastRefreshTime?: any | null, owner?: string | null, name?: string | null, description?: string | null, metadata?: any | null, tokenUrl?: string | null, tokenUrlMimeType?: string | null, tokenContract?: { __typename?: 'TokenContract', name?: string | null, network: string, description?: string | null, collectionAddress: string, symbol?: string | null, chain: number } | null, mintInfo?: { __typename?: 'MintInfo', originatorAddress: string, toAddress: string, price: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null }, mintContext: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null } } | null, image?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename?: 'MediaEncoding', large: string, poster: string, preview: string, thumbnail: string } | null } | null, content?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename?: 'MediaEncoding', large: string, poster: string, preview: string, thumbnail: string } | null } | null, attributes?: Array<{ __typename?: 'TokenAttribute', traitType?: string | null, value?: string | null, displayType?: string | null }> | null }, sales: Array<{ __typename?: 'Sale', saleContractAddress?: string | null, buyerAddress: string, collectionAddress: string, sellerAddress: string, tokenId: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } }> }> } };

export type TokenQueryVariables = Exact<{
  network: NetworkInput;
  token: TokenInput;
  includeFullDetails: Scalars['Boolean'];
}>;


export type TokenQuery = { __typename?: 'RootQuery', token?: { __typename?: 'TokenWithFullMarketHistory', token: { __typename?: 'Token', tokenId: string, collectionAddress: string, lastRefreshTime?: any | null, owner?: string | null, name?: string | null, description?: string | null, metadata?: any | null, tokenUrl?: string | null, tokenUrlMimeType?: string | null, tokenContract?: { __typename?: 'TokenContract', name?: string | null, network: string, description?: string | null, collectionAddress: string, symbol?: string | null, chain: number } | null, mintInfo?: { __typename?: 'MintInfo', originatorAddress: string, toAddress: string, price: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null }, mintContext: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null } } | null, image?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename?: 'MediaEncoding', large: string, poster: string, preview: string, thumbnail: string } | null } | null, content?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename?: 'MediaEncoding', large: string, poster: string, preview: string, thumbnail: string } | null } | null, attributes?: Array<{ __typename?: 'TokenAttribute', traitType?: string | null, value?: string | null, displayType?: string | null }> | null }, sales: Array<{ __typename?: 'Sale', saleContractAddress?: string | null, buyerAddress: string, collectionAddress: string, sellerAddress: string, tokenId: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } }>, events: Array<{ __typename?: 'Event', eventType: EventType, collectionAddress: string, tokenId: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, properties: { __typename?: 'MintEvent', tokenId: string, collectionAddress: string, originatorAddress: string, toAddress: string, fee: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename?: 'TransferEvent', fromAddress: string, toAddress: string, collectionAddress: string, tokenId: string } | { __typename?: 'V1MarketEvent', address: string, collectionAddress: string, tokenId: string, marketEventType: V1MarketEventType } | { __typename?: 'V2AuctionEvent', address: string, auctionId: number, collectionAddress: string, tokenId: string, auctionEventType: V2AuctionEventType } | { __typename?: 'V3AskEvent', address: string, collectionAddress: string, tokenId: string, v3AskEventType: V3AskEventType } }>, markets: Array<{ __typename?: 'Market', collectionAddress: string, marketAddress: string, marketType: MarketType, status: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price?: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, networkInfo: { __typename?: 'NetworkInfo', chain: Chain, network: Network }, properties: { __typename?: 'V1Ask' } | { __typename?: 'V1BidShare' } | { __typename?: 'V1Offer' } | { __typename: 'V2Auction', firstBidTime?: any | null, highestBidder?: string | null, curator: string, collectionAddress: string, curatorFeePercentage: number, status: V2AuctionStatus, tokenId: string, auctionCurrency: string, duration: string, estimatedExpirationTime?: any | null, tokenOwner: string, address: string, auctionId: string, approved: boolean, auctionStatus: V2AuctionStatus, reservePrice: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null }, highestBidPrice?: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null } | { __typename: 'V3Ask', buyer?: string | null, finder?: string | null, findersFeeBps: number, sellerFundsRecipient: string, seller: string, address: string, askCurrency: string, collectionAddress: string, askStatus: V3AskStatus, askPrice: { __typename?: 'PriceAtTime', blockNumber: number, ethPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } }> } | null };

export type AggregateAttributesQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  where: AggregateAttributesQueryInput;
}>;


export type AggregateAttributesQuery = { __typename?: 'RootQuery', aggregateAttributes: Array<{ __typename?: 'AggregateAttribute', traitType: string, valueMetrics: Array<{ __typename?: 'AggregateAttributeValue', value: string, count: number, percent: number }> }> };

export type OwnersByCountQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  pagination: PaginationInput;
  where: CollectionAddressAndAttributesInput;
}>;


export type OwnersByCountQuery = { __typename?: 'RootQuery', aggregateStat: { __typename?: 'AggregateStat', ownersByCount: { __typename?: 'OwnerCountConnection', hasNextPage: boolean, pageInfo: { __typename?: 'PageInfo', limit: number, offset: number }, nodes: Array<{ __typename?: 'OwnerCount', owner: string, count: number }> } } };

export type SalesVolumeQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  where: CollectionAddressAndAttributesInput;
  timeFilter?: InputMaybe<TimeFilter>;
}>;


export type SalesVolumeQuery = { __typename?: 'RootQuery', aggregateStat: { __typename?: 'AggregateStat', salesVolume: { __typename?: 'SalesVolume', ethPrice: number, usdcPrice: number, totalCount: number } } };

export type OwnerCountQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  where: CollectionAddressAndAttributesInput;
}>;


export type OwnerCountQuery = { __typename?: 'RootQuery', aggregateStat: { __typename?: 'AggregateStat', ownerCount: number } };

export type NftCountQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  where: CollectionAddressOwnerAddressAttributesInput;
}>;


export type NftCountQuery = { __typename?: 'RootQuery', aggregateStat: { __typename?: 'AggregateStat', nftCount: number } };

export type FloorPriceQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  where: CollectionAddressAndAttributesInput;
}>;


export type FloorPriceQuery = { __typename?: 'RootQuery', aggregateStat: { __typename?: 'AggregateStat', floorPrice?: number | null } };

export type FullTextSearchQueryVariables = Exact<{
  pagination: SearchPaginationInput;
  query: SearchQuery;
}>;


export type FullTextSearchQuery = { __typename?: 'RootQuery', search: { __typename?: 'SearchResultConnection', hasNextPage: boolean, pageInfo: { __typename?: 'PageInfo', limit: number, offset: number }, nodes: Array<{ __typename?: 'SearchResult', address: string, description?: string | null, entityType: string, name?: string | null, tokenId?: string | null }> } };
