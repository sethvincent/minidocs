var fs = require('fs')
var css = require('dom-css')
var marked = require('marked')

module.exports = function (container, documents) {

  var style = {
    wrapper: {
      width: '60%',
      height: window.innerHeight * 0.77,
      paddingLeft: '6%',
      paddingRight: '5%',
      paddingTop: window.innerHeight * 0.03,
      verticalAlign: 'top',
      display: 'inline-block',
      overflowY: 'scroll',
    },
    markdown: {

    }
  }

  var wrapper = document.createElement('div')
  wrapper.className = 'minidocs-main'
  css(wrapper, style.wrapper)
  container.appendChild(wrapper)

  var markdown = document.createElement('div')
  markdown.className = 'markdown-body'
  css(markdown, style.markdown)
  wrapper.appendChild(markdown)

  function show (text) {
    markdown.innerHTML = text
  }

  return {
    show: show
  }
}