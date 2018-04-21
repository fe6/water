var slugify = require('transliteration').slugify;
var container = require('markdown-it-container');
var hljs = require('highlight.js');

var md = require('markdown-it')({
  html: true,
  breaks: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${lang}${hljs.highlight(lang, str, true).value}</code></pre>`;
      } catch (__) {}
    }

    return `<div><pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre></div>`;
  }
});

md.use(require('markdown-it-anchor'),{
  level: 2,
  slugify: slugify,
  permalink: true,
  permalinkBefore: true
})

md.use(container, 'html', {
  validate: function(params) {
    return params.trim().match(/^html\s*(.*)$/);
  },
  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^html\s+(.*)$/);
    if (tokens[idx].nesting === 1) {
      var summaryContent = tokens[idx + 1].content;
      return `<div class="ss">
      <pre class="hljs"><code>html${hljs.highlight('html', summaryContent, true).value}</code></pre>
        <hr/>`
    } else {
      return '</div>'
    }
  },
  marker: '`'
});

md.wrapper = 'article';

module.exports = md;
