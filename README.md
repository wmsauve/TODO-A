This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.3.

## Quick Test
- Have the TODO-S .exe running on your machine.
- Add environment variables in the src/environments folder.

environment.development.ts
```bash
export const environment = {
    production: false,
    mainUrl: "http://localhost:5000/api/functionality",
};
```
environment.ts
```bash
export const environment = {
    production: true,
    mainUrl: "http://localhost:5000/api/functionality",
};
```
- npm run start:dev
- Open `http://localhost:4200/` in your browser.
- Admire the beauty.
