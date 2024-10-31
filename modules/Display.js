// Display.js (Kelas untuk mengelola tampilan kalkulator)
export default class Display {
    constructor(displayElement) {
        this.displayElement = displayElement; // Menyimpan elemen display sebagai field privat (enkapsulasi)
    }

    get value() {
        return this.displayElement.innerText; // Mengambil nilai dari elemen display
    }

    set value(value) {
        this.displayElement.innerText = value; // Mengatur nilai untuk elemen display
    }

    clear() {
        this.value = "0"; // Mengatur display kembali ke "0"
    }
}
