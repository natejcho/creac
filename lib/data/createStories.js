const stringHelper = require('../utils/stringHelper');

/**
 * Creates Storybook stories file
 *
 * @param {String} componentName - Component name
 * @returns {String}
 */
function createStories(componentName) {
  const name = stringHelper.componentNameWithoutSpecialCharacter(componentName);

  return `import { Meta, Story, Preview, Props } from '@storybook/addon-docs/blocks';
import ${name} from './${name}';

const stories = storiesOf('Core/${name}', module);

<Meta title="Core/${name}" component={${name}} />

# ${name}

*REPLACE ME with component description*

### Usage

\`import { ${name} } from '@lens-react/core\`

<Props of={${name}} />

## All Styles

<Preview>
  <Story name='all styles'>
    <${name} />
  </Story>
</Preview>
`;
}

module.exports = createStories;
