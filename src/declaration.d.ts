declare module "*.css";
declare module "*.scss";
declare module "*.svg";
declare module "*.png";
declare module "*.jpg";

// telling TypeScript “it’s okay to import CSS files.”

// JavaScript is a "Chill" Guard: It sees import './App.css' and says: "I don't know what that is, but I'll trust the build tool (Vite/Webpack) to handle it later. Come on in!"

// TypeScript is a "Strict" Guard: It says: "Stop. My job is to verify every single file you import. I only know how to read .ts, .tsx, and .js files. I have no idea what a .css file is. If I can't read it, it's not allowed in."

// Why does CSS need a "Declaration"?
// In the world of TypeScript, an import statement usually means "I am bringing in code, variables, or functions." Since CSS contains styles (not code), TypeScript thinks it's a mistake.

// By adding declare module "*.css", you are essentially handing the guard a Permit. You’re saying: "Whenever you see a file ending in .css, don't try to read it. Just trust me, it exists, and it's allowed."

// Why is this happening now?
// Direct TS Projects vs. Migration: When you run npm create vite@latest and choose TypeScript, Vite automatically generates a file (usually called vite-env.d.ts or react-app-env.d.ts). That file contains the exact same "Permits" for CSS, SVG, and PNG files.

// The tsconfig.json default: The npx tsc --init command creates a "bare-bones" configuration. It assumes you are writing pure TypeScript (like a backend server), so it doesn't automatically know about "Web" things like CSS or Images.

// Why didn't JS need it?
// JavaScript is dynamically typed and doesn't have a "compilation" phase that checks your imports for validity before the code runs. JS simply hands the file over to your Bundler (like Vite). The Bundler knows how to handle CSS, so it works. TypeScript adds an extra layer of "validation" before the Bundler even gets a chance to look at it.

// In short: You are seeing the "gears" of the machine for the first time because you are building it manually instead of using a pre-built template!

