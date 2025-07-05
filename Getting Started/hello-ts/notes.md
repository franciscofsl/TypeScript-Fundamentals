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