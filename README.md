# Week 3 Workshop - Express.js Login System

This is a simple Express.js application that demonstrates basic server-side routing, client-side AJAX requests, and form handling.

## Features

- **Login Form**: A responsive login form with email and password fields
- **Server-side Authentication**: Validates user credentials against hardcoded user data
- **Account Page**: Displays user information after successful login
- **AJAX Integration**: Uses jQuery for seamless form submission without page refresh
- **Responsive Design**: Mobile-friendly CSS styling

## Project Structure

```
week3-workshop/
├── routes/
│   ├── homeroute.js      # Homepage route (login form)
│   ├── accountroute.js   # Account page route
│   └── loginroute.js     # Login authentication route
├── www/
│   ├── form.html         # Login form page
│   └── account.html      # Account information page
├── public/
│   ├── script.js         # Client-side JavaScript
│   └── styles.css        # CSS styling
├── server.js             # Main Express server
├── package.json          # Node.js dependencies
└── README.md             # This file
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd week3-workshop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

### Test Credentials

You can use any of these credentials to test the login functionality:

- **Email**: user1@email.com, **Password**: 123
- **Email**: user2@email.com, **Password**: 456  
- **Email**: admin@email.com, **Password**: admin123

### Routes

- `GET /` - Homepage with login form
- `GET /account` - Account information page
- `POST /login` - Authentication endpoint

### Response Format

The login endpoint returns JSON:
- Success: `{"valid": true}`
- Failure: `{"valid": false}`

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript, jQuery
- **Styling**: Custom CSS with gradient backgrounds and responsive design

## Assignment Tasks Completed

✅ **Task 1**: Created Git repository and initialized npm project  
✅ **Task 2**: Set up basic Express.js project with proper structure  
✅ **Task 3**: Implemented server-side routing for homepage, account, and login  
✅ **Task 4**: Added client-side form submission with jQuery AJAX  

## Development Notes

- Code is modularized using `module.exports` and `require()`
- Static files are served from the `public` directory
- Form validation is handled both client-side and server-side
- Error and success messages are dynamically shown/hidden using CSS classes

## License

This project is for educational purposes as part of Week 3 workshop.
