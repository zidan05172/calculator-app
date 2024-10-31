export default class Theme {
  constructor() {
      this.toggleButton = document.getElementById("toggleButton");
  }

  initializeTheme() {
      const savedTheme = localStorage.getItem("theme");
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = savedTheme || (prefersDarkScheme ? "dark" : "light");

      document.body.classList.add(theme);
      this.updateCalculatorTheme(theme);
  }

  toggleMode() {
      const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.body.classList.replace(currentTheme, newTheme);
      localStorage.setItem("theme", newTheme);
      this.updateCalculatorTheme(newTheme);
  }

  updateCalculatorTheme(theme) {
      if (this.toggleButton) {
          this.toggleButton.textContent = theme === "dark" ? "🌙" : "☀️";
      } else {
          console.warn("Toggle button not found in the DOM.");
      }

      const calculator = document.getElementById("calculator");
      const display = document.getElementById("display");
      const buttons = document.querySelectorAll(".button.number");

      if (calculator) calculator.className = `calculator ${theme}`;
      if (display) display.className = `display ${theme}`;
      
      buttons.forEach((button) => {
          button.className = `button number ${theme}`;
      });
  }
}