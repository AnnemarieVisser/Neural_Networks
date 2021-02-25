const trainingData = [
    'Jane saw Doug.',
    'Doug saw Jane.',
    'Spot saw Doug and Jane looking at each other.',
    'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.',
    'You’re braver than you believe, stronger than you seem, and smarter than you think',
    'The more that you read, the more things you will know. The more that you learn, the more places you’ll go',
    'It is only with the heart that one can see rightly; what is essential is invisible to the eye.',
    'The moment you doubt whether you can fly, you cease for ever to be able to do it.',
    'The flower that blooms in adversity is the rarest and most beautiful of all.',
    'The more he gave away, the more delighted he became.',
    'You have been my friend. That in itself is a tremendous thing.',
    'Numbing the pain for a while will only make it feel worse when you finally feel it.',
    'A person who has good thoughts cannot ever be ugly… if you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.'
];

const net = new brain.recurrent.LSTM();
net.train(trainingData, {
    iterations: 1500,
    errorThresh: 0.011,
});

//console.log(net.run('Jane'));
console.log(net.run('Spot'));