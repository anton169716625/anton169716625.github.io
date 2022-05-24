import allNfts from "../components/atoms/menu-icon/allNfts.svg";
import art_menu from "../components/atoms/menu-icon/art.svg";
import collectibles from "../components/atoms/menu-icon/collectibles.svg";
import domainNames from "../components/atoms/menu-icon/domainNames.svg";
import music_menu from "../components/atoms/menu-icon/music.svg";
import photography_menu from "../components/atoms/menu-icon/photography.svg";
import sports_menu from "../components/atoms/menu-icon/sports.svg";
import tradingCards from "../components/atoms/menu-icon/tradingCards.svg";
import utility from "../components/atoms/menu-icon/utility.svg";
import virtualWorlds from "../components/atoms/menu-icon/virtualWorlds.svg";

export const vlxAbi = require("./abi/VLXNFT.json");
export const exchangeAbi = require("./abi/ExchangeNFT.json");
export const wvlxAbi = require("config/abi/WVLX.json");
// test net
export const vlxContractAddress = "0xd088b095B322D6f250b70357006187e5B5e1eA03";
export const exchangeContractAddress =
  "0x83feE275CA15aa1D47465209866afBCf4e5b0115";
export const wvlxContractAddress = "0x071DA4A38460bb14686C1D44d85A7BDad0d6BaC5";

export const chainName = {
  111: "Velas Testnet",
};

export const velasTestNetInfo = {
  chainId: 111,
  chainName: "Velas Testnet",
  blockExplorer: "https://evmexplorer.testnet.velas.com",
  rpcUrl: "https://explorer.testnet.velas.com/rpc",
};

// main net
// export const vlxContractAddress = "0xd088b095B322D6f250b70357006187e5B5e1eA03";
// export const exchangeContractAddress =
//   "0x292AD3EaB3350531FCb8A64b85e7F23AB581822f";
// export const wvlxContractAddress = "0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126";

// export const chainName = {
//   106: "Velas Mainnet",
// };

// export const velasMainNetInfo = {
//   chainId: 106,
//   chainName: "Velas Mainnet",
//   blockExplorer: "https://explorer.testnet.velas.com",
//   rpcUrl: "https://evmexplorer.velas.com/rpc",
// };

export const VELAS_CURRENT_NET = velasTestNetInfo;

export const pinata_api_key = "0f0f5b3e244f8193932d";
export const pinata_asset_base_url = "https://gateway.pinata.cloud/ipfs";
export const pinata_secret_api_key =
  "ddf1e9666cd9490751ff5957ee1bbfee4977e8441b9b812e1ff67ac9b70d0288";

export const backend_base_url = "http://192.168.112.90:80/api/v1";

export const DOC_URL = "http://162.220.163.227:3001";
export const HELP_URL = "http://162.220.163.227:3002";

export const SellMethod = {
  Highest: 0,
  Declining: 1,
};

export const Status = {
  Creator: 0,
  Onsale: 1,
  Buy: 2,
  Sell: 3,
  Transfer: 4,
  Offer: 5,
  CancelOffer: 6,
  CancelList: 7,
};

export const SellType = {
  Fixed: 0,
  Timed: 1,
};

export const CategoryPops = [
  { id: 0, menu: "All NFTs", image: allNfts, cate: "allnft" },
  { id: 1, menu: "Art", image: art_menu, cate: "art" },
  {
    id: 2,
    menu: "Collectibles",
    image: collectibles,
    cate: "collectibles",
  },
  {
    id: 3,
    menu: "Domain Names",
    image: domainNames,
    cate: "domain",
  },
  { id: 4, menu: "Music", image: music_menu, cate: "music" },
  {
    id: 5,
    menu: "Photography",
    image: photography_menu,
    cate: "photo",
  },
  { id: 6, menu: "Sports", image: sports_menu, cate: "sports" },
  {
    id: 7,
    menu: "Trading Cards",
    image: tradingCards,
    cate: "tradingcards",
  },
  { id: 8, menu: "Utility", image: utility, cate: "utility" },
  {
    id: 9,
    menu: "Virtual Worlds",
    image: virtualWorlds,
    cate: "virtual",
  },
];

export const MaxUint256 =
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
