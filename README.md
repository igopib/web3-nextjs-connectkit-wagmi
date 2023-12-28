# Web3 Next.JS + ConnectKit + Wagmi.sh Beginner Guide

This repository was created for the the frontend developers who want to learn about the basic starting steps on how to connect their react apps to crypto wallets and execute functions on-chain.

[Medium: Full Guide](https://medium.com/@gopinho/web3-frontend-basics-a-beginner-friendly-dive-for-2024-dbdbe092b6f6)

This repo uses a simple storage contract called `StoreIt` and its deployed on Sepolia testnet on address below:

```
0x0526427bbCB2b3FA04D2D11cd2Ee23C72ffd64a8
```

Uses:

- [Next.js](https://medium.com/r/?url=https%3A%2F%2Fnextjs.org%2F)
- [ConnectKit](https://medium.com/r/?url=https%3A%2F%2Fdocs.family.co%2Fconnectkit)
- [Wagmi.sh](https://medium.com/r/?url=https%3A%2F%2Fwagmi.sh%2F)
- [Viem](https://medium.com/r/?url=https%3A%2F%2Fviem.sh%2F)
- [Tailwindcss](https://medium.com/r/?url=https%3A%2F%2Ftailwindcss.com%2F)

<br>

## Get Started

### To experiment around with repo in your local environment:

- Create a .env.local file for your [AlchemyId](https://www.alchemy.com/) and [WalletConnect](https://cloud.walletconnect.com/sign-in) Api keys.

<br>

### To update theme of wallet conenctor:

- Go to `src/pages/_app.tsx` and experiment with `theme` inside <ConnectKitProvider> component, [More Info](https://docs.family.co/connectkit/theming#theming)

<br>

### Run the dev enviroment

```
npm run dev
# or
yarn dev
```
