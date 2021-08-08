/// <reference types="react-scripts" />
declare module '*.md'
declare module 'rehype-raw' {
    import { Plugin } from 'unified';
  
    const rehypeRaw: Plugin;
  
    export default rehypeRaw;
  }