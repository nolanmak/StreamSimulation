/**
 * Fetches all items from the DynamoDB table that have a valid URL in their link property
 * This uses a secure backend API instead of directly accessing DynamoDB from the client
 * @returns {Promise<Array>} - Array of items with valid URLs
 */
export const fetchItemsWithValidUrls = async () => {
  try {
    // Call the backend API to get items with valid URLs
    const response = await fetch('http://localhost:3001/api/links');
    
    // Check if the response is ok
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    // Parse the JSON response
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error('Error fetching items from API:', error);
    throw error;
  }
};
