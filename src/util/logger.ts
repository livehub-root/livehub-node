import { createLogger, LoggerOptions, format } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import fs from 'fs';
import mkdirp from 'mkdirp';
import { Format } from "logform";


const logPath = "./logs/";

if (!fs.existsSync(logPath)) {
    mkdirp.sync(logPath);
};

const { combine, timestamp, printf } = format;

const runtimeFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const accessFormat = printf(({ message, timestamp }) => {
    return `${timestamp} : ${message}`;
});

const errorFormat = printf(({ message, timestamp }) => {
    return `${timestamp} : ${message}`;
});

function create(fileName: string, format: Format) {

    let transport = new DailyRotateFile({
        filename: logPath + fileName + '/%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d'
    });

    // transport.on('rotate', function (oldFilename, newFilename) {
    //     // do something fun
    // });
    let options: LoggerOptions = {
        transports: transport,
        format: combine(
            timestamp(),
            format
        )
    }

    let logger = createLogger(options);

    return logger;
}

export const runtimeLog = create('runtime', runtimeFormat);
export const accessLog = create('access', accessFormat);
export const errorLog = create('error', errorFormat);

export const accessLogStream = {
    write: (text: string) => {
        accessLog.info(text.replace(/\n$/, ''))
    }
}

export const errorLogStream = {
    write: (text: string) => {
        errorLog.info(text.replace(/\n$/, ''))
    }
}
