const Config = {
    serverPort: process.env.PORT || 3001,
    dbApiUrl: process.env.DB_API_URL || 'http://localhost:10010/api/v1',
}

module.exports = Config;