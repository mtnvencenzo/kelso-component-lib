# Kelso Component Library

A modern React component library built with Material-UI, providing a comprehensive set of reusable components for building enterprise applications.


  <a href="https://github.com/mtnvencenzo/kelso-component-lib/actions/workflows/kelso-component-lib-cicd.yaml"><img src="https://github.com/mtnvencenzo/kelso-component-lib/actions/workflows/kelso-component-lib-cicd.yaml/badge.svg" alt="Build Status"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>

## Installation

```bash
npm install @mtnvencenzo/kelso-component-library
# or
yarn add @mtnvencenzo/kelso-component-library
```

## Documentation

For detailed documentation and examples, visit our [Storybook](https://afde-vec-eus-glo-kelso-001-gjhnfkfng8ffg2a6.z02.azurefd.net/).

## Peer Dependencies

This library requires the following peer dependencies:

```json
{
  "@mui/icons-material": "^7.1.0",
  "@mui/material": "^7.1.0",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router-dom": "^7.6.0"
}
```

## Available Components

### Atoms
- `Button` - A customizable button component
- `IconButton` - A button with an icon
- `LoadingSkeleton` - A loading placeholder component
- `NavButton` - A navigation button component
- `RouterTab` - A tab component for routing
- `SectionBox` - A container component for sections
- `ThreeDotMenu` - A menu component with three dots
- `FieldContainer` - A container for form fields

### Molecules
- `AddField` - A component for adding new fields
- `ErrorBoundary` - An error boundary component
- `FilterField` - A component for filtering data
- `IconButtonPopover` - A popover triggered by an icon button
- `PageHeader` - A header component for pages
- `RouterTabPanel` - A panel component for router tabs

### Organisms
- `ButtonList` - A list of buttons
- `FilterableTable` - A table with filtering capabilities
- `HeaderNavBar` - A navigation bar component
- `NavigableTable` - A table with navigation capabilities

## Usage

```tsx
import { Button, PageHeader, FilterableTable } from '@mtnvencenzo/kelso-component-library';

function MyComponent() {
  return (
    <div>
      <PageHeader title="My Page" />
      <Button variant="contained">Click Me</Button>
      <FilterableTable
        columns={[
          { field: 'name', headerName: 'Name' },
          { field: 'age', headerName: 'Age' }
        ]}
        rows={[
          { id: 1, name: 'John', age: 30 },
          { id: 2, name: 'Jane', age: 25 }
        ]}
      />
    </div>
  );
}
```

## Development

### Prerequisites
- Node.js
- Yarn or npm

### Setup
1. Clone the repository
2. Install dependencies:
```bash
yarn install
# or
npm install
```

### Available Scripts
- `yarn loc` - Start development server
- `yarn build:prod` - Build for production
- `yarn lint` - Run ESLint
- `yarn storybook` - Start Storybook
- `yarn test` - Run tests
- `yarn coverage` - Run tests with coverage

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For more information, visit our [GitHub Package](https://github.com/users/mtnvencenzo/packages/npm/package/kelso-component-library).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
