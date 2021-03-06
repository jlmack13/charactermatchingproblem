const checkCharacters = require('./index.js');

test('checkCharacters function exists', () => {
    expect(typeof checkCharacters).toEqual('function');
});

test('check that invalid characters return an error message', () => {
    expect(checkCharacters("(i[")).toMatch("Error: Invalid character detected. Please try again using only '()[]{}' characters.")
});

test('double check that invalid characters return an error message', () => {
    expect(checkCharacters("hello world")).toMatch("Error: Invalid character detected. Please try again using only '()[]{}' characters.")
});

test('1st test should be true with input: "( { [ ] } )".', () => {
    expect(checkCharacters("( { [ ] } )")).toBeTruthy()  
});

test('2nd test should be false with input: "( ( { [ ] { ] } ) )".', () => {
    expect(checkCharacters("( ( { [ ] { ] } ) )")).toBeFalsy()
});

test('3rd test should be true with input: "( [ ] )".', () => {
    expect(checkCharacters("( [ ] )")).toBeTruthy()
});

test('4th test should be false with input: "( [ ) ]".', () => {
    expect(checkCharacters("( [ ) ]")).toBeFalsy()
});

test('5th test should be true with input: "[ ( ) { } ]".', () => {
    expect(checkCharacters("[ ( ) { } ]")).toBeTruthy()
});

test('6th test should be true with input: "( ( ( ) ) )".', () => {
    expect(checkCharacters("( ( ( ) ) )")).toBeTruthy()
});

test('7th test should be with input: "( [ [ ] ]".', () => {
    expect(checkCharacters("( [ [ ] ]")).toBeFalsy()
});

test('8th test should be false with input: "[ ] ]".', () => {
    expect(checkCharacters("[ ] ]")).toBeFalsy()
});

test('9th test should be true with input: "( ) { }".', () => {
    expect(checkCharacters("( ) { }")).toBeTruthy()
});

test('10th test should be false with input: "]".', () => {
    expect(checkCharacters("]")).toBeFalsy()
});
