---
to: "<%= h.is(locals.styles, true) ? h.relative(locals.relative, h.inflection.camelize(name), h.inflection.camelize(name)+'.module.scss') : null %>"
---
@import 'src/styles/typography';
@import 'src/styles/colors';
@import 'src/styles/variables';
@import 'src/styles/layers';

$<%= h.changeCase.paramCase(name) %>-text-color: white;
$<%= h.changeCase.paramCase(name) %>-background: red;

.<%= h.changeCase.paramCase(name) %> {
  padding: 10px;
  background: $<%= h.changeCase.paramCase(name) %>-background;
  color: $<%= h.changeCase.paramCase(name) %>-text-color;
}
