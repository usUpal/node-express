# node-express

1. Global --> no window

2. path to current dir ```__dirname```

3. file name ```__filename```

4. ```require``` function to use modules

5. ```module``` info about current module

6. ```process``` info about env where the program is being executed

7. Module

8. ```const name = require('./one')
   const name = require('./one') // one.js file
   const hi = require('./two')  // two.js
   
   
   
   hi(name.elon)
   hi(name.upal)

9. Build-in modules:  ```os----PATH----FS----HTTP ```

   ## npm (node package manager)

   ```$ npm init```

   ```$ npm init -y```  -y flag means no ques been asked

   ```$ npm install ``` to download dependencies 

   use ```.gitignore``` to ignore ```node_module```
   ```$ npm i nodemon -D``` -D for dev dependencies usually use for testing

   ```javascript
   //in package.json
    "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "start": "node app.js", //***
       "dev": "nodemon app.js" //*** for development purpose
     },
   $ npm run start ---> It will run $ node app.js
   $ npm run dev   ---> It will run $ nodemon app.js
   ```

   ```javascript
   // npm global command, comes with node
   // npm --version
   
   // local dependency - use it only in this particular project I
   // npm i <packageName> 6
   
   // global dependency - use it in any project
   // npm install -g <packageName>
   
   // sudo npm install -g <packageName> (mac)
   // package.json - manifest file (stores important info about project/package)
   
   // manual approach (create package.json in the root, create properties etc)
   
   // npm init (step by step, press enter to skip) 
   // npm init -y (y=everything default)
   
   ```

   ``` $npm uninstall packagename```

   

   

   

   