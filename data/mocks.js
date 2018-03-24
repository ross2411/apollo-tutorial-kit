import casual from 'casual';
import console from 'console';

const myConsole = new console.Console(process.stdout, process.stderr);

const mocks = {
	String: () => 'It works!,',
	Query: () => ({
		author: (root, args) => {
			myConsole.log(root);
			myConsole.log(args);
			return { firstName: args.firstName, lastname: args.lastname};
		},
	}),
	Author: () => ({ firstName: () => casual.first_name, lastName: () => casual.last_name}),
	Post: () => ({ title: casual.title, text: casual.sentences(3)}),
};

export default mocks;
