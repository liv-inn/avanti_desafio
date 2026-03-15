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
];

function renderCard(produto) {
  const li = document.createElement("li");
  li.className = "w-60 h-96 flex-shrink-0 relative";

  li.innerHTML = `
    <article class="w-60 h-96 relative bg-white rounded-[10px] border border-neutral-200">

      <img
        class="w-56 h-56 absolute left-[8px] top-[6px]"
        src="${produto.img}"
        alt="${produto.nome}"
      />

      <h3 class="w-56 h-10 absolute left-[8px] top-[244px] text-zinc-800 text-sm font-normal font-['Nunito_Sans'] capitalize">
        ${produto.nome}
      </h3>

      <p class="absolute left-[8px] top-[287px] text-zinc-800 text-xs font-normal font-['Nunito_Sans'] line-through capitalize">
        ${produto.precoOriginal}
      </p>

      <p class="absolute left-[8px] top-[303px] text-black text-base font-bold font-['Nunito_Sans'] capitalize">
        ${produto.preco}
      </p>

      <p class="absolute left-[8px] top-[329px]">
        <span class="text-zinc-800 text-xs font-normal font-['Nunito_Sans']">Ou em até </span>
        <strong class="text-zinc-800 text-xs font-bold font-['Nunito_Sans']">${produto.parcelas}</strong>
      </p>

      <span class="w-10 h-5 absolute left-[8px] top-[7px] bg-sky-950 rounded border" aria-hidden="true"></span>
      <span class="absolute left-[13px] top-[8px] text-white text-[10px] font-bold font-['Nunito_Sans'] uppercase leading-5">
        ${produto.badge}
      </span>

      <mark class="px-2 py-1 absolute left-[80px] top-[295px] bg-emerald-300 rounded inline-flex justify-start items-start gap-2.5">
        <span class="text-white text-xs font-bold font-['Nunito_Sans'] underline uppercase leading-3">${produto.desconto}</span>
      </mark>

      <button class="w-56 px-6 py-2.5 absolute left-[8px] top-[361px] bg-blue-600 rounded-lg inline-flex justify-center items-center gap-2.5 overflow-hidden">
        <span class="text-center text-white text-sm font-bold font-['Nunito_Sans'] leading-5">Comprar</span>
      </button>

    </article>
  `;

  return li;
}

const lista = document.getElementById("product-list");
produtos.forEach((produto) => lista.appendChild(renderCard(produto)));