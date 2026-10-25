// Урок 10: Relative Clauses (who / which / that / where / whose / when, defining vs non-defining).
// Тест (версія 1) вставляється між маркерами; версії 2–5 лежать у variants.js (EXTRA.relative).
const RELATIVE_V1 = /*V1_START*/[
  M("Mario is a character ___ jumps on enemies and collects coins.", ["which", "where", "who", "whose"], 2,
    "Для людини (або персонажа-особи) перед дієсловом ставимо who: who jumps.",
    "which вживаємо для речей і тварин, а Mario — персонаж-особа.",
    "where вказує на місце (in/at which), а тут потрібен підмет для дієслова jumps.",
    "whose показує належність і після нього стоїть іменник, а не дієслово."),
  M("Знайдіть помилку: «Silent Hill is a town which strange things happen.» Яке слово потрібне замість which?", ["where", "who", "whose", "when"], 0,
    "Silent Hill — це місце, і strange things happen in this town, тому потрібне where (= in which).",
    "who вживаємо для людей, а town — це місце.",
    "whose показує належність, але тут немає чиєїсь речі, і після whose мав би йти іменник.",
    "when вказує на час (the year when), а тут мова про місце."),
  M("Pac-Man, ___ came out in 1980, is still popular.", ["that", "which", "who", "where"], 1,
    "Це non-defining clause (виділене комами): додаткова інформація про річ. У такому реченні можна лише who/which, тому для Pac-Man — which.",
    "that не ставимо після коми: в non-defining clause він неможливий.",
    "who вживаємо для людей, а Pac-Man тут — гра.",
    "where вказує на місце, а came out in 1980 — це про час, і підмет тут уже є."),
  M("Join the sentences: «Do you see that café? We met there last year.» Оберіть правильне з'єднання.", ["That is the café where we met there last year.", "That is the café which we met there last year.", "That is the café when we met last year.", "That is the café where we met last year."], 3,
    "Where вже замінює слово there (= in which), тому there не повторюємо: the café where we met last year.",
    "Where замінює there, тому there повторювати не можна.",
    "Which тут замінює café, але слово there лишилося зайвим: ми повторюємо місце двічі.",
    "When вказує на час, а café — це місце, потрібне where."),
  M("Sunday is the day ___ we play Dota 2 together.", ["when", "where", "who", "which"], 0,
    "Для часу (the day, the year, the time) вживаємо when.",
    "where вказує на місце, а Sunday — це день, тобто час.",
    "who вживаємо для людей, а day — не людина.",
    "which без прийменника не підходить: we play Dota 2 on this day, тут потрібне when."),
  M("Geralt is a monster hunter ___ hair is white.", ["who's", "that", "which", "whose"], 3,
    "Whose замінює his/her/its/their і показує належність: whose hair = його волосся. Після whose стоїть іменник.",
    "who's — це скорочення who is/who has, а нам потрібна належність.",
    "that замінює підмет або додаток і не показує належність: «that hair is white» не має змісту.",
    "which вживаємо для речей, а Geralt — людина; крім того, which не показує належність."),
  M("Яке речення правильне?", ["Angry Birds is a game who many children play.", "Angry Birds is a game which many children play it.", "Angry Birds is a game that many children play."], 2,
    "Для речі в defining clause підходить that (або which). Додаток уже замінено relative word, тому play без it.",
    "who вживаємо для людей, а game — це річ.",
    "Which уже замінює Angry Birds, тому it після play зайве."),
  M("Знайдіть речення з помилкою:", ["Minecraft is a game that millions of people love.", "Candy Crush is a game who's levels are colourful.", "Pac-Man is a character who eats dots."], 1,
    "Після who's (= who is) не може стояти іменник. Для належності потрібне whose: a game whose levels are colourful.",
    "Це речення правильне: that замінює game у defining clause.",
    "Це речення правильне: who замінює character, далі дієслово eats."),
  F("Bowser's castle is the place ___ Mario fights his main enemy.", "where",
    "Place — це місце, і Mario fights his enemy in this place, тому вживаємо where.",
    "Для місця потрібне where (= in which)."),
  F("Subway Surfers is a mobile game ___ main character runs along train tracks.", "whose",
    "Whose замінює its і показує належність: its main character = whose main character. Після whose стоїть іменник.",
    "Тут показано належність (its main character), тому потрібне whose."),
  F("Miss Pac-Man, ___ was released in 1981, was a huge hit.", "which",
    "Це non-defining clause у комах, а Miss Pac-Man — гра. У таких реченнях можна тільки who/which, тому для речі which.",
    "Після коми that не ставимо, а для речі потрібне which."),
  O("Geralt is a monster hunter whose hair is white",
    "Whose стоїть одразу перед іменником hair: a monster hunter whose hair is white."),
  O("Tetris is a game that you can play anywhere",
    "Relative word that іде одразу після game, далі підмет + дієслово: that you can play."),
  MA("З'єднайте relative word з тим, на що він вказує:",
    [["👤", "who", "людина"], ["🎮", "which", "річ або тварина"], ["📍", "where", "місце"], ["📅", "when", "час"], ["🔑", "whose", "належність"]],
    "Who — людина, which — річ, where — місце, when — час, whose — належність (his/her/its/their)."),
  SO("Розсортуйте речення: defining чи non-defining clause?",
    ["Defining (без ком)", "Non-defining (у комах)"],
    [["Mario is a character who jumps on enemies.", 0],
     ["Minecraft, which came out in 2011, is very popular.", 1],
     ["Tetris is a game that has no real ending.", 0],
     ["Pac-Man, which was released in 1980, is still popular.", 1],
     ["Dota 2 is a game that millions of people play.", 0],
     ["Silent Hill, which has a famous soundtrack, is a horror series.", 1]],
    "Defining clause без ком потрібен, щоб зрозуміти, про що мова. Non-defining у комах дає додаткову інформацію, і там можна лише who/which."),
  G("Вставте слова з банку в речення (одне слово зайве):",
    ["who", "which", "where", "whose", "when"],
    ["Luigi is a plumber ___ helps his brother.",
     "Tetris is a game ___ has falling blocks.",
     "Silent Hill is a town ___ strange things happen.",
     "Geralt is a hero ___ sword is silver."],
    ["who", "which", "where", "whose"],
    "Who — людина, which — річ, where — місце, whose — належність. Слово when зайве, бо в реченнях немає часу."),
  HP("That is the man who works with my brother.",
    [["👨 💼 👧", "чоловік працює з моєю сестрою"], ["👦 🏫 📚", "брат вчиться в школі"], ["👨 💼 👦", "чоловік працює з моїм братом"]], 2,
    "Who works with my brother означає, що чоловік працює саме з моїм братом.",
    "У реченні мова про брата, а не про сестру.",
    "У реченні немає навчання в школі: чоловік працює з братом."),
  SG("⛏️ 🧱 🏠", "Minecraft is a world ___ you can build anything.", ["who", "whose", "where", "when"], 2,
    "World — це місце, і you can build anything in this world, тому потрібне where.",
    "who вживаємо для людей, а world — не людина.",
    "whose показує належність, а після нього мав би йти іменник.",
    "when вказує на час, а тут мова про місце."),
  SG("🗓️ 🍄 🎮", "1985 is the year ___ Super Mario Bros. came out.", ["when", "where", "which", "who"], 0,
    "Year — це час, тому для нього вживаємо when.",
    "where вказує на місце, а year — це час.",
    "which без прийменника не підходить: came out in this year = when.",
    "who вживаємо для людей, а year — не людина."),
  VS("🧙 ⚔️ 🐺",
    ["Geralt is the hero who he fights monsters in The Witcher 3.", "In The Witcher 3, Geralt is a hero who fights monsters.", "Geralt is a hero which fights monsters in The Witcher 3."], 1,
    "Для людини у defining clause ставимо who, а після нього одразу дієслово fights.",
    "Who вже замінює Geralt, тому he повторювати не можна.",
    "Which вживаємо для речей, а Geralt — людина.")
]/*V1_END*/;

LESSONS.push({
  id: "relative",
  title: "Relative Clauses",
  short: "Relative clauses",
  subtitle: "Урок 10 · who, which, that, where, whose, when",
  summary: "Об'єднуємо два речення в одне за допомогою who / which / that / where / whose / when, відрізняємо defining від non-defining, вчимося не повторювати слово, яке вже замінило relative word.",
  sections: [
    { title: "Коротко про головне", html: `
      <p><b>Relative clause</b> — це частина речення, яка пояснює іменник: <i>the man <b>who</b> works with my brother</i>. Relative word (who, which, that, where, whose, when) <b>замінює</b> інше слово (he, it, there, his, then), тому це слово вдруге <b>не повторюємо</b>.</p>
      <table class="mtable"><tr><th>Слово</th><th>Про що</th><th>Приклад</th></tr>
        <tr><td><b>who</b></td><td>людина</td><td>Mario is a character <mark>who</mark> jumps on enemies.</td></tr>
        <tr><td><b>which / that</b></td><td>річ, гра, тварина</td><td>Tetris is a game <mark>that</mark> you can play on any device.</td></tr>
        <tr><td><b>where</b></td><td>місце</td><td>Silent Hill is a town <mark>where</mark> strange things happen.</td></tr>
        <tr><td><b>whose</b></td><td>належність (his / her / its / their)</td><td>Pac-Man is a game <mark>whose</mark> hero eats dots.</td></tr>
        <tr><td><b>when</b></td><td>час</td><td>1980 is the year <mark>when</mark> Pac-Man came out.</td></tr></table>
      <p class="hint">Після <b>who / which / that</b> іде дієслово (або підмет + дієслово), після <b>whose</b> — іменник: whose <b>hero</b> eats dots, а не whose eats.</p>` },
    { title: "Join the two sentences into one", html: `
      <p class="hint">Почніть з: This is / That is / They are. Приклад: <i>Do you see that building? I studied there. → That is the building <mark>where</mark> I studied.</i></p>
      <ol>
        <li>Do you see that man? He works with my brother. → That is the man <mark>that / who</mark> works with my brother.</li>
        <li>Look at this phone. I bought it yesterday. → This is the phone <mark>that / which</mark> I bought yesterday.</li>
        <li>Do you know that café? We met there last year. → This is that café <mark>where</mark> we met last year.</li></ol>` },
    { title: "Listening: The History of Pac-Man (1980)", html: `
      <p><b>Before watching:</b> What do you know about Pac-Man? Who are his enemies? Why do you think people still love this game?</p>
      <p><b>Watch once, then answer:</b> 1. Where does the name Pac-Man come from? 2. What is the character said to be inspired by?</p>
      <p><b>Second watch — complete with the words you hear:</b></p>
      <ol>
        <li>Pac-Man is a game <mark>that</mark> has survived generations. (0:10)</li>
        <li>The name comes from the Japanese slang word paku-paku, <mark>which</mark> means «to eat». (0:49)</li>
        <li>You were rewarded with little creative cartoons like the ghost <mark>that</mark> got his outfit caught on a nail. (1:45)</li>
        <li>There were many spin-offs, including Miss Pac-Man, <mark>which</mark> was released a year later, in 1981. (2:01)</li></ol>
      <p class="hint">У реченнях 2 і 4 перед which стоїть <b>кома</b> — це додаткова інформація (non-defining), і там <b>that</b> уже не можна. У реченнях 1 і 3 коми немає — можна that або which.</p>` },
    { title: "Vocabulary", html: `
      <table class="mtable"><tr><th>Слово</th><th>Значення</th></tr>
        <tr><td>to be a huge hit</td><td>бути дуже успішним</td></tr>
        <tr><td>sales plummet</td><td>продажі різко падають</td></tr>
        <tr><td>to be released</td><td>вийти, стати доступним публіці</td></tr>
        <tr><td>to be inspired by something</td><td>отримати ідею з чогось іншого</td></tr>
        <tr><td>a spin-off</td><td>нова гра на основі старої успішної</td></tr>
        <tr><td>to be rewarded with something</td><td>отримати щось за добре виконану роботу</td></tr></table>` },
    { title: "Guided discovery", html: `
      <p>Із чим пов'язане виділене слово: людина, річ, місце, час чи належність?</p>
      <ol>
        <li>Mario is a character <b>who</b> jumps on enemies. <small>(людина)</small></li>
        <li>Tetris is a game <b>that</b> you can play on any device. <small>(річ)</small></li>
        <li>Silent Hill is a town <b>where</b> strange things happen. <small>(місце)</small></li>
        <li>Pac-Man is a game <b>whose</b> hero eats dots. <small>(належність)</small></li>
        <li>1980 is the year <b>when</b> Pac-Man came out. <small>(час)</small></li></ol>
      <ul>
        <li><b>Не повторюємо:</b> <s>a character who he jumps</s> → a character who jumps (who = Mario, ще одне he зайве).</li>
        <li><b>Where = in this town:</b> <s>a town which strange things happen</s> → a town where strange things happen.</li>
        <li><b>Після whose</b> іде іменник (whose hero), а не дієслово.</li></ul>
      <div class="pair">
        <div><div class="tag">Defining clause</div>без ком; потрібне, щоб зрозуміти, про кого / що мова. Можна <b>who / that / which</b>.</div>
        <div><div class="tag">Non-defining clause</div>у комах; додаткова інформація. Тільки <b>who / which</b>, <b>that</b> не можна: Pac-Man<mark>, which</mark> came out in 1980<mark>,</mark> is still popular.</div>
      </div>` },
    { title: "Each sentence has one mistake. Find it and fix it", html: `
      <ol>
        <li><s>Mario is a character who he jumps on enemies.</s> → Mario is a character <mark>who jumps</mark> on enemies.</li>
        <li><s>Silent Hill is a town which strange things happen.</s> → Silent Hill is a town <mark>where</mark> strange things happen.</li>
        <li><s>Dota 2 is a game who millions of people play.</s> → Dota 2 is a game <mark>which / that</mark> millions of people play.</li>
        <li><s>Pac-Man, that came out in 1980, is still popular.</s> → Pac-Man, <mark>which</mark> came out in 1980, is still popular.</li>
        <li><s>Pac-Man is a game who's hero eats dots.</s> → Pac-Man is a game <mark>whose</mark> hero eats dots. <small>(who's = who is, а «чий» — whose)</small></li>
        <li><s>1980 is the year where Pac-Man came out.</s> → 1980 is the year <mark>when</mark> Pac-Man came out.</li></ol>` },
    { title: "Use who / which / that / where / whose / when", html: `
      <p class="hint">Якщо підходять два слова, пишіть обидва.</p>
      <ol>
        <li>Super Mario is a character <mark>who / that</mark> jumps on enemies and collects coins.</li>
        <li>Tetris is a puzzle game <mark>that / which</mark> has falling blocks and no real ending.</li>
        <li>Silent Hill is a town <mark>where</mark> strange things happen.</li>
        <li>The Witcher 3 is a game <mark>whose</mark> main hero is Geralt of Rivia.</li>
        <li>Dota 2 is a game <mark>that / which</mark> millions of people play.</li>
        <li>1985 is the year <mark>when</mark> Super Mario Bros. came out.</li>
        <li>Bowser's castle is the place <mark>where</mark> Mario fights his main enemy.</li>
        <li>Minecraft<mark>, which</mark> came out in 2011, is the best-selling video game in history.</li>
        <li>Subway Surfers is a mobile game <mark>whose</mark> main character runs along train tracks.</li>
        <li>Pac-Man is a character <mark>who / that</mark> eats dots and runs away from ghosts.</li></ol>` },
    { title: "Join the two sentences with a relative word", html: `
      <ol>
        <li>Geralt is a monster hunter. His hair is white. → Geralt is a monster hunter <mark>whose</mark> hair is white.</li>
        <li>Toru Iwatani is the designer. He created Pac-Man. → Toru Iwatani is the designer <mark>who</mark> created Pac-Man.</li>
        <li>Minecraft is a world. You can build anything there. → Minecraft is a world <mark>where</mark> you can build anything.</li>
        <li>Dota 2 is a game. Its biggest tournament is called The International. → Dota 2 is a game <mark>whose</mark> biggest tournament is called The International.</li>
        <li>1980 is the year. Pac-Man came out then. → 1980 is the year <mark>when</mark> Pac-Man came out.</li>
        <li>Clash of Clans is a mobile game. Millions of people play it. → Clash of Clans is a mobile game <mark>that / which</mark> millions of people play.</li>
        <li>Silent Hill is a horror series. Its music was written by Akira Yamaoka. → Silent Hill is a horror series <mark>whose</mark> music was written by Akira Yamaoka.</li></ol>
      <p class="hint">Скажіть кожне речення вголос, потім додайте ще один факт про ту саму гру або героя.</p>` },
    { title: "Speak out! Describe this (without the forbidden words)", html: `
      <table class="mtable"><tr><th>Describe this</th><th>Forbidden words</th></tr>
        <tr><td>Minecraft</td><td>Minecraft, blocks, build</td></tr>
        <tr><td>Candy Crush</td><td>Candy Crush, candy, sweets</td></tr>
        <tr><td>Geralt of Rivia</td><td>Geralt, Witcher, sword</td></tr>
        <tr><td>Silent Hill</td><td>Silent Hill, fog, horror</td></tr>
        <tr><td>Angry Birds</td><td>Angry, birds, pigs</td></tr>
        <tr><td>Dota 2</td><td>Dota, hero, team</td></tr></table>
      <p class="hint">Приклад: <i>It's a game <b>where</b> you can make a world from cubes.</i> · <i>He's a character <b>who</b> hunts monsters.</i></p>` },
    { title: "Оригінальні матеріали", html: `<p class="source-note">Ваші нотатки з уроку.</p><details><summary>Показати сторінки уроку</summary><div class="source-images"><a href="assets/lesson-source-15.webp" target="_blank" rel="noopener"><img loading="lazy" src="assets/lesson-source-15.webp" alt="Оригінальні нотатки: урок 10, сторінка 1"></a><a href="assets/lesson-source-16.webp" target="_blank" rel="noopener"><img loading="lazy" src="assets/lesson-source-16.webp" alt="Оригінальні нотатки: урок 10, сторінка 2"></a></div></details>` }
  ],
  quiz: RELATIVE_V1
});
