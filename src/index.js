import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data("counter", () => ({
  count: 0,
  increment() {
    this.count++;
  },
  decrement() {
    this.count--;
  },
}));

Alpine.start();
