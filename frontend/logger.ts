import { type LogMessage } from './components/LogView';

interface LogReciever {
	messages: LogMessage[];
}

export class Logger {
	sink: LogReciever;

	constructor(sink: LogReciever) {
		this.sink = sink;
	}

	info(message: string) {
		this.sink.messages = [...this.sink.messages, { level: 'info', message }];
	}

	warning(message: string|Error) {
		const msg = message instanceof Error ? message.message : message;
		this.sink.messages = [...this.sink.messages, { level: 'warning', message: msg }];
	}

	error(message: string|Error) {
		const msg = message instanceof Error ? message.message : message;
		this.sink.messages = [...this.sink.messages, { level: 'error', message: msg }];
	}
}
