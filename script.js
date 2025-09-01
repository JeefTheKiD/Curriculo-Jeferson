// Alternar tema claro/escuro
const btn = document.getElementById("btnTema");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Estilo do modo escuro
const style = document.createElement("style");
style.innerHTML = `
  .dark {
    background: #1e1e1e;
    color: #f1f1f1;
  }
  .dark header, .dark footer {
    background: #111;
  }
`;
document.head.appendChild(style);
