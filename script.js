const colors = [
  ["#ffe6f0", "#d5f7f2"],
  ["#fff0cc", "#ccffff"],
  ["#e0f7e9", "#ffe0f0"],
  ["#e6e6ff", "#ffe6cc"]
];

document.getElementById("colorButton").addEventListener("click", () => {
  const random = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = `linear-gradient(to bottom right, ${random[0]}, ${random[1]})`;
});
