#   Part 1: Introduction and Environment Setup
Install the React Developer Tools chrome extension
>   https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

Install NodeJS
>   https://nodejs.org/en/download/
-   for ubuntu (this may not all be necessary but it's what worked)
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
-   Just search for the extension and install it

CD into the working folder (in this case twtreacttutorial)

Create the app

```
npx create-react-app inventory
```
-   inventory is the name of the app

cd into inventory folder and start the server
```
cd ./inventory
yarn start
```
-   The file being rendered is in src/App.js

React Developer tools

-   Rightclick running webpage and select 'inspect'
-   You can now check 'Components' to inspect React code
-   You can use 'Profiler' to check the performance

#   Part 2: Project Structure
public folder:
-   The most important file is index.html
    -   React will inject itself into this file
    -   React will control everything in the root div
-   Files are referenced with:
    ```
    %PUBLIC_URL%/
    ```
-   In manifest.json you can edit the short name and name to what you'd like
    ```
    "short_name": "Inventory",
    "name": "Super Cool Inventory App",
    ```
    -   If you wanted to delete the icon you'd also need to delete the entry in this file
        ```
        {
            "src": "favicon.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
        },
        ```
    -   manifest.json kinda just gives a description of the application.  Useful for mobile web apps

We're about to do some html type coding and it's a pain in the ass without emmet.  Let's get emmet working in vscode for .jsx
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
-   Much more important folder than public
-   All of our source code goes here
    -   Everything bundled by webpack
-   All javascript files ***must*** go here
-   Often people will put a folder inside src for their components
-   Most important files:
    -   index.js
        -   root.render will render the component inside the document.getElementById root
        -   we're finding the root div and injecting what's rendered here inside the div
        -    Stict mode is more verbose and gives us more warning and errors than we'd typically get
        -   reportWebVitals(); is for analytics and not necessary.  We can delete that.
    -   App.js
        -   This is the main component for our app.  The first thing renedered
        -   Other things render from here
        -   We can delete most of this leaving the following:
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
        -   Note that the div as a className instead of class.  In react all classes have to be className because 'class' is protected.
        -   You can type js directly into this pseudo html
    -   App.css
        -   We can delete everything from here.  We don't have those divs anymore
    -   index.css has the global styles for our whole application
    -   App.test.js is for testing.  Can delete if you want, but we'll keep it in
    -   setupTest.js sets up tests.  Duh doy

root folder
-   package.json
    -   All of the dependencies for the app are defined here
    -   All installed dependencies get automagically added here
    -   You can also define your own scripts here
        -   A very simple command will install everything from package.json:
            ```
            npm install
            ```
-   README.md
    -   React readme file
        -   Has basic info on how to use React
-   .gitignore
    -   Stuff you don't want sync'd to git goes in here

node_modules
-   All of the depenancies live here

Webpack
-   JavaScript module bundler
-   `react-scripts start` in package.json bundles all of your source code into one large JavaScript file

Babel
-   JavaScript transcompiler that is used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines
    



