import { Router } from "./router.js";

const router = new Router();

// router.add("/home", "./src/pages/home.html");

router.add("/home", "./src/pages/home.html");
router.add("/explorer", "./src/pages/explorer.html");
router.add("/universe", "./src/pages/universe.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.handle();
