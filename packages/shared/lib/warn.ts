/** @format */

/* eslint-disable no-console */
export const warn = (message: string, ...args: any[]) => {
  if (process.env.NODE_ENV !== 'production') {
    const warnArgs = [`[Water warn]: ${message}`, ...args];
    console.warn(...warnArgs);
  }
};

export const error = (message: string, ...args: any[]) => {
  if (process.env.NODE_ENV !== 'production') {
    const warnArgs = [`[Water warn]: ${message}`, ...args];
    console.error(...warnArgs);
  }
};
