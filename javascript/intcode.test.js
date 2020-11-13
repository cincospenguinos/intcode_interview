import IntcodeComputer from './intcode.js';

describe('Intcode Computer', () => {
	it('can be instantiated', () => {
		const computer = new IntcodeComputer();
		expect(computer).not.toBeNull();
	});
});