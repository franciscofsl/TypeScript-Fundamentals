# TypeScript Compilation Notes

## Compilation Command

```bash
npx --package typescript tsc --outDir dist index.ts
```

### Command Explanation:

- **`npx`**: Executes npm packages without needing to install them globally
- **`--package typescript`**: Specifies that we want to use the TypeScript package temporarily
- **`tsc`**: The TypeScript Compiler
- **`--outDir dist`**: Defines the output directory where compiled JavaScript files will be saved
- **`index.ts`**: The TypeScript file we want to compile

### What does this command do?

This command compiles the `index.ts` TypeScript file to JavaScript and saves the result in the `dist/` directory. It's useful when:

1. You don't have TypeScript installed globally
2. You want to compile a specific file without setting up a complete project
3. You need to specify a custom output directory

### Expected Result:

After executing the command, you'll find an `index.js` file in the `dist/` directory with the equivalent JavaScript code.

## Project Setup Steps

### Step 1: Initialize npm project

```bash
npm init -y
```

**What does this command do?**

- **`npm init`**: Creates a new `package.json` file for your project
- **`-y`**: Automatically accepts all default values without prompting for input

This command generates a basic `package.json` file with default settings, which is essential for managing dependencies and scripts in a Node.js/TypeScript project.

### Step 2: Install TypeScript as development dependency

```bash
npm install typescript --save-dev
```

**What does this command do?**

- **`npm install`**: Downloads and installs the specified package
- **`typescript`**: The TypeScript compiler package
- **`--save-dev`**: Installs the package as a development dependency (not needed in production)

This command:
1. Downloads TypeScript and adds it to your `node_modules` folder
2. Adds TypeScript to the `devDependencies` section of your `package.json`
3. Creates or updates the `package-lock.json` file to lock dependency versions

### Why these steps?

1. **`npm init -y`** sets up your project structure and dependency management
2. **`npm install typescript --save-dev`** gives you access to the TypeScript compiler locally
3. After these steps, you can use TypeScript tools and the compilation command mentioned above