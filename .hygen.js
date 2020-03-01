const _ = require('lodash')
const path = require('path')

const src = (...dirs) => path.join(__dirname, 'src', ...dirs);
const cwd = (...dirs) => path.join(process.cwd(), ...dirs);

module.exports = {
  templates: `${__dirname}/_templates`,
  helpers: {
    src,
    cwd,
    relative(relative, ...dirs) {
      return relative ? cwd(...dirs) : src('components', ...dirs)
    },
    is: (prop, defaultValue) => _.isUndefined(prop) ? defaultValue : prop
  }
};
