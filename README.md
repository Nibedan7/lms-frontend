# LMS Frontend

### setup instruction

1.clone the project
```
    git clone https://github.com/Nibedan7/lms-frontend.git
```

2.move into the directory
```
    cd lms-frontend
```

3.Install dependencies
```
    npm i
```

4.run the server
```
    npm run dev
```

### setup instruction for tailwind

[Tail wind official instruction docs] (https://tailwindcss.com/docs/installation)

1. install tailwindcss

```
npm install -D tailwindcss
```
2.Create tailwind configure file

```
    npx tailwind init 
```

3. Add file extainsions to tailwind config file in the content property
```
"./src/**/*.{html,js,jsx,ts,tsx}"
```

4. Add the tailwind deractives at the top of the `index.css` file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Adding plugins and dependencies

```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwind/line-clamp
```

### Configure auto import sort eslint

1. Install simple import sort
```
npm i -D eslint-plugin-simple-import-sort
```

2. Add rule in `.eslint.cjs`
```
    'simple-import-sort/imports' : 'error'
```

3. Add simple-import sort plugin in  `.eslint.cjs`
```
plugins: [... , 'simple-import-sort' ]
```

4. To enable auto import sort on file save in vscode
    - Open `settings.json`
    - add the following config
    ```
        "editor.codeActionsOnSave" : {
            "source.fixAll.eslint" : true
        }
    ```