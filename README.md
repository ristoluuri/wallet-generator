# Wallet Generator (utility)

## Description
Small Node.js utility demonstrating `ethers.js` usage to generate Ethereum wallets programmatically.  
Intended as a developer utility example (token / address creation). **This repo does not store or share real private keys**.

## Tech stack
Node.js, ethers.js

## Usage
- Install: `npm install`
- Demo (masked output): `node wallet-generator.js`
- Generate and save (dangerous — do NOT commit the output): `node wallet-generator.js 10 --save`

## Security note
**Do not publish or commit real mnemonics or private keys.** This tool generates real private keys if run with `--save`. Treat any generated keys as secrets and never use them with funds unless you fully control their security.