---
to: "<%= h.relative(locals.relative, h.inflection.camelize(name), 'index.js') %>"
---
export { default } from './<%= h.inflection.camelize(name) %>.component';
