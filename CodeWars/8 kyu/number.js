// Training JS #2: Basic data types - Number
let 
    v1 = 50, v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250;

const equal1 = () => {
  const [a, b] = [v1, v1];  
  return a + b;
};

const equal2 = () => {
    const [a, b] = [v3, v1];
    return a - b;
}

const equal3 = () => {
    const [a, b] = [v1, v5];
    return a * b;
};

const equal4 = () => {
    const [a, b] = [v4, v5];
    return a / b;
};

const equal5 = () => {
    const [a, b] = [v2, v6];
    return a % b;
};

const functions = [equal1, equal2, equal3, equal4, equal5];

functions.forEach(func => {
    console.log(func());
});
