// Factorial function with conditional Stirling's approximation
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    if (num > 170) {
        // Stirling's approximation for large numbers
        return Math.sqrt(2 * Math.PI * num) * Math.pow(num / Math.E, num);
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Binomial Distribution Calculation
function calculateBinomial() {
    const n = parseInt(document.getElementById("n").value);
    const p = parseFloat(document.getElementById("p").value);
    const k = parseInt(document.getElementById("k-binomial").value);

    if (isNaN(n) || isNaN(p) || isNaN(k) || p < 0 || p > 1 || k > n || k < 0) {
        alert("Please enter valid inputs for Binomial Distribution.");
        return;
    }

    // Calculate combination: C(n, k)
    let combination;
    if (n <= 170) {
        combination = factorial(n) / (factorial(k) * factorial(n - k));
    } else {
        // Use logarithm for large n to prevent overflow
        combination = Math.exp(logFactorial(n) - logFactorial(k) - logFactorial(n - k));
    }

    // Binomial probability formula: P(X = k) = C(n, k) * p^k * (1-p)^(n-k)
    const binomialProb = combination * Math.pow(p, k) * Math.pow(1 - p, n - k);
    document.getElementById("binomial-result").innerText = `P(X = ${k}) = ${binomialProb.toFixed(6)}`;
    drawBinomialChart(n, p);
}

// Poisson Distribution Calculation
function calculatePoisson() {
    const lambda = parseFloat(document.getElementById("lambda").value);
    const k = parseInt(document.getElementById("k-poisson").value);

    if (isNaN(lambda) || isNaN(k) || lambda <= 0 || k < 0) {
        alert("Please enter valid inputs for Poisson Distribution.");
        return;
    }

    // Dynamically limit large k to avoid overflow
    if (k > Math.floor(lambda + 4 * Math.sqrt(lambda))) {
        alert(`k is too large for λ = ${lambda}. Try reducing k.`);
        return;
    }

    const poissonProb = (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
    document.getElementById("poisson-result").innerText = `P(X = ${k}) = ${poissonProb.toFixed(6)}`;
    drawPoissonChart(lambda);
}

// Draw Binomial Distribution Chart
function drawBinomialChart(n, p) {
    let data = [];
    for (let k = 0; k <= n; k++) {
        let combination;
        if (n <= 170) {
            combination = factorial(n) / (factorial(k) * factorial(n - k));
        } else {
            combination = Math.exp(logFactorial(n) - logFactorial(k) - logFactorial(n - k));
        }
        data.push(combination * Math.pow(p, k) * Math.pow(1 - p, n - k));
    }

    const ctx = document.getElementById("binomialChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: Array.from({ length: n + 1 }, (_, i) => i),
            datasets: [{
                label: "Binomial Distribution",
                data: data,
                backgroundColor: "#4CAF50"
            }]
        }
    });
}

// Draw Poisson Distribution Chart
function drawPoissonChart(lambda) {
    let data = [];
    let labels = [];

    // Limit k range dynamically to avoid overflow
    const maxK = Math.floor(lambda + 4 * Math.sqrt(lambda));
    for (let k = 0; k <= Math.min(100, maxK); k++) {
        data.push((Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k));
        labels.push(k);
    }

    const ctx = document.getElementById("poissonChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Poisson Distribution",
                data: data,
                backgroundColor: "#2196F3"
            }]
        }
    });
}

// Logarithm of factorial for large numbers (to prevent overflow)
function logFactorial(num) {
    if (num <= 1) return 0;
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        sum += Math.log(i);
    }
    return sum;
}
