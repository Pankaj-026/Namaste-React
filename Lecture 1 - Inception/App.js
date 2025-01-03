const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1",
  { id: "namasteHeading", key: "h1" },
  "Namaste React"
);

const heading2 = React.createElement(
  "h2",
  { id: "crazyCrazy", key: "h2" },
  "SP is Here!"
);

const div = React.createElement("div", { id: "heading__container" }, [
  heading,
  heading2,
]);

root.render(div)