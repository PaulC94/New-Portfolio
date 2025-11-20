export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}

const DB_KEY = 'portfolio_contact_db';

/**
 * Simulates saving a message to a database
 */
export const saveMessage = (message: Omit<ContactMessage, 'id' | 'date'>): Promise<boolean> => {
  return new Promise((resolve) => {
    // Simulate network latency
    setTimeout(() => {
      try {
        // Get existing "table" data
        const existingData = localStorage.getItem(DB_KEY);
        const messages: ContactMessage[] = existingData ? JSON.parse(existingData) : [];

        // Insert new record
        const newMessage: ContactMessage = {
          id: Math.random().toString(36).substr(2, 9),
          date: new Date().toISOString(),
          ...message
        };

        messages.push(newMessage);
        
        // Commit to "database"
        localStorage.setItem(DB_KEY, JSON.stringify(messages));
        
        console.log('Database Insert Success:', newMessage);
        resolve(true);
      } catch (error) {
        console.error('Database Insert Error:', error);
        resolve(false);
      }
    }, 1000); // 1 second delay to simulate server
  });
};

/**
 * Retrieve all messages (For admin purposes, readable in console)
 */
export const getMessages = (): ContactMessage[] => {
    const existingData = localStorage.getItem(DB_KEY);
    return existingData ? JSON.parse(existingData) : [];
};