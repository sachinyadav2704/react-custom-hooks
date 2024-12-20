# Project Image


# React Custom Hooks Project

This project demonstrates the use of **custom hooks** in React. Custom hooks allow us to extract logic from components and reuse it across different parts of the application, improving code modularity, reusability, and maintainability.

## What is a Custom Hook?

A **custom hook** is a JavaScript function in React that allows you to reuse stateful logic across multiple components. It is a way to extract common functionality that can be shared between different components without altering the component structure.

Custom hooks use React's built-in hooks like `useState`, `useEffect`, `useContext`, etc., to handle state and side effects inside them. They follow the naming convention `use<name>` to indicate they are hooks.

### Key Points about Custom Hooks:
- **Reusability**: Custom hooks encapsulate logic, making it reusable across multiple components.
- **State and Side Effects**: They can use built-in React hooks to manage state and side effects.
- **Abstraction**: Custom hooks help abstract complex logic and keep components clean and focused on the UI.
- **No Rendering**: Custom hooks don’t render anything themselves, but return values or functions that can be used by the components.

### Syntax of a Custom Hook:

A custom hook is a JavaScript function that can contain any logic and hooks. Here's an example:

```javascript
import { useState } from 'react';

// Example of a custom hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export default useCounter;
```

## Using Custom Hooks in Components

Once a custom hook is created, you can use it in your functional components just like any other React hook. Here's an example of how you can use the `useCounter` custom hook in a component:

### Example: Using `useCounter` in a Component

```javascript
import React from 'react';
import useCounter from './hooks/useCounter';  // Import custom hook

function CounterComponent() {
  // Use the custom hook
  const { count, increment, decrement, reset } = useCounter(10);  

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterComponent;
```


## Benefits of Custom Hooks

1. **Separation of Concerns**:  
   Custom hooks allow you to isolate complex logic from the component, making the component simpler and easier to manage. This ensures that your components remain focused on their primary task: rendering the UI.

2. **Code Reusability**:  
   Custom hooks enable you to reuse the same logic across different components. This eliminates the need for code duplication and enhances the maintainability of your application.

3. **Testability**:  
   Custom hooks are easier to test because they encapsulate the logic separately from the components. This makes unit testing simpler, as you can test the logic in isolation without needing the entire component.

4. **Cleaner Components**:  
   Components remain focused on rendering the UI, while the logic is handled by custom hooks. This separation leads to cleaner and more readable components, which are easier to maintain in the long run.

---

## When to Use Custom Hooks

- **When you need to share logic between multiple components**:  
  Custom hooks are perfect for handling logic that needs to be shared between multiple components, such as data fetching, form handling, or state management.

- **When the logic in a component becomes too complex**:  
  If the logic inside a component starts to become too complex, it may be a good idea to abstract that logic into a custom hook. This keeps your components cleaner and makes the logic more manageable.

- **For handling events, side effects, or managing state**:  
  Custom hooks are ideal for managing events, side effects (like data fetching), and state that needs to be shared between multiple components in the application.

---

## Example Custom Hooks in this Project

In this project, several custom hooks are implemented to demonstrate different functionalities:

- **`useFetch`**: Fetches data from a given API.
- **`useLocalStorage`**: Manages state using `localStorage` to persist data across page reloads.
- **`useDebounce`**: Debounces an input value to delay the action until the user has finished typing.
- **`useWindowSize`**: Tracks the window size (width and height) of the browser.
- **`useOnClickOutside`**: Detects clicks outside a specified element to close modals or dropdowns.
- **`useInterval`**: Creates an interval to perform repeated actions at specified time intervals.
- **`useTimeout`**: Executes a function after a specified timeout.
- **`useCounter`**: Provides a simple counter with increment, decrement, and reset functionality.

These custom hooks are used in various components throughout the project, demonstrating how reusable logic can be shared among them. By using custom hooks, you can keep your components clean and modular while maintaining a clear separation of concerns.
