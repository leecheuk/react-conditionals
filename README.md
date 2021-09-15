# React conditional

React conditional are components for rendering components conditionally.

## Installation
```bash
$ npm install conditional-react-components
```

## Usage
```tsx
import { RxIf } from 'conditional-react-components';

const SHOW_NAME = false;

const App = () => (
  <div>
    <RxIf condition={SHOW_NAME}>
      <span>John Doe</span>
    </RxIf>
  </div>
);

export default App;
```
