# Binomial & Poisson Distribution Calculator

This project is a simple web application that calculates and visualizes **Binomial** and **Poisson Distributions** based on user input.

---

## 📚 **Purpose**
This project was created to assist my **Mathematics Faculty** by providing an easy-to-use tool for exploring and understanding probability distributions, especially for:
- **Binomial Distribution:** Modeling success/failure outcomes over a fixed number of trials.
- **Poisson Distribution:** Estimating the probability of a certain number of events occurring in a fixed interval.

---

## 🎯 **Features**
- 📊 Calculate **Binomial Probability** for given `n`, `p`, and `k`.
- 📈 Calculate **Poisson Probability** for given `λ` and `k`.
- 📉 Dynamic chart visualization using **Chart.js** for both distributions.
- 🔥 Handles edge cases and large inputs gracefully.

---

## 🚀 **How It Works**
1. **Binomial Distribution:**
   - Input:
     - `n` → Number of trials.
     - `p` → Probability of success (0 ≤ p ≤ 1).
     - `k` → Number of successes.
   - Formula:  
   \[
   P(X = k) = \frac{n!}{k!(n - k)!} p^k (1 - p)^{n - k}
   \]

2. **Poisson Distribution:**
   - Input:
     - `λ` → Average rate of occurrence.
     - `k` → Number of occurrences.
   - Formula:  
   \[
   P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}
   \]
   - Automatically switches to **normal approximation** for large values of `λ`.

---

## 📝 **How to Use**
1. Open `index.html` in a web browser.
2. Enter the required values for Binomial or Poisson distribution.
3. Click the corresponding **"Calculate"** button.
4. View the probability and the distribution chart.

---

## 🛠️ **File Structure**
