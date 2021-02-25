const trainingData = [
    { input: 'I am super happy!', output: 'happy' },
    { input: 'What a pill!', output: 'sarcastic' },
    { input: 'I am super unhappy!', output: 'sad' },
    { input: 'Are we there yet?', output: 'excited' },
    { input: 'Can we go home yet?', output: 'bored' },
    { input: 'When is dinnertime?', output: 'hungry' },
    { input: 'Wow that is great!', output: 'happy' },
    { input: 'I hate that!', output: 'angry' }
];

const net = new brain.recurrent.LSTM();
net.train(trainingData, {
    iterations: 1000,
    erroThresh: 0.011
});

console.log(net.run('I am unhappy!'));
console.log(net.run('I am happy!'));
console.log(net.run('I am a pill'));
console.log(net.run('I need dinner!'));
console.log(net.run('Wow I hate that!'));