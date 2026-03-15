const produtos = [
  {
    nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    precoOriginal: "R$ 100,00",
    preco: "R$79,90",
    parcelas: "10x de R$ 7,90",
    desconto: "10% off",
    badge: "Novo",
    img: "assets/imgs/produto.png",
  },
  {
    nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    precoOriginal: "R$ 100,00",
    preco: "R$79,90",
    parcelas: "10x de R$ 7,90",
    desconto: "10% off",
    badge: "Novo",
    img: "assets/imgs/produto.png",
  },
  {
    nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    precoOriginal: "R$ 100,00",
    preco: "R$79,90",
    parcelas: "10x de R$ 7,90",
    desconto: "10% off",
    badge: "Novo",
    img: "assets/imgs/produto.png",
  },
  {
    nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    precoOriginal: "R$ 100,00",
    preco: "R$79,90",
    parcelas: "10x de R$ 7,90",
    desconto: "10% off",
    badge: "Novo",
    img: "assets/imgs/produto.png",
  },
  {
    nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    precoOriginal: "R$ 100,00",
    preco: "R$79,90",
    parcelas: "10x de R$ 7,90",
    desconto: "10% off",
    badge: "Novo",
    img: "assets/imgs/produto.png",
  },
  {
    nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    precoOriginal: "R$ 100,00",
    preco: "R$79,90",
    parcelas: "10x de R$ 7,90",
    desconto: "10% off",
    badge: "Novo",
    img: "assets/imgs/produto.png",
  },
  {
    nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    precoOriginal: "R$ 100,00",
    preco: "R$79,90",
    parcelas: "10x de R$ 7,90",
    desconto: "10% off",
    badge: "Novo",
    img: "assets/imgs/produto.png",
  },
  {
    nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    precoOriginal: "R$ 100,00",
    preco: "R$79,90",
    parcelas: "10x de R$ 7,90",
    desconto: "10% off",
    badge: "Novo",
    img: "assets/imgs/produto.png",
  },
];

function renderCard(produto) {
  const li = document.createElement("li");
  li.className = "swiper-slide !w-60";

  li.innerHTML = `
    <article class="w-60 h-96 flex flex-col bg-white rounded-[10px] border border-neutral-200 overflow-hidden">
      <div class="relative">
        <img class="w-full h-56 object-cover" src="${produto.img}" alt="${produto.nome}" />
        <div class="absolute top-2 left-2 px-1 py-0.5 bg-sky-950 rounded border text-white text-[10px] font-bold font-['Nunito_Sans'] uppercase">
          ${produto.badge}
        </div>
      </div>
      <div class="p-2 flex flex-col flex-grow">
        <h3 class="h-10 text-zinc-800 text-sm font-normal font-['Nunito_Sans'] capitalize">${produto.nome}</h3>
        <p class="text-zinc-800 text-xs font-normal font-['Nunito_Sans'] line-through capitalize">${produto.precoOriginal}</p>
        <div class="flex items-baseline gap-2">
            <p class="text-black text-base font-bold font-['Nunito_Sans'] capitalize">${produto.preco}</p>
            <mark class="px-2 py-1 bg-emerald-300 rounded text-white text-xs font-bold font-['Nunito_Sans'] underline uppercase leading-3">
                ${produto.desconto}
            </mark>
        </div>
        <p class="text-zinc-800 text-xs font-normal font-['Nunito_Sans']">
            Ou em até <strong class="font-bold">${produto.parcelas}</strong>
        </p>
        <button class="w-full mt-auto px-6 py-2.5 bg-blue-600 rounded-lg text-white text-sm font-bold font-['Nunito_Sans'] leading-5">
            Comprar
        </button>
      </div>
    </article>
  `;

  return li;
}

function initCarrossel(container) {
  const lista = container.querySelector(".product-list");
  produtos.forEach((produto) => lista.appendChild(renderCard(produto)));

  new Swiper(container.querySelector(".swiper"), {
    slidesPerView: 1,
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
      640:  { slidesPerView: 2 },
      768:  { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1280: { slidesPerView: 5 },
    },
  });
}

document.querySelectorAll(".swiper-lancamentos").forEach(initCarrossel);