import casual from 'casual';
import console from 'console';

const myConsole = new console.Console(process.stdout, process.stderr);

const mocks = {
	String: () => 'It works!',
	Query: () => ({
	  author: (root, args) => {
		return { firstName: args.firstName, lastName: args.lastName, id: casual.integer(0,10) };
	  },
	}),
	Author: () => ({ firstName: () => casual.first_name, lastName: () => casual.last_name }),
	Post: () => ({ title: casual.title, text: casual.sentences(3) }),
};

export default mocks;
