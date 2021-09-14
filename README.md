# React conditionals

React conditionals is for rendering components conditionally.

## Installation
```bash
$ npm install react-conditionals
```

## Usage
```tsx
import { RxIf } from 'react-conditionals';

const arr = [];

const App = () => (
  <RxIf conditional={arr.length > 0}>
    
  </RxIf>
);

export default App;
```
