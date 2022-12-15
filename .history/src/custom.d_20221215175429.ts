import { RaceEffect } from 'redux-saga/effects';

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVG>>
  const src: string;
  export default src;
}
