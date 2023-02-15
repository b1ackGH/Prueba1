const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const trainingData = [
  { input: [1, 1], output: [2] },
  { input: [2, 2], output: [4] },
  { input: [3, 3], output: [6] },
  { input: [4, 4], output: [8] },
  { input: [5, 5], output: [10] },
];

net.train(trainingData);

const result = net.run([2, 3]); // Devuelve [5]

