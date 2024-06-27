document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Cappucino Ice", img: "1.jpg", price: 15000 },
      { id: 2, name: "Hazelnaut Latte", img: "2.jpg", price: 20000 },
      { id: 3, name: "Americano Ice", img: "3.jpg", price: 14000 },
      { id: 4, name: "Caramel Latte Ice", img: "4.jpg", price: 20000 },
      { id: 5, name: "Chocolate Ice", img: "3.jpg", price: 15000 },
      { id: 7, name: "Taro Ice", img: "3.jpg", price: 15000 },
      { id: 8, name: "Mochacino Ice", img: "3.jpg", price: 18000 },
      { id: 9, name: "Lychee Yaqult", img: "3.jpg", price: 17000 },
      { id: 10, name: "Cafe Latte Ice", img: "3.jpg", price: 15000 },
      { id: 11, name: "Kopi Susu Gula Aren Ice", img: "3.jpg", price: 18000 },
      { id: 12, name: "Vanilla Latte Ice", img: "3.jpg", price: 20000 },
      { id: 13, name: "Red Velvet Ice", img: "3.jpg", price: 15000 },
      { id: 14, name: "Lychee Tea", img: "3.jpg", price: 13000 },
      { id: 15, name: "Lemon Tea", img: "3.jpg", price: 12000 },
      { id: 16, name: "Sweet Tea", img: "3.jpg", price: 15000 },
      { id: 17, name: "Vanilla Tea", img: "3.jpg", price: 12000 },
      { id: 18, name: "Butterfly Pea Lemon", img: "3.jpg", price: 12000 },
      { id: 19, name: "Butterfly Pea Lychee", img: "3.jpg", price: 15000 },
      { id: 20, name: "Matcha Milk", img: "3.jpg", price: 18000 },
      { id: 21, name: "Espresso", img: "3.jpg", price: 10000 },
      { id: 22, name: "Double Espresso", img: "3.jpg", price: 12000 },
      { id: 23, name: "Americano Hot", img: "3.jpg", price: 12000 },
      { id: 24, name: "Cappucino Hot", img: "3.jpg", price: 13000 },
      { id: 25, name: "Latte Hot", img: "3.jpg", price: 14000 },
      { id: 26, name: "Caramel Latte Hot", img: "3.jpg", price: 18000 },
      { id: 27, name: "Kopi Susu Gula Aren Hot", img: "3.jpg", price: 15000 },
      { id: 28, name: "Vanilla Latte Hot", img: "3.jpg", price: 18000 },
      { id: 29, name: "Red Velvet Hot", img: "3.jpg", price: 13000 },
      { id: 30, name: "Taro Hot", img: "3.jpg", price: 13000 },
      { id: 31, name: "Mochacino Hot", img: "3.jpg", price: 16000 },
      { id: 32, name: "V60", img: "3.jpg", price: 15000 },
      { id: 33, name: "Jappanesse", img: "3.jpg", price: 15000 },
      { id: 34, name: "Coklat Hot", img: "3.jpg", price: 13000 },
      { id: 35, name: "Cireng Isi Ayam Suir", img: "3.jpg", price: 12000 },
      { id: 36, name: "Kentang Goreng", img: "3.jpg", price: 12000 },
      { id: 37, name: "Sandwich", img: "3.jpg", price: 12000 },
      { id: 38, name: "Sempol", img: "3.jpg", price: 12000 },
      { id: 39, name: "Croisanc", img: "3.jpg", price: 10000 },
      { id: 40, name: "Nasi Goreng Story", img: "3.jpg", price: 13000 },
    ],
  }));

  //  Menambahkan produk pada keranjang
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // cek apakah ada barang yang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika belum ada / cartnya masih kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika barangnya sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang sudah ada, maka tambah quantity dan totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },

    // Membuat tombol remove
    remove(id) {
      // Ambil item yang mau diremove berdasarkan id nya
      const cartItem = this.items.find((item) => item.id === id);

      // Jika item lebih dari 1
      if (cartItem.quantity > 1) {
        // telusuri satu satu
        this.items = this.items.map((item) => {
          // jika bukan barang yang diklik
          if (item.id !== id) {
            return item;
            a;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // jika barangnya sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// form validation
const checkoutButton = document.querySelector(".checkout-button");
checkoutButton.disabled = true;

const form = document.querySelector("#checkoutForm");

form.addEventListener("keyup", function () {
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].value.length !== 0) {
      checkoutButton.classList.remove("disabled");
      checkoutButton.classList.add("disabled");
    } else {
      return false;
    }
  }
  checkoutButton.disabled = false;
  checkoutButton.classList.remove("disabled");
});

// kirim data ketika tombol checkout diklik
checkoutButton.addEventListener("click", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);
  const objData = Object.fromEntries(data);
  const message = formatMessage(objData);
  window.open("https:/wa.me/6285255216827?text=" + encodeURIComponent(message));
});

// format pesan whatsapp
const formatMessage = (obj) => {
  return `Data Customer :
  Nama: ${obj.name}
  Email: ${obj.email}
  No HP: ${obj.phone}
  
Data Pesanan :
  ${JSON.parse(obj.items).map(
    (item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`
  )}
TOTAL: ${rupiah(obj.total)}
Terima Kasih.

Note :
Sertakan bukti pembayarannya!
Bagi yang Cash silahkan langsung ke kasir!
  `;
};

// konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
