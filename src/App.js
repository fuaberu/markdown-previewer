import React, { Component } from 'react';
import marked from 'marked';
import './main.css';

const placeHolder = `# Welcome to my React Markdown Previewer!

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

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export class App extends Component {
	state = {
		text: placeHolder,
	};

	handleChange = (event) => {
		this.setState({
			text: event.target.value,
		});
	};
	render() {
		const { text } = this.state;
		const markdown = marked(text, {breaks: true});
		return (
			<main className="container">
				<h1 id="heading">Markdown Previewer</h1>
				<section>
					<div className="text-container">
						<h2 className="heading2">Input text</h2>
						<textarea
							id="editor"
							value={text}
							onChange={this.handleChange}
						></textarea>
					</div>
					<div className="text-container">
						<h2 className="heading2">Output text</h2>
						<div id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
					</div>
				</section>
			</main>
		);
	}

}

export default App;
