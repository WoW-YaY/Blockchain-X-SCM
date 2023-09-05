# Blockchain-X-SCM
Supply chain management solution powered by blockchain

## Set up

### Step 0: Download the repo and dependencies

```
git clone https://github.com/WoW-YaY/Blockchain-X-SCM.git && cd Blockchain-X-SCM
```

### Step 1: Compile the contracts

Option 1: Compile the contracts locally
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
npm start
```
