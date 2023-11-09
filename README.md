# Blockchain-X-SCM
Supply chain management solution powered by blockchain

## Set up

### Step 0: Download the repo and dependencies

`Git clone` this repo; that's where your journey will begin!
```
git clone https://github.com/WoW-YaY/Blockchain-X-SCM.git && cd Blockchain-X-SCM
```

Install dependencies. Don't worry, all the dependencies you need are already laid out in the `package.json` file, all you need to do is run the following code in your terminal:
```
npm i
```

Of course, you also need to go into the `./client` folder and execute the same command:
```
cd client && npm I
cd ..
```

Install *ganache-cli*. *Ganache* is an Ethereum node emulator software that lets you compile the blockchain locally, and *ganache-cli* is the command-line version of it.
```
npm i -g ganache-cli
```

### Step 1: Compile the contracts

Option 1: Compile the contracts locally (Recommended)
```
ganache-cli --accounts 10 --gasLimit 6721975000
```

Open a new terminal, run:
```
truffle migrate --network=develop --reset
```

Option 2: Compile the contracts on the public (test) chain
```
truffle migrate --network=mumbai --reset
```

### Step 2: Open the client to do an interaction

Open a new terminal, run:

```
cd client
```

```
if not install npm i
run npm i
```

```
npm start
```
