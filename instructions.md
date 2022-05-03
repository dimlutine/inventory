# Part 1: Introduction and Environment Setup

Install the React Developer Tools chrome extension

> https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

Install NodeJS

> https://nodejs.org/en/download/

- for ubuntu (this may not all be necessary but it's what worked)
  ```
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  sudo apt-get install -y nodejs
  node -v
  sudo apt install npm
  npm -v
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
  sudo apt install --no-install-recommends yarn
  curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
  ```

Install ES7+ React/Redux/React-Native snippets in vscode for some snippits and such

- Just search for the extension and install it

CD into the working folder (in this case twtreacttutorial)

Create the app

```
npx create-react-app inventory
```

- inventory is the name of the app

cd into inventory folder and start the server

```
cd ./inventory
yarn start
```

- The file being rendered is in src/App.js

React Developer tools

- Rightclick running webpage and select 'inspect'
- You can now check 'Components' to inspect React code
- You can use 'Profiler' to check the performance

# Part 2: Project Structure

public folder:

- The most important file is index.html
  - React will inject itself into this file
  - React will control everything in the root div
- Files are referenced with:
  ```
  %PUBLIC_URL%/
  ```
- In manifest.json you can edit the short name and name to what you'd like
  ```
  "short_name": "Inventory",
  "name": "Super Cool Inventory App",
  ```
  - If you wanted to delete the icon you'd also need to delete the entry in this file
    ```
    {
        "src": "favicon.ico",
        "sizes": "64x64 32x32 24x24 16x16",
        "type": "image/x-icon"
    },
    ```
  - manifest.json kinda just gives a description of the application. Useful for mobile web apps

We're about to do some html type coding and it's a pain in the ass without emmet. Let's get emmet working in vscode for .jsx

1.  Open any source folder on VS Code, and go to Settings :
    Ctrl + ,
2.  Go to the Workspace Settings tab.
3.  On the left sidebar, go to Extensions dropdown, and choose Emmet.
4.  Click “Edit in settings.json”
5.  Replace what's there with:
    ```
    {
        "emmet.preferences": {},
        "emmet.includeLanguages": {
            "javascript": "javascriptreact",
            "typescript": "typescriptreact"
        }
    }
    ```

src folder

- Much more important folder than public
- All of our source code goes here
  - Everything bundled by webpack
- All javascript files **_must_** go here
- Often people will put a folder inside src for their components
- Most important files:

  - index.js
    - root.render will render the component inside the document.getElementById root
    - we're finding the root div and injecting what's rendered here inside the div
    - Stict mode is more verbose and gives us more warning and errors than we'd typically get
    - reportWebVitals(); is for analytics and not necessary. We can delete that.
  - App.js

    - This is the main component for our app. The first thing renedered
    - Other things render from here
    - We can delete most of this leaving the following:

      ```
      import './App.css';

      function App() {
      return (
          <div className="App">
          <p>Barebones app</p>
          </div>
      );
      }

      export default App;
      ```

    - Note that the div as a className instead of class. In react all classes have to be className because 'class' is protected.
    - You can type js directly into this pseudo html (JSX)

  - App.css
    - We can delete everything from here. We don't have those divs anymore
  - index.css has the global styles for our whole application
  - App.test.js is for testing. Can delete if you want, but we'll keep it in
  - setupTest.js sets up tests. Duh doy

root folder

- package.json
  - All of the dependencies for the app are defined here
  - All installed dependencies get automagically added here
  - You can also define your own scripts here
    - A very simple command will install everything from package.json:
      ```
      npm install
      ```
- README.md
  - React readme file
    - Has basic info on how to use React
- .gitignore
  - Stuff you don't want sync'd to git goes in here

node_modules

- All of the depenancies live here

Webpack

- JavaScript module bundler
- `react-scripts start` in package.json bundles all of your source code into one large JavaScript file

Babel

- JavaScript transcompiler that is used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines

# Part 3: Components and JSX

In App.js the function App is a functional component

JSX

- Stands for JavaScript XML
- Used to evaluate JavaScript expressions right inside your html

JSX variables are declared like normal JS variables

```
const title = "This is my title.";
```

JSX variables are called with curly brackets around the variable name

```
{title}
```

This is an example of using a ternary operator with JSX. This function will display the `title` if the variable `showTitle` is `true`

```
function Info() {
  const title = "This is my title.";
  const showTitle = false;
  return (
    <div>
      <h1>{showTitle ? title : ""}</h1>
      <p>Manage your stuff</p>
    </div>
  );
}
```

Components require JSX Elements

- JSX Elements are the HTML looking things

Components can be reused multiple times

Components can have properties sent to it

Components can be rendered inside other components

There are two ways to make a component

- Function

  - Whenever you're trying to return from a JSX component it must have one parent element (like `<div>` or `<form>`)
  - In this example the component `<Info />` is being called in the App component. The function defining `<Info />` is `function Info()`

    ```
    function App() {
        return (
            <div className="App">
            <Info />
            </div>
        );
    }

    function Info() {
        return (
            <div>
                <h1>Inventory System</h1>
                <p>Manage your stuff</p>
            </div>
        );
    }
    ```

  - Exporting/Importing Functions

    - You can create a new file to house your code and export it. This can be done as you build the function
      ```
      export default function Info() {
          ...
      }
      ```
    - Or at the end of the file

      ```
      export default Info()
      ```

    - Functions can be exported as default `export default function Info()` or not `export function Info()`. Only one **default** function is allowed
      - To import Info.js if exported as default
        ```
        import Info from "./Info.js"
        ```
      - If Export is not default
        ```
        import { Info } from "/Info.js"
        ```

- Class

  - Class components extend React.Component
  - First we import React
    ```
    import React from "react";
    ```
  - Now we can create the class. In this example `ClassName` is whatever class name we chose
    ```
    class ClassName extends React.Component {
        render() {
            ...
        }
    }
    ```

- You can convert a function component like `Clock` (below) to a class in five steps:

  ```
  function Clock(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  ```

  - Create an ES6 class, with the same name, that extends React.Component.
    Add a single empty method to it called `render()`.
    Move the body of the function into the `render()` method.
    Replace `props` with `this.props` in the `render()` body.
    Delete the remaining empty function declaration.
    ```
    class Clock extends React.Component {
      render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
    }
    ```

# Part 4: Props, Default Props, and Prop Types

Properties (props) can be passed to a component

Example of props being passed to AddItem. `text` and `number` are props:

```
<AddItem text="stuff" number={2} />
```

Props in functions:

- To access the props we must define a parameter called `props` and now the we can use the props variable to access the properties passed through. This, by default, will be a JavaScript object:

  ```
  function AddItem(props) {
    const value = props.text
    const anotherValue = props.number
    return(
      <form>
        <input type="text" id="text-form" value={value} />
      </form>
    )
  }
  ```

- You can also omit the first part of the props by destructuring the props in the parameters of the function:

  ```
  function AddItem({ text, number }) {
    const value = text;
    const number = number;
  ```

- Props are read only. They can not be changed from inside the component that they're being passed to. If you've destructured the props, you can edit them as they're actually a copy of the original props. Even still, this is not a good practice.

- Default Props:

- If the props are destructured, you can set the default prop the same as you would set a default paramater in any JavaScript:

  ```
  function AddItem({ text, number=5 }){
    ...
  }
  ```

- Otherwise they must be set after the function's close

  ```
  function AddItem(props){
    ...
  }

  AddItem.defaultProps = {
    number: 5,
  }
  ```

Props in Classes:

- We create the class and then define the constructor

  ```
  class Info extends React.Component {
    constructor(props){
      super(props);
    }
    ...
  ```

- `constructor` is called with props being passed.
- `super(props);` must be called to call the constructor of the class that you're inheriting from. `React.Component` has it's own constructor which sets up the actual component. It is manually called when you override the constructor inside the child Class. The same `props` must be sent from the `constructor` to the `super` constructor so you don't run into errors.

- Whenever you're not inside the constructor and you want to access the `prop` you must use the `this`keyword.

  ```
  const title = this.props.title;
  ```

- Just like with the functional components, the props are read only and can't be modified.

Prop Types:

- Must be imported

  ```
  import { PropTypes } from "prop-types";
  ```

- Can be used to ensure only specific input is considered.

  ```
  AddItem.PropTypes = {
    number: PropTypes.number,
    text: PropTypes.string,
  };
  ```

# Part 5: State and useState

State is an object of a set of observable properties that control the behavior of the component.

State is destroyed when the website is reloaded. It is only stored on the frontend

Hook

- A function that's provided by React that you can use to 'hook' into and modify its behavior

useState
To import:
`import { useState } from "react";`
useState should be a const when used in a function. Then use square brackets `[]` and define two variables, the variable that will store the state and the name of the function that you're going to use to update this state. It is a good practice to name them like `[thing, setThing]`. Inside of `useState` you define the default state `useState("defaultString")`.

    ```
    const [title, setTitle] = useState("");
    ```

To update the state, simply call the function with the updated value.

    ```
    function ButtonState() {
      const [count, setCount] = useState(0);

      const updateCountClicked = () => {
        setCount(count + 1);
      };
      return (
        <div>
          <p>Counter: {count}</p>
          <button onClick={updateCountClicked}>Update Count </button>
        </div>
      );
    }
    ```

Passing state to child components

```
function ButtonState() {
const [title, setTitle] = useState("");
const [count, setCount] = useState(0);

const updateTitleClicked = () => {
  setTitle("Title");
};

const updateCountClicked = () => {
  setCount(count + 1);
};

return (
  <div>
    <Data title={title} count={count} />
    <button onClick={updateTitleClicked}>Update Title </button>
    <button onClick={updateCountClicked}>Update Count </button>
  </div>
);
}

const Data = (props) => {
return (
  <div>
    <p>Title: {props.title}</p>
    <p>Count: {props.count}</p>
  </div>
);
};
```

Using State inside a Class based component

- Because we're in a class we'll have to prepose our variables and function calls with `this`.
- Define what you want to be held by state. Store an object in `this.state` inside the constructor on the line after `super(props)` inside a Class.
  ```
    this.state = {
      count:0
    };
  ```
- State is called with `this.state.count`
  ```
    <p>Count: {this.state.count} </p>
  ```
- Updating the state

  - There are two ways to bind the function to the class

    - You can bind the function in the constructor after the state object is declared. If you bind the function you can simply name it from within the return. Note, we're naming the function in the return. We're not using parenthesis at the end like we will for the next way.

      ```
      buttonPressed() {
        this.setState({ count: this.state.count + 1 });
        }
      this.buttonPressed = this.buttonPressed.bind(this)
      ...
      <button onClick={this.buttonPressed}>Click Me</button>
      ```

    - We can also just call the function by using an arrow function. Note that now we're calling the function with the parenthesis included at the end of `buttonPressed()`. You do not need to put every state here if you're not using them.
      ```
      <button onClick={() => this.buttonPressed()}>Click Me</button>
      ```

# Part 5.5: Global Snippets

Global Snippets

- We're going to be typing a lot of the same stuff over and over, let's make it easy with snippits.

  - In VSCode we're going to go to File->Preferences->User Snippets
  - Now we can create our own custom snippet to import useState for us by creating a JSON object:

  ```
  "Import useState": {
  	"prefix": "imrs",
  	"body": "import { useState } from 'react';"
  }
  ```

  - The first part `"Import useState"` is the title of our snippet.
  - `imrs` is what we will type to run the body
  - `"import { useState } from 'react';"` is what will output if we type the prefix while in a .js file

# Part 6: Forms and Events

- To make a button _not_ refresh the page pass it `type="button"`

- onChange

  - `onChange` is an event that can pass a function. In the following `e` is the event that occured. It will allow us to access what the user types into the field.
    ```
    <input type="text" id="name-field" value={name} onChange={(e) => setName(e.target.value)} />
    ```

- onClick

  - `onClick` is an event handler that occurs when an object is clicked.
  - `onClick` will call a function created above the return
    ```
    const searchButtonPressed = () => {
    console.log(name);
    };
    return (
      ...
      <button type="button" onClick={searchButtonPressed}>
            Search
          </button>
      ...
    ```

- Sending data back as props

  - We can't simply call the data in from the component. We must use a callback. We can use this to update the parent component from the child.

    - Callbacks allow you to call a function to update the state in a component.

    ```
    //App.js
    ...
    import { useState } from 'react';
    function App() {
      const [data, setData] = useState({});

      const updateData = (searchParams) => {
        setData(searchParams);
      }
      return (
        <div className="App">
          <SearchBar callback={ updateData}/>
          <p>{"data" in data ? data["data"] : "no data to display"}</p>
        </div>
      );
    }

    //SearchBar.js
    ...
    function SearchBar(props) {
      const searchButtonPressed = () => {
        props.callback({ data: "test" });
      };
    ,,,
    ```

    - In the above code the `callback` is sent to SearchBar from App.js in props. SearchBar sends the JavaScript object `{ data: "test" }`. which we display using the ternary operator `{"data" in data ? data["data"] : "no data to display"}`. This reads if `"data"` is in `data` then present `data["data"]`, otherwise present `"no data to display"`.

# Part 7: Displaying Data Dynamically

We can store data in an array by adding a JavaScript Object to our state.

```
  const [data, setData] = useState({
  items: [],
});
```

- We can now store the data.
  ```
    <AddItem addItem={addItemToData} />
  ```
- In the above `AddItem` is a component. `addItem` is sent via props and stores data via the callback `addItemToData`:

  ```
  const addItemToData = (item) => {
    let Items = data["Items"];
    items.push(item);
    setData({ items: items });
  };
  ```

  - `items` is first assigned `data["items"]` (stored in state). `item` (argument) is pushed to `items` which is then set as the current state using `setData(currentData)

- We can clear the data after the button is pressed in AddItem.js where the `addItemButtonPressed` function is called:
  ```
  const addItemButtonPressed = () => {
    props.addItem({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };
  ```

Displaying the data

```
function ItemsDisplay(props) {
  return (
    <div>
      {props.items.map((item) => {
        return <p>Name: {item.name}</p>;
      })}
    </div>
  );
}

```

- In the above `ItemsDisplay` takes in `props` and returns `props.items.map((item) => return <p>Name: {item.name}</p>)`. The `map` method creates a new array populated with the results of the function `(item) => return <p>Name: {item.name}</p>` on every element in `props.items`.

- We can add a numberic identifier by adding the following to `addItemToData` in App.js
  ```
  item.id = items.length + 1;
  ```
- We can call it in ItemsDisplay.js
  ```
    <p>Item Number: {item.id}</p>
  ```
- We can rearrange things a bit to make them look a little less sloppy by creating a function and calling `map` on it:

  ```
  function ItemsDisplay(props) {
      const showItem = (item) => {
          return (
              <div>
                <p>Item Number: {item.id}</p>
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
                <p>Type: {item.type}</p>
                <p>Brand: {item.brand}</p>
              </div>
          );
      };

      return (
          <div>
          {props.items.map(showItem)}
          </div>
      );
  }

  export default ItemsDisplay;
  ```

# Part 8: Styling Components

Global Style Sheets

- Index.css and App.css are examples of Global Style Sheets
  - You simply import them as so
    ```
      import "./App.css";
    ```

CSS Modules

- To make the css file only apply to a specific module you must rename it to name.module.css. So if it was originally App.css you would rename it to App.module.css
  - You will also import the stylesheet a little differently. You'll import the object `module`
    ```
    import styles from "./App.module.css";
    ```
  - The `className` will also be called a little differently. You'll prefix the class name with `styles`:
    ```
    <p className={styles.blue}>test </p>
    ```

React Library - Styled Components

- Must be installed from console

  ```
  yarn add styled-components
  ```

  or

  ```
  npm install --save styled-components
  ```

  - Now it can be imported

    ```
      import styled from "styled-components";
    ```

  - To use styled components you create a `const` with `styled.tag` and then add two backticks. Inside the backticks you'll define the styles for the component. Then use it like a component:
    ```
      const Title = styled.h1`
        color: blue;
      `
      <Title>Title goes here </Title>
    ```
  - You can pass props to the styled component. The JavaScript will be called with `${(props) => (JavaScript Goes Here)}`
    ```
    const Title = styled.h1` color: ${(props) => (props.color ? props.color : "red" )}; ` <Title>Title goes here </Title>
    ```

In-line styles

- Pretty similar to html in-line. Within the tag you'll add `style={{tag:value}}`
  ```
    <div className="row mt-3" style={{ color: "red"}}>Test</div>
  ```

Bootstrap

- Is a css library with a bunch of prebuilt stuff
- Should be installed from console:
  ```
  npm install react-bootstrap bootstrap
  ```
- Now we can globally import bootstrap in index.js

  ```
    import 'bootstrap/dist/css/bootstrap.min.css';
  ```

- Read the Bootstrap docs for info on how to use Bootstrap

# Part 9: Filtering/Searching for Data

We can filter the data in the App component. This way we only pass the data that we want to be displayed to the ItemsDisplay component. In the following `items` is sent to `ItemsDisplay` with the value `filterData(data["items"])`, which calls `filterData` sending `data["items"]` as the arg. `filterData` first checks to see if `filters` (state) is empty by checking the `length` of its `keys`. If it is, it returns `data`. Then it runs through a `for` loop for each `item of data`. `if` `filters.name` is an empty string and `item.name` isn't the same as `filters.name` it will `continue` to the next iteration of the loop. This skips over `filteredData.push(item)` so that item doesn't get pushed. If it passes all of the logic, the item does get pushed and then finally the whole `filteredData` array is returned.

```
  const filterData = (data) => {
    const filteredData = [];
    if (Object.keys(filters).length === 0) {
      return data;
    }
    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }
      if (
        parseFloat(filters.price) !== 0 &&
        parseFloat(filters.price) < parseFloat(item.price)
      ) {
        continue;
      }
      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }
      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }
      filteredData.push(item);
    }
    return filteredData;
  };
```

```
<ItemsDisplay items={filterData(data["items"])} />
```

# Part 10: JSON server, HTTP, & Fetch

JSON server is an npm package that allows you to make a mock-api

- We install JSON server globally via the terminal with the `-g` flag

  ```
  npm install -g json-server
  ```

- Once JSON server is installed we can create our database

```
  touch db.json
```

- Add items to db.json

  ```
  {
    "items":[]
  }
  ```

- To run JSON Server cd to the root folder and run in terminal:
  ```
    json-server db.json
  ```
  - or to run on a different port
  ```
    json-server -p 4000 db.json
  ```

Fetch and HTTP Resquests

- We can send a request to a URL using `fetch`. It takes a URI and a JavaScript Object as args.

  - The JavaScript Object can define the request method with `method`.
    - Core HTTP Methods
      - `get` - Usually gets information. This is the default.
      - `post` - Creates or sends information to the server.
      - `put` - Updates something on the server.
      - `delete` - Deletes something from the server.
  - The `headers` will define the format of the data.
  - `body` will send our payload `JSON.stringify(item)` will convert it to a string.

  ```
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };

    fetch("http://localhost:4000/items", requestOptions);
  ```

  - `.then()` can be chained onto the end of `fetch`. It will wait for `fetch` to run, then run the function sent as an arg.

  ```
  fetch("http://localhost:4000/items", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        items.push(item);
        setData({ items: items });
      });
  ```

# Part 11: Lifecycle Methods and useEffect

<a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">Life Cycle Cheat Sheet</a>

Mounting

- Mount: Mounting is the process of outputting the visual representation of the component into the final UI representation. In a browser, that would mean outputting a React Element into an actual DOM element.

- These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

  - `constructor()`
  - `static getDerivedStateFromProps()`
  - `render()`
  - `componentDidMount()`

Updating

- An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

  - `static getDerivedStateFromProps()`
  - `shouldComponentUpdate()`
  - `render()`
  - `getSnapshotBeforeUpdate()`
  - `componentDidUpdate()`

Unmounting

- This method is called when a component is being removed from the DOM:

  - `componentWillUnmount()`

What is a hook?

- A hook is a function provided by React that allows you to modify the default behavior of a component
  - By default there is no state to a component, but if we use the hook `useState` we can add state to the component and we tell it to update every time the state

`useEffect` is written inside the body of the component function before the `return`. There can be multiple instances of `useEffect`

- It is essentially the same as `componentDidMount` and `componentDidUpdate`. Whenever a component mounts or updates the function inside `useEffect` will run.

  ```
  useEffect(() => {
    console.log("use effect");
  });
  ```

- Cleanup Operation

  - Whatever function you `return` in useEffect will run when the component is about to unmount. Just like `componentWillUnmount`.

    ```
      useEffect(() => {
        console.log("use effect");

        return () => {
          console.log("clean up")
        }
      });
    ```

- To make `useEffect` only run in certain situations, you will pass a dependency list.

  - A dependency list is a list of variables that cause `useEffect` to run when they are updated.
  - To only run when a component is mounted use an empty list for the dependency list:

    ```
      useEffect(() => {
        console.log("use effect");

        return () => {
          console.log("clean up");
        };
      }, []);
    ```

  - To only run when a variable (`data` in this example) changes:

    ```
      useEffect(() => {
        console.log("use effect");

        return () => {
          console.log("clean up");
        };
      }, [data]);
    ```

  - Use `useEffect` to load db on component creation
    ```
      useEffect(() => {
        fetch("http://localhost:4000/items")
          .then((response) => response.json())
          .then((data) => setData({ items: data }));
      }, []);
    ```

# Part 12: Deleting Items

- To delete an item, we'll need to remove the item from both the front end and the backend.
- We'll create a button in our table
  ```
    <button onClick={() => deleteItem(item)} className="btn btn-danger">
            Delete
    </button>
  ```
- And a function to handle the delete
  ```
    const deleteItem = (item) => {
      const items = data["items"];
      const requestOptions = {
        method: "DELETE",
      };
      fetch(`http://localhost:4000/items/${item.id}`, requestOptions).then(
        (response) => {
          if (response.ok) {
            const idx = items.indexOf(item);
            items.splice(idx, 1);
            setData({ items: items });
          }
        }
      );
    };
  ```
- And pass that function to the props
  ```
    <ItemsDisplay
          deleteItem={deleteItem}
          items={filterData(data["items"])}
        />
  ```
