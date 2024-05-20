const ethers = require('ethers');

// Function to format Ethereum address
export const formatAddress = (address: string): string | null => {
  try {
    return ethers.utils.getAddress(address);
  } catch (error) {
    console.error('Invalid address:', address);
    return null;
  }
};

// Function to format Ether values
export const formatEther = (value: string): string => {
  return ethers.utils.formatEther(value);
};