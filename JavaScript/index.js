function createCalculator() {
  return {
    display: document.querySelector(".display"),

    clearDisplay() {
      this.display.value = " ";
    },

    deleteNum() {
      this.display.value = this.display.value.slice(0, -1);
    },

    equal() {
      let count = this.display.value;

      try {
        count = eval(count);

        if (!count) {
          alert("Conta invalida");
          return;
        }

        this.display.value = String(count);
      } catch (e) {
        alert("Conta invalida");
        return;
      }
    },

    start() {
      this.buttonClick();
      this.keypression();
    },

    keypression() {
      this.display.addEventListener("keypress", (e) => {
        if (e.keyCode === 13) {
          this.equal();
        }
      });
    },

    buttonClick() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }
        if (el.classList.contains("btn-del")) {
          this.deleteNum();
        }
        if (el.classList.contains("btn-eq")) {
          this.equal();
        }
      });
    },

    btnDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculator = createCalculator();
calculator.start();
