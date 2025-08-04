// Centralized user data storage
const users = [
    { 
        id: 1,
        email: "user1@email.com", 
        password: "123",
        name: "John Doe",
        avatar: "avatar1.png"
    },
    { 
        id: 2,
        email: "user2@email.com", 
        password: "456",
        name: "Jane Smith",
        avatar: "avatar2.png"
    },
    { 
        id: 3,
        email: "admin@email.com", 
        password: "admin123",
        name: "Admin User",
        avatar: "avatar3.png"
    }
];

module.exports = {
    // Get all users
    getAllUsers: () => users,
    
    // Find user by email and password
    findUserByCredentials: (email, password) => {
        return users.find(u => u.email === email && u.password === password);
    },
    
    // Find user by ID
    findUserById: (id) => {
        return users.find(u => u.id === id);
    },
    
    // Update user profile
    updateUserProfile: (id, updates) => {
        const userIndex = users.findIndex(u => u.id === id);
        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...updates };
            return users[userIndex];
        }
        return null;
    }
};
