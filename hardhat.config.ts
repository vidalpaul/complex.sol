import "@nomicfoundation/hardhat-foundry";
import "hardhat-deploy";
import "@nomiclabs/hardhat-waffle";
import "solidity-docgen";
import "solidity-coverage";

import { HardhatUserConfig } from "hardhat/types";

const config: HardhatUserConfig = {
	solidity: "0.8.24",
};

export default config;
