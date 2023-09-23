const app = require('./app');
const connectDatabase = require('./config/database');
const PORT = process.env.PORT || 8085;

// UncaughtException Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});

// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});