module.exports = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 4000,
  URL: process.env.BASE_URL || 'http://localhost:4000/',
  MONGODB_URI: process.env.MONGODB_URI || '',
  MONGODB_LOCAL: process.env.MONGODB_LOCAL || process.env.MONGODB_URI,
}