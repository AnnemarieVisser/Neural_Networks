const net = new brain.recurrent.LSTM({ hiddenLayers: [20] });

net.train(trainingData, { errorThresh: 0.025 });

console.log(net.run('0+1='));
console.log(net.run('4+1='));
console.log(net.run('2+1='));