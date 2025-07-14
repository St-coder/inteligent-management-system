/// <reference types="react-scripts" />

declare module 'mockjs';

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_API_URL: string;
  }
}