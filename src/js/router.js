export class Router {
  routes = {};

  add(routerName, page) {
    this.routes[routerName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDeafaut();

    window.history.pushState({}, "", event.target.href);
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
}
