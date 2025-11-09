import { html, css, LitElement, PropertyValues } from 'lit';
import { customElement } from 'lit/decorators.js';

export interface LogMessage {
	message: string;
	level: 'info' | 'warning' | 'error';
}

export interface LogViewProps {
	messages: LogMessage[];
	account?: string;
}

@customElement('log-view')
export class LogView extends LitElement {
	declare messages: LogMessage[];

	static properties = {
		messages: { type: Array },
	};

	constructor() {
		super();
		this.messages = [];
	}

	static styles = css`
		pre {
			background-color: rgb(248, 248, 248);
			padding: 10px;
			border: 1px solid #ccc;
			font-family: monospace;
			white-space: pre-wrap;
		}
		div {
			margin: 0;
			padding: 3px 5px;
		}
		.info {
			color: #222;
		}
		.warning {
			background-color: orange;
		}
		.error {
			background-color: red;
		}
	`;

	render() {
		return html`<pre style="overflow: scroll; height: 200px;">${this.messages.map((log) => html`<div class="${log.level}">${log.message}</div>`)}</pre>`
	}

	protected updated(_changedProperties: PropertyValues): void {
		var pre = this.renderRoot.querySelector('pre');
		if(pre) {
			pre.scrollTop = pre.scrollHeight;
		}
	}
}

