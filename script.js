// ─── DADOS 

const departamentos = [
  { label: "Departamento", href: "/departamento", dropdown: true },
  { label: "Departamento", href: "/departamento" },
  { label: "Departamento", href: "/departamento" },
  { label: "Departamento", href: "/departamento" },
  { label: "Departamento", href: "/departamento" },
  { label: "Departamento", href: "/departamento" },
  { label: "Departamento", href: "/departamento" },
  { label: "Departamento", href: "/departamento" },
];

const categorias = [
  { label: "Categoria", bold: true },
  { label: "Categoria" },
  { label: "Categoria" },
  { label: "Categoria" },
  { label: "Categoria" },
  { label: "Categoria" },
  { label: "Categoria" },
  { label: "Categoria" },
];

const destaques = [
  {
    img: "assets/imgs/Free_Mug_Mockup_2.png",
    alt: "Produto em destaque",
    titulo: "Lorem Ipsum",
    textos: [
      "Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.",
      "Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.",
    ],
  },
  {
    img: "assets/imgs/Free_Mug_Mockup_2.png",
    alt: "Produto em destaque",
    titulo: "Lorem Ipsum",
    textos: [
      "Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.",
      "Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.",
    ],
  },
];

const produtos = Array(8).fill({
  nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
  precoOriginal: "R$ 100,00",
  preco: "R$79,90",
  parcelas: "10x de R$ 7,90",
  desconto: "10% off",
  badge: "Novo",
  img: "assets/imgs/produto.png",
});

// ─── NAV 

const navList = document.getElementById("nav-list");

departamentos.forEach(({ label, href, dropdown }) => {
  const li = document.createElement("li");
  li.innerHTML = dropdown
    ? `<button id="departamento-btn" aria-expanded="false" aria-controls="dropdown-departamento" class="text-black text-sm font-normal leading-5 cursor-pointer">${label}</button>`
    : `<a href="${href}" class="text-black text-sm font-normal leading-5">${label}</a>`;
  navList.appendChild(li);
});

// ─── DROPDOWNS 

function criarColunasCategorias() {
  return `
    <div class="flex flex-1 gap-10 py-[18px] px-10">
      ${[0, 1, 2]
        .map(
          () => `
        <ul class="flex flex-col gap-3 flex-1">
          ${categorias
            .map(
              (c, i) => `
            <li>
              <a href="#" class="${i === 0 ? "text-blue-600 text-sm font-bold" : "text-stone-500 text-sm font-normal"}">${c.label}</a>
            </li>
          `,
            )
            .join("")}
        </ul>
      `,
        )
        .join("")}
    </div>
  `;
}

function criarCardDropdown() {
  return `
    <div class="relative w-60 flex-shrink-0 my-5 mr-5 rounded-[10px] overflow-hidden border">
      <img src="assets/imgs/segundo banner.png" alt="Confira os produtos que acabaram de chegar" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-l from-black/75 to-black/0"></div>
      <div class="absolute bottom-0 left-0 p-4 flex flex-col gap-4">
        <p class="text-white text-2xl leading-7">Confira os Produtos<br /><strong>Que acabaram<br />De chegar</strong></p>
        <a href="#" class="w-28 h-9 flex items-center justify-center outline outline-1 outline-white text-white text-xs font-bold uppercase">ver todos</a>
      </div>
    </div>
  `;
}

document
  .getElementById("dropdown-categorias")
  .querySelector(".flex").innerHTML = `
  <div class="w-60 flex-shrink-0 bg-neutral-100/60 py-[18px] px-4">
    <ul class="flex flex-col gap-3 overflow-y-scroll pr-2 max-h-full">
      <li>
        <a href="#" class="flex items-center justify-between text-blue-600 text-sm font-bold">
          Departamento <img src="assets/imgs/icons/blue-arrow.svg" alt="" />
        </a>
      </li>
      ${Array(12)
        .fill(0)
        .map(
          () => `
        <li>
          <a href="#" class="flex items-center justify-between text-zinc-800 text-sm font-normal">
            Departamento <img src="assets/imgs/icons/arrow.svg" alt="" />
          </a>
        </li>
      `,
        )
        .join("")}
    </ul>
  </div>
  ${criarColunasCategorias()}
  ${criarCardDropdown()}
`;

document
  .getElementById("dropdown-departamento")
  .querySelector(".flex").innerHTML = `
  ${criarColunasCategorias()}
  ${criarCardDropdown()}
`;

// ─── DESTAQUES 

const containers = [
  document.getElementById("destaque-1"),
  document.getElementById("destaque-2"),
];

destaques.forEach((d, i) => {
  containers[i].innerHTML = `
    <div class="flex items-center gap-10">
      <div class="relative w-[652px] flex-shrink-0 bg-stone-300 flex items-center justify-center min-h-[747px]">
        <img class="w-[523.38px] rotate-[-7.54deg]" src="${d.img}" alt="${d.alt}" />
      </div>
      <div class="flex flex-col gap-5">
        <h2 class="text-black text-3xl font-bold uppercase leading-10 tracking-wide">${d.titulo}</h2>
        ${d.textos.map((t) => `<p class="text-black text-lg font-normal leading-6 tracking-wide">${t}</p>`).join("")}
      </div>
    </div>
  `;
});

// ─── CARROSSEL 

function renderCard(produto) {
  const li = document.createElement("li");
  li.className = "swiper-slide";
  li.innerHTML = `
    <article class="w-full flex flex-col bg-white rounded-[10px] border border-neutral-200 overflow-hidden">
      <div class="relative">
        <img class="w-full h-56 object-cover" src="${produto.img}" alt="${produto.nome}" />
        <div class="absolute top-2 left-2 px-1 py-0.5 bg-sky-950 rounded border text-white text-[10px] font-bold uppercase">${produto.badge}</div>
      </div>
      <div class="p-2 flex flex-col flex-grow justify-between gap-1">
        <h3 class="text-zinc-800 text-sm font-normal capitalize">${produto.nome}</h3>
        <p class="text-zinc-800 text-xs font-normal line-through capitalize">${produto.precoOriginal}</p>
        <div class="flex items-baseline gap-2">
          <p class="text-black text-base font-bold capitalize">${produto.preco}</p>
          <mark class="px-2 py-1 bg-emerald-300 rounded text-white text-xs font-bold underline uppercase leading-3">${produto.desconto}</mark>
        </div>
        <p class="text-zinc-800 text-xs font-normal">Ou em até <strong class="font-bold">${produto.parcelas}</strong></p>
        <button class="w-full mt-auto px-6 py-2.5 bg-blue-600 rounded-lg text-white text-sm font-bold leading-5 hidden-mobile">Comprar</button>
      </div>
    </article>
  `;
  return li;
}

function initCarrossel(container) {
  const lista = container.querySelector(".product-list");
  produtos.forEach((p) => lista.appendChild(renderCard(p)));
  new Swiper(container.querySelector(".swiper"), {
    // No mobile: 2 slides visíveis (conforme Figma)
    slidesPerView: 2,
    spaceBetween: 16,
    pagination: {
      el: container.querySelector(".swiper-pagination"),
      clickable: true,
    },
    navigation: {
      nextEl: container.querySelector(".swiper-button-next"),
      prevEl: container.querySelector(".swiper-button-prev"),
    },
    breakpoints: {
      // mobile já começa com 2
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1280: { slidesPerView: 5 },
    },
  });
}

document.querySelectorAll(".swiper-lancamentos").forEach(initCarrossel);

// ─── DROPDOWNS TOGGLE 

const menuIcon = document.getElementById("menu-icon");

function fecharTodos() {
  [
    {
      btn: document.getElementById("categorias-btn"),
      dropdown: document.getElementById("dropdown-categorias"),
    },
    {
      btn: document.getElementById("departamento-btn"),
      dropdown: document.getElementById("dropdown-departamento"),
    },
  ].forEach(({ btn, dropdown }) => {
    if (!btn || !dropdown) return;
    dropdown.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
    btn.classList.remove("text-blue-600");
    btn.classList.add("text-black");
  });
  if (menuIcon) menuIcon.src = "assets/imgs/icons/icon-menu.svg";
}

function toggleDropdown(btn, dropdown, comIcone = false) {
  const isOpen = !dropdown.classList.contains("hidden");
  fecharTodos();
  if (!isOpen) {
    dropdown.classList.remove("hidden");
    btn.setAttribute("aria-expanded", "true");
    btn.classList.add("text-blue-600");
    btn.classList.remove("text-black");
    if (comIcone && menuIcon) menuIcon.src = "assets/imgs/icons/icon-menu-blue.svg";
  }
}

document
  .getElementById("categorias-btn")
  .addEventListener("click", function () {
    toggleDropdown(this, document.getElementById("dropdown-categorias"), true);
  });

// departamento-btn é criado dinamicamente, usa delegação
document.addEventListener("click", (e) => {
  const depBtn = document.getElementById("departamento-btn");
  if (depBtn && e.target === depBtn) {
    toggleDropdown(depBtn, document.getElementById("dropdown-departamento"));
    return;
  }
  if (
    !document.querySelector('nav[aria-label="Categorias"]').contains(e.target)
  ) {
    fecharTodos();
  }
});

// ─── SEARCH 

const searchForm = document.querySelector('form[role="search"]');
const searchInput = document.getElementById("search-input");

if (searchForm && searchInput) {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;

    const existing = document.getElementById("search-result");
    if (existing) existing.remove();

    const result = document.createElement("p");
    result.id = "search-result";
    result.className =
      "text-sm text-zinc-800 px-3 w-full max-w-[1259px] mx-auto py-2";
    result.textContent = `Você buscou por: '${query}'`;

    searchForm.closest("div").insertAdjacentElement("afterend", result);
  });
}