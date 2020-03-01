---
message: |
  Generates new component

  {gray hygen} {bold component new} {italic --args}

  Available args:
  {green --name ComponentName} - name of component
  {green --styles} {red --no-styles} - Use or not SCSS modules in component. [default: {green true}]
  {green --container} {red --no-container} - Generate container for component. [default: {red false}]
  {green --translations} {red --no-translations} - Use translated texts in component. [default: {red false}]
  {green --storybook} {red --no-storybook} - Generate storybook file for component. [default: {red false}]

  {red --no-questions} {red --quiet} - Don't ask questions! Use defaults if param is not defined.
  {green --relative} - Generate component in dir where {gray hygen} has been executed instead of {gray src/components} dir.
---
