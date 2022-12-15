import { RaceEffect } from 'redux-saga/effects';

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<RaceEffect.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
