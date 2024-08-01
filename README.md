# c3-components

c3-components is an open-source component library that extends the [@angular/material](https://material.angular.io/) library. This collection of components aims to facilitate and accelerate the development of modern Angular applications by providing reusable and customizable components to meet specific needs.

## Table of Contents

- [Installation](#installation)
- [Components](#components)
- [Documentation](#documentation)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install [c3-components](https://www.npmjs.com/package/c3-components) in your Angular project, run the following command:

```bash
npm install c3-components
```

Also, make sure you have installed and configured @angular/material as per [their documentation](https://material.angular.io/guide/getting-started).

## Components

c3-components offer a variety of components that extend the functionality of @angular/material. Below is a table listing the available components and the progress status of their documentation:

| Component      | Documentation Status                                                        |
| -------------- | --------------------------------------------------------------------------- |
| Dialog         | ![#4caf50](https://via.placeholder.com/15/4caf50/000000?text=+) Completed   |
| Dropdown       | ![#4caf50](https://via.placeholder.com/15/4caf50/000000?text=+) Completed   |
| File Upload    | ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) Planned     |
| File Viewer    | ![#ff9800](https://via.placeholder.com/15/ff9800/000000?text=+) In Progress |
| Highlight Text | ![#4caf50](https://via.placeholder.com/15/4caf50/000000?text=+) Completed   |
| Menu           | ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) Planned     |
| Modal          | ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) Planned     |
| NavBar         | ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) Planned     |
| Pdf Dialog     | ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) Planned     |
| Rounded Title  | ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) Planned     |
| Tabs           | ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) Planned     |

## Documentation

Complete documentation for the c3-components is available on our [documentation website](https://c3ulnta0rk.github.io/c3-components/). You'll find usage examples, guides, and API references for each component.

## Development

If you'd like to contribute to the development of c3-components, follow the steps below to set up your development environment:

1. Clone the repository:

```bash
git clone https://github.com/c3ulnta0rk/c3-components.git
```

2. Install the dependencies:

```bash
bun install
```

3. Build the library in watch mode:

```bash
bunx @angular/cli build c3-components --watch
```

4. (In a new cmd) Link the library to the demo application:

```bash
npm link c3-components
```

5. Run the demo application:

```bash
bun start
```

This will launch a local instance of the demo application to aid in the development and testing of the components.

## Contributing

This is my first contribution, and I am learning as I go. Please be understanding and patient as I work to improve this project.

Before contributing, please read our [contribution guide](./CONTRIBUTING.md) for best practices and guidelines for our project.

## License

c3-components are licensed under the [MIT License](./LICENSE). You are free to use, modify, and distribute it, subject to the terms of this license.
