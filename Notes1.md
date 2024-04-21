
```markdown
# React Code Adjustments

Here are a few examples of React code adjustments commonly used to adhere to JSX syntax conventions:
every thing should be terminated />

1. **Changing `class` to `className`:**
   ```jsx
   // Before
   <div class="container">Hello, World!</div>

   // After
   <div className="container">Hello, World!</div>
   ``` 

2. **Using `htmlFor` instead of `for` for labels:**
   ```jsx
   // Before
   <label for="username">Username:</label>
   <input type="text" id="username" />

   // After
   <label htmlFor="username">Username:</label>
   <input type="text" id="username" />
   ```

3. **Applying inline styles using `style` object:**
   ```jsx
   // Before
   <div style="color: red; font-size: 16px;">Hello, World!</div>

   // After
   <div style={{ color: 'red', fontSize: '16px' }}>Hello, World!</div>
   ```

4. **Handling events in JSX:**
   ```jsx
   // Before
   <button onclick={handleClick}>Click me</button>

   // After
   <button onClick={handleClick}>Click me</button>
   ```

5. **Rendering a list of items using `map()`:**
   ```jsx
   // Before
   <ul>
       <li>Item 1</li>
       <li>Item 2</li>
       <li>Item 3</li>
   </ul>

   // After
   <ul>
       {items.map((item, index) => (
           <li key={index}>{item}</li>
       ))}
   </ul>
   ```

6. **Conditionally rendering elements:**
   ```jsx
   // Before
   {loggedIn ? <p>Welcome, User!</p> : null}

   // After
   {loggedIn && <p>Welcome, User!</p>}
   ```

7. **Using `dangerouslySetInnerHTML` for HTML content:**
   ```jsx
   // Before
   <div innerHTML="<p>This is HTML content</p>"></div>

   // After
   <div dangerouslySetInnerHTML={{ __html: "<p>This is HTML content</p>" }}></div>
   ```


hooks 
Other React hooks include:

- `useEffect`: Manages side effects in functional components.
- `useContext`: Accesses context within functional components.
- `useReducer`: Alternative to `useState` for more complex state logic.
- `useCallback`: Memoizes functions to prevent unnecessary re-renders.
- `useMemo`: Memoizes values to optimize performance by caching expensive computations.
- `useRef`: Creates a mutable ref object to persist values across renders.
- `useLayoutEffect`: Similar to `useEffect`, but runs synchronously after all DOM mutations.
- `useImperativeHandle`: Customizes the instance value that is exposed by a ref.
- `useDebugValue`: Adds debugging information to custom hooks.