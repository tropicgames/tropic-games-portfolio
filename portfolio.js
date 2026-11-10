const games = [
  { id: "drill-orbit", name: "Drill Orbit", type: "arcade", label: "Mining arcade", description: "Bore through planets, blast through rock, and upgrade your drill for deeper runs." },
  { id: "snow-plow", name: "Snow Plow!", type: "arcade", label: "Vehicle progression", description: "Clear snowy fields, sell your haul, and build a factory as you unlock bigger plows." },
  { id: "bike-escape", name: "Obby +1 Bike Escape", type: "obby", label: "Speed obby", description: "Gain speed with every second of pedaling and tackle a 50-stage bike obstacle course." },
  { id: "spider-arms", name: "Spider Arms Obby Escape", type: "obby", label: "Climbing obby", description: "Scale walls with mechanical spider arms and manage your grip through climbing challenges." },
  { id: "catch-a-fish", name: "Catch a Fish", type: "collection", label: "Fishing & collection", description: "Time your cast, reel in rare eggs, and hatch animals for a growing aquarium." },
  { id: "chop-trees-for-eggs", name: "Chop Trees for Eggs", type: "collection", label: "Chase & collection", description: "Chop trees for eggs, outrun the guardian, and hatch pets back at your base." },
  { id: "fish-for-brainrots", name: "Fish for Brainrots", type: "collection", label: "Fishing & collection", description: "A twist on Catch a Fish with collectible sea creatures, from sneaker-wearing hybrids to absurd egg faces." },
  { id: "throw-foods", name: "Throw Foods for Pets", type: "collection", label: "Launch & collection", description: "Train your throwing arm, launch food downrange, and bring pets home to grow your base." }
];

const grid = document.querySelector("#game-grid");
const filters = [...document.querySelectorAll("[data-filter]")];
const status = document.querySelector("#game-count");

grid.innerHTML = games.map((game) => `
  <article class="card" data-type="${game.type}">
    <div class="cover"><img src="art/${game.id}.${game.id === "drill-orbit" ? "avif" : "webp"}" alt="" width="960" height="540" loading="lazy"></div>
    <div class="card-body">
      <p class="eyebrow genre">${game.label}</p>
      <h3>${game.name}</h3>
      <p class="description">${game.description}</p>
      <a class="play" href="./play/${game.id}/" target="_blank" rel="noopener" aria-label="Play ${game.name} in a new tab">Play demo <span aria-hidden="true">↗</span></a>
    </div>
  </article>
`).join("");

for (const filter of filters) {
  filter.addEventListener("click", () => {
    for (const button of filters) button.setAttribute("aria-pressed", String(button === filter));
    let visible = 0;
    for (const card of grid.children) {
      card.hidden = filter.dataset.filter !== "all" && card.dataset.type !== filter.dataset.filter;
      if (!card.hidden) visible++;
    }
    status.textContent = `${visible} games shown.`;
  });
}
