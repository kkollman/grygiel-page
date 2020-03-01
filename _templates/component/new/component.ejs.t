---
to: <%= h.relative(locals.relative, h.inflection.camelize(name), h.inflection.camelize(name)+'.component.js') %>
sh: "cd <%= h.src('..') %> && eslint <%= h.relative(locals.relative, h.inflection.camelize(name)) %>/*.js --fix && git add <%= h.relative(locals.relative, h.inflection.camelize(name)) %>/"
---
<%
  hasStyles = h.is(locals.styles, true);
  fileName = h.inflection.camelize(name);
  className = fileName;
%>
import React from 'react';
import PropTypes from 'prop-types';

<% if (hasStyles) { -%>
import cls from 'classnames';
<% } -%>

<% if (hasStyles) { -%>
import styles from './<%= fileName %>.module.scss';
<% } -%>


const <%= className %> = () => {
  return (
    <div
      <% if (hasStyles) { -%>
      className={cls(styles['<%= h.changeCase.paramCase(name) %>'])}
      <% } -%>
    >
      <%= h.changeCase.sentenceCase(name) %> Component
    </div>
  );
}

<%= className %>.propTypes = {};
<%= className %>.defaultProps = {};

export default <%= className %>;
