const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, errors } = format;

const logger = createLogger({
    transports: [new transports.Console()],
    format: combine(
        format.label({ label: 'security-log'}),
        timestamp({ format: 'YYYY-MM-DDTHH:mm:ss' }),
        printf(info => `[${info.timestamp}] | ${info.message}`)
    ),
});

module.exports = logger;
