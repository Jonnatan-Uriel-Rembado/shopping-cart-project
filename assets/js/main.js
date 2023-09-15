import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import products from "./components/products.js";
import getProducts from "./helpers/getProducts.js";
import cart from "./components/cart.js";
import darkMode from "./helpers/dark-mode.js";

/* UI Elements */
/* Ocultar loader */
loader()

/* Mostrar menu */
showMenu()

/* Mostrar shopping cart */
showCart()

/* End UI Elements */

/* Products */
const {db, printProducts} = products(await getProducts())

/* Carrito */
cart(db, printProducts)

/* Dark mode */
darkMode()