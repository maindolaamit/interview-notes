# Interview Notes

Interview Notes is a collection of interview questions and concepts, including system design interview questions and answers, spanning a wide range of topics. The questions are categorized based on programming languages, system components, and features.

I started this project to help myself and others prepare for interviews. The answers provide a detailed explanation of the concepts and the approach to solve the problem.

## Categories

- **Programming Languages:** Questions related to various programming languages and their features.
- **System Design:** Questions related to designing scalable and efficient systems.
- **Algorithms and Data Structures:** Questions related to common algorithms and data structures.
- **Software Engineering Principles:** Questions related to software design principles and best practices.

## How to Use

1. **Browse Categories:** Navigate through the different categories to find questions and answers relevant to your preparation.
2. **Read and Understand:** Go through the detailed explanations and understand the concepts.
3. **Practice:** Try to solve the questions on your own before looking at the answers.
4. **Review:** Review the answers and explanations to solidify your understanding.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. **Fork the Repository:** Create a fork of this repository to your GitHub account.
2. **Create a Branch:** Create a new branch for your changes.
3. **Make Changes:** Make your changes and commit them to your branch.
4. **Submit a Pull Request:** Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

### Installation
This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.
```
$ npm i --legacy-peer-deps
```

### Local Development

```
$ npm run dev
```
```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
