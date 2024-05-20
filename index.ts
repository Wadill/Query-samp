const { ApolloClient, InMemoryCache, gql } = require('@apollo/client');
import { fetch } from 'node-fetch';
import { formatAddress, formatEther } from './utility';

// Define the GraphQL endpoint
const API_URL = 'https://gateway.thegraph.com/api/<API_KEY>/subgraphs/id/<SUBGRAPH_ID>';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
  fetch: fetch as any
});

// Define the queries
const GET_TOKENS = gql`
  query {
    tokens {
      id
      symbol
      name
      decimals
    }
  }
`;

const GET_TRANSACTIONS = gql`
  query {
    transactions(first: 5) {
      id
      blockNumber
      from
      to
      value
    }
  }
`;

// Function to fetch data from the subgraph
const fetchData = async () => {
  try {
    const tokenData = await client.query({ query: GET_TOKENS });
    console.log('Tokens:', JSON.stringify(tokenData.data, null, 2));

    const transactionData = await client.query({ query: GET_TRANSACTIONS });
    transactionData.data.transactions.forEach((tx: any) => {
      console.log(`Transaction ID: ${tx.id}`);
      console.log(`Block Number: ${tx.blockNumber}`);
      console.log(`From: ${formatAddress(tx.from)}`);
      console.log(`To: ${formatAddress(tx.to)}`);
      console.log(`Value: ${formatEther(tx.value)} ETH`);
      console.log('---------------------------');
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Execute the fetch function
fetchData();