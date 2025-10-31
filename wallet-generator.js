const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

let output = "";

for (let i = 0; i < 10; i++) {
  const wallet = ethers.Wallet.createRandom();
  output += `Wallet ${i + 1}: Address=${wallet.address} | Mnemonic=${wallet.mnemonic.phrase}\n`;
}

// Save file explicitly in the same folder as this script
const filePath = path.join(__dirname, "wallets.txt");
fs.writeFileSync(filePath, output);

console.log(`10 wallets generated and saved to ${filePath}`);
