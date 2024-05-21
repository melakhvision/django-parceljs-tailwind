import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data("dashboard", () => ({
  count: 0,
  isOpen: false,
  sideBarMargin: "w-40",
    toggle() {
        this.isOpen = !this.isOpen;
    },
}));

Alpine.start();