import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './Markdown.css'




const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`;

function MarkdownPreview() {
  const [input, setInput] = useState(placeholder);

  const handleChange = (event) => {
    setInput(event.target.value);
  };


  return (
    <div id='wrapper'>
      <h1  id='h1'>Markdown Previewer</h1>
      <div className="container">
        <div className="left">
          <textarea
            id="editor"
            placeholder="Enter Markdown"
            onChange={handleChange}
            value={input}
          ></textarea>
        </div>
        <div id="preview" className="right">
          {/* Render the Markdown content using ReactMarkdown component */}
          <ReactMarkdown >{input}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default MarkdownPreview;
