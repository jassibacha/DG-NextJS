import { RateLimiter } from 'limiter'

export const limiter = new RateLimiter({
    tokensPerInterval: 3, // maximum requests per second, munutem etc
    interval: 'minute',
    fireImmediately: true
})