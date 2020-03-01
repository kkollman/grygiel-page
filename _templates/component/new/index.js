module.exports = {
  prompt: async ({ prompter, args }) => {
    let params = {};

    if (args['questions'] === false || args['quiet'] === true) {
      return args;
    }

    if (typeof args.name === 'undefined') {
      params = {
        ...params,
        ...(await prompter.prompt({
          type: 'input',
          name: 'name',
          message: "What's the name of Component?",
        })),
      };
    }

    if (typeof args.relative === 'undefined') {
      params = {
        ...params,
        ...(await prompter.prompt({
          type: 'confirm',
          name: 'relative',
          initial: false,
          message:
            'Would you like to create Component dir in current directory instead of `src/components`?',
        })),
      };
    }

    if (typeof args.styles === 'undefined') {
      params = {
        ...params,
        ...(await prompter.prompt({
          type: 'confirm',
          name: 'styles',
          initial: true,
          message:
            'Would you like to generate CSS module styles for component?',
        })),
      };
    }

    return {
      ...args,
      ...params,
    };
  },
};
