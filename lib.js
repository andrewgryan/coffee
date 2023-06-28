export const cls =
  (...classes) =>
  (el) => {
    classes.map((cls) => {
      el.classList.add(cls);
    });
    return el;
  };

export const tag =
  (elementName) =>
  (...children) => {
    const el = document.createElement(elementName);
    children.forEach((child) => {
      if (typeof child === "string" || child instanceof String) {
        el.appendChild(document.createTextNode(child));
      } else {
        el.appendChild(child);
      }
    });
    return el;
  };

// Tag helpers
export const div = tag("div");
export const h2 = tag("h2");
export const h3 = tag("h3");
export const table = tag("table");
export const tr = tag("tr");
export const td = tag("td");
