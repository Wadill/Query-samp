# Advanced GraphQL TypeScript Repository

Querying a subgraph deployed on The Graph using Apollo Client and Ethereum utilities from `ethers.js`.

## Setup

1. Clone the repository:
   ```sh
   git clone "url"
   cd folder
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Update the `API_URL` variable in `index.ts` with your API key and subgraph ID:
   ```typescript
   const API_URL = 'https://gateway.thegraph.com/api/<API_KEY>/subgraphs/id/<SUBGRAPH_ID>';
   ```

4. Run the script:
   ```sh
   npx ts-node index.ts
   ```

## Dependencies

- `apollo-client`: A fully-featured caching GraphQL client.
- `graphql`: A reference implementation of GraphQL for JavaScript.
- `graphql-tag`: A JavaScript template literal tag that parses GraphQL queries.
- `node-fetch`: A light-weight module that brings `window.fetch` to Node.js.
- `ethers`: A library for interacting with the Ethereum blockchain.

## Example Queries

This repository includes example queries to fetch token data and transaction data.

### Get Tokens

Fetches token ID, symbol, name, and decimals.

### Get Transactions

Fetches transaction ID, block number, sender, recipient, and value (formatted as Ether).


### Conclusion

This provides a more advanced TypeScript application that queries a subgraph on The Graph using Apollo Client. 

