// Урок 11 на сайті (запис заняття 11.11.2026): Relative Clauses на практиці.
// Що нового порівняно з уроком 10: who для тварин, whose для речей, when для будь-якого часу,
// in which, relative clause у середині речення, defining vs non-defining, гра — не місце.
// Тест (версія 1) вставляється між маркерами; версії 2–5 лежать у variants.js (EXTRA.relative2).
const RELATIVE2_V1 = /*V1_START*/[
  M("Odessa Zoo, ___ elephant is old and alone, is in the news.", ["who", "whose", "which", "where"], 1,
    "Whose показує належність (its elephant = whose elephant) і працює не лише для людей, а й для місць і речей: a zoo whose elephant…",
    "Who називає людину й сам є підметом, а тут після пропуску стоїть іменник elephant, тобто потрібна належність.",
    "Which замінює річ як підмет або додаток, але не означає «чий»: «which elephant is old» тут не має змісту.",
    "Where означає «у якому місці», а нам треба сказати, чий слон, тобто належність."),
  M("Christmas is the time ___ a lot of magic happens.", ["where", "which", "when", "who"], 2,
    "When вживаємо після будь-якого слова часу: рік, 6 p.m., день народження, Christmas, the time.",
    "Where вказує на місце, а Christmas і the time — це час.",
    "Which без прийменника тут не підходить: a lot of magic happens at this time, тобто потрібне when.",
    "Who вживаємо для людей і тварин, а time — не жива істота."),
  M("The cats ___ I feed in the evening are always hungry.", ["where", "who", "when", "whose"], 1,
    "Who вживаємо не лише для людей, а й для тварин (особливо тих, яких ми знаємо й любимо): the cats who I feed.",
    "Where вказує на місце, а cats — тварини.",
    "When вказує на час; in the evening уже є в реченні, а пропуск стоїть після cats.",
    "Whose потребує після себе іменника (whose food), а тут одразу I feed."),
  M("Яке речення правильне?", ["Dota 2 is a game where millions of people play.", "Dota 2 is a game whose millions of people play.", "Dota 2 is a game which millions of people play."], 2,
    "Гра — це річ, а не місце, тому which або that: a game which millions of people play.",
    "Where — для місця. Онлайн-гра не є місцем, куди ми йдемо, тому where тут звучить неправильно.",
    "Whose означає «чий» і потребує іменника, що належить грі: whose players, whose hero. «Whose millions of people» не має змісту."),
  M("Clash of Clans is a mobile game ___ millions of people play.", ["in which", "which", "where", "who"], 1,
    "Play a game — без прийменника, тому просто which (або that). In which ставимо лише тоді, коли в реченні справді є in: a café in which I have lunch.",
    "In which = where, а гра — не місце: ми кажемо play the game, а не play in the game.",
    "Where — для місць, а гра — це річ.",
    "Who вживаємо для людей, а Clash of Clans — гра."),
  M("Знайдіть речення з помилкою:", ["Mario is a character whose jumps on enemies.", "Pac-Man is a game whose hero eats dots.", "Mario is a character who jumps on enemies."], 0,
    "Після whose завжди стоїть іменник (whose hero, whose hair). У першому реченні після whose одразу дієслово jumps, тому потрібне who.",
    "Це речення правильне: whose + іменник hero — герой цієї гри.",
    "Це речення правильне: who + дієслово jumps, who = Mario."),
  M("Як поставити relative clause в середину? «Toru Iwatani is a designer who created Pac-Man.»", ["Toru Iwatani who created Pac-Man, is a designer.", "Toru Iwatani, who created Pac-Man, is a designer.", "Toru Iwatani, he created Pac-Man, is a designer."], 1,
    "Схема: про кого говоримо → кома → who + додаткова інформація → кома → решта речення. Toru Iwatani, who created Pac-Man, is a designer.",
    "Коми мають стояти з обох боків вставки, а тут бракує першої коми після Iwatani.",
    "He замість who не з'єднує частини: виходять два речення, склеєні комами."),
  M("Pac-Man, ___ came out in 1980, is still popular.", ["when", "who", "which", "where"], 2,
    "Ми говоримо про гру Pac-Man (а не про рік), тому потрібне which. Рік 1980 — лише додаткова інформація.",
    "When мав би стояти після слова часу (the year when), а тут перед пропуском стоїть Pac-Man — назва гри.",
    "Who — для людей і тварин, а Pac-Man тут — гра.",
    "Where — для місць, а Pac-Man — гра."),
  F("The university ___ I studied is the best in Ukraine.", ["where", "in which", "at which"],
    "University — місце, і I studied there, тому where (або in which).",
    "Тут мова про місце (I studied there), тому потрібне where."),
  F("Geralt, ___ hair is white, is a monster hunter.", "whose",
    "His hair → whose hair: whose показує належність і стоїть перед іменником.",
    "Після пропуску стоїть іменник hair і йдеться про належність (his hair), тому потрібне whose."),
  O("Silent Hill, where strange things happen, is a town in a game",
    "Спочатку про що говоримо (Silent Hill), потім вставка в комах (where strange things happen), потім головне: is a town in a game."),
  MA("З'єднайте слово з тим, для чого його вживаємо (так, як пояснила вчителька):",
    [["🐶", "who", "люди й тварини"], ["🎮", "which / that", "речі, ігри"], ["🏫", "where / in which", "місце"], ["🦒", "whose", "чий: людей і речей"], ["🎄", "when", "будь-який час: рік, 6 p.m., Christmas"]],
    "Who — люди та тварини; which/that — речі; where = in which — місце; whose — належність і для людей, і для речей; when — будь-який час."),
  SO("Defining (без ком) чи non-defining (у комах)?",
    ["Defining — без цього не зрозуміло, про що мова", "Non-defining — просто додаткова інформація"],
    [["The university where I studied is the best one.", 0],
     ["Pac-Man, which came out in 1980, is still popular.", 1],
     ["People who play Dota 2 often shout.", 0],
     ["Geralt, whose hair is white, is a monster hunter.", 1],
     ["This is the café where we met.", 0],
     ["Minecraft, which came out in 2011, is a huge hit.", 1]],
    "Якщо вставку можна викинути і речення все одно зрозуміле — це non-defining, у комах. Якщо без неї незрозуміло, який саме (який університет? які люди?) — defining, без ком."),
  G("Вставте who, whose, which, where або when (одне слово зайве):",
    ["who", "whose", "which", "where", "when", "what"],
    ["Six p.m. is the time ___ I usually finish work.",
     "Kate is a teacher ___ loves video games.",
     "Odessa Zoo is a place ___ elephant is very old.",
     "Tetris is a game ___ has falling blocks.",
     "Bowser's castle is the place ___ Mario fights his enemy."],
    ["when", "who", "whose", "which", "where"],
    "When — час (six p.m.), who — людина (a teacher), whose — належність (its elephant), which — річ (game), where — місце. What зайве: воно не буває relative word після іменника."),
  SG("🐘 🦒 🏞️", "This is the zoo ___ elephant lives alone.", ["who", "whose", "where", "which"], 1,
    "Whose elephant = its elephant: зоопарк, чий слон живе сам. Whose працює і для місць.",
    "Who вживаємо для людей і тварин як підмет, а тут після пропуску іменник elephant — потрібна належність.",
    "Where потребує після себе підмета й дієслова (where the elephant lives), а тут слово elephant без артикля означає «чий слон».",
    "Which не означає «чий», тому «which elephant lives alone» тут не підходить."),
  VS("🕹️ 👾 1️⃣9️⃣8️⃣0️⃣",
    ["Pac-Man, when came out in 1980, is still popular.", "Pac-Man, which came out in 1980, is still popular.", "Pac-Man came out in 1980, is still popular."], 1,
    "Вставка про гру: Pac-Man, which came out in 1980, is still popular. Which = Pac-Man.",
    "When після назви гри не ставимо: ми описуємо гру, а не час.",
    "Без relative word виходить один підмет і два дієслова через кому — так не можна.")
]/*V1_END*/;

LESSONS.push({
  id: "relative2",
  title: "Relative Clauses: practice",
  short: "Relative clauses 2",
  subtitle: "Заняття 11 листопада · whose для речей, in which, вставка в середину речення",
  summary: "Розбираємо, чим who відрізняється від whose, коли when і in which, як поставити relative clause в середину речення і коли потрібні коми. Плюс ваші помилки з уроку.",
  sections: [
    { title: "Коротко про головне", html: `
      <p>Relative word з'єднує два прості речення в одне і <b>замінює</b> слово з другого речення (he, it, there, his, then). Тому це слово вдруге <b>не повторюємо</b>.</p>
      <table class="mtable"><tr><th>Слово</th><th>Для чого</th><th>Нове з уроку</th></tr>
        <tr><td><b>who</b></td><td>люди</td><td>і <b>тварини</b>: <i>This is the dog <mark>who</mark> I feed every day.</i></td></tr>
        <tr><td><b>which / that</b></td><td>речі, ігри — те, що «не живе»</td><td><i>Dota 2 is a game <mark>which</mark> millions of people play.</i> (гра — не місце!)</td></tr>
        <tr><td><b>where</b> = <b>in which</b></td><td>місце</td><td><i>Silent Hill is a town <mark>in which</mark> strange things happen.</i></td></tr>
        <tr><td><b>whose</b></td><td>чий / чия</td><td>і для людей, і для <b>речей та місць</b>: <i>Odessa Zoo, <mark>whose</mark> elephant is old and alone, …</i></td></tr>
        <tr><td><b>when</b></td><td>час</td><td><b>будь-який</b>: 1985, 6 p.m., my birthday, Christmas: <i>Christmas is the time <mark>when</mark> a lot of magic happens.</i></td></tr></table>
      <p class="hint">Who і whose ніколи не міняємо місцями: <b>who</b> просто називає людину, <b>whose</b> означає «чий» і після нього завжди <b>іменник</b> (whose hero, whose hair).</p>` },
    { title: "Guided discovery: що не так?", html: `
      <p>Із чим пов'язане виділене слово: людина, річ, місце, час чи належність? Два речення — з помилкою.</p>
      <ol>
        <li>Mario is a character <b>who</b> jumps on enemies. <small>(людина/персонаж) ✓</small></li>
        <li><s>Mario is a character <b>whose</b> jumps on enemies.</s> <small>✗ після whose потрібен іменник → <mark>who</mark> jumps</small></li>
        <li>Tetris is a game <b>that</b> you can play on any device. <small>(річ) ✓</small></li>
        <li>Silent Hill is a town <b>where</b> strange things happen. <small>(місце) ✓</small></li>
        <li>Pac-Man is a game <b>whose</b> hero eats dots. <small>(належність: герой цієї гри) ✓</small></li>
        <li><s>Pac-Man is a game <b>who</b> hero eats dots.</s> <small>✗ hero — чий? → <mark>whose</mark> hero</small></li>
        <li>1980 is the year <b>when</b> Pac-Man came out. <small>(час) ✓</small></li></ol>
      <ul>
        <li><b>Who = Mario.</b> Чи можна сказати <s>a character who he jumps</s>? Ні: who вже є підметом, he — повтор.</li>
        <li><b>Where = in this town.</b> Чи можна сказати <i>a town in which strange things happen</i>? Так! Which підходить, але <b>з прийменником in</b>. А <s>a town which strange things happen</s> — помилка.</li>
        <li><b>Що стоїть після whose</b> — дієслово чи іменник? Іменник: whose <b>hero</b>, whose <b>elephant</b>.</li></ul>
      <p class="hint">Після relative word зазвичай іде «маленьке речення»: підмет + дієслово (<i>you can play, strange things happen, Pac-Man came out</i>). Лише <b>who / which / that</b> можуть самі бути підметом: <i>who jumps, which came out</i>.</p>` },
    { title: "Вставка в середину речення (найважче місце уроку)", html: `
      <p>Ви сказали: «It's like you change direction of your sentence». Насправді в українській ми робимо так постійно: <i>«Гімназія, в якій я навчалася, знаходиться на вулиці Данькевича»</i>. Англійська — так само.</p>
      <div class="pair">
        <div><div class="tag">Крок 1: два речення</div>Toru Iwatani is a designer. He created Pac-Man.</div>
        <div><div class="tag">Крок 2: в кінці</div>Toru Iwatani is a designer <mark>who created Pac-Man</mark>.</div>
      </div>
      <div class="pair" style="margin-top:10px">
        <div><div class="tag">Крок 3: про кого говоримо</div>Toru Iwatani<mark>,</mark> …</div>
        <div><div class="tag">Крок 4: вставка в комах + решта</div>Toru Iwatani<mark>, who created Pac-Man,</mark> is a designer.</div>
      </div>
      <table class="mtable" style="margin-top:14px"><tr><th>В кінці</th><th>У середині</th></tr>
        <tr><td>Geralt is a monster hunter whose hair is white.</td><td>Geralt<mark>, whose hair is white,</mark> is a monster hunter.</td></tr>
        <tr><td>Mario is a character who jumps on enemies.</td><td>Mario<mark>, who jumps on enemies,</mark> is a game character (not my cat!).</td></tr>
        <tr><td>Silent Hill is a town where strange things happen.</td><td>Silent Hill<mark>, where strange things happen,</mark> is a town in a game.</td></tr>
        <tr><td>Pac-Man is a popular game whose hero eats dots.</td><td>Pac-Man<mark>, whose hero eats dots,</mark> is a popular game.</td></tr>
        <tr><td>Pac-Man is a game that came out in 1980.</td><td>Pac-Man<mark>, which came out in 1980,</mark> is still popular.</td></tr></table>
      <p class="hint">Навіщо це? Коли хочемо почати з найцікавішого: <i>Mario, who jumps on enemies, is actually a game character</i> — щоб ніхто не подумав, що Mario — ваш кіт чи хлопець. 🙂 Ваш варіант <i>Geralt, who has white hair, is a monster hunter</i> — теж правильний!</p>` },
    { title: "Defining чи non-defining: коли коми", html: `
      <div class="pair">
        <div><div class="tag">Defining · без ком</div>Без цієї частини незрозуміло, про що мова.<br><i>The university <mark>where I studied</mark> is the best pedagogical university in Ukraine.</i><br><small>Без «where I studied» — а який університет найкращий?</small></div>
        <div><div class="tag">Non-defining · у комах</div>Додаткова інформація, її можна викинути.<br><i>Pac-Man<mark>, which came out in 1980,</mark> is still popular.</i><br><small>Pac-Man is still popular — і так усе зрозуміло.</small></div>
      </div>
      <p>У non-defining (з комами) за правилом вживаємо <b>who / which</b>, а не <b>that</b>. Але вчителька сказала важливе: в усному мовленні навіть носії кажуть <i>Minecraft, that came out in 2011…</i> — і ніхто вас не засудить. Коми потрібні тільки на письмі (листи, CV).</p>
      <p class="hint">Не бійтеся дрібних помилок: американці з Техасу кажуть <i>more cold</i> замість <i>colder</i>. Важливіше — правильний порядок слів у питаннях і неправильні дієслова, бо там помилка може змінити зміст.</p>` },
    { title: "Пастки: гра — не місце, in which — тільки для місць", html: `
      <ol>
        <li><s>Dota 2 is a game whose millions play.</s> / <s>…a game where millions of people play.</s> → Dota 2 is a game <mark>which / that</mark> millions of people play. <small>(гра — це річ; where хіба що для сервера чи сайту)</small></li>
        <li><s>Silent Hill is a town which has strange things happen.</s> → Silent Hill is a town <mark>where / in which</mark> strange things happen.</li>
        <li><s>Mario is a character who's he jumps on platforms.</s> → Mario is a character <mark>who jumps</mark> on platforms.</li>
        <li><s>Pac-Man came out in 1980, is still popular.</s> → Pac-Man<mark>, which</mark> came out in 1980, is still popular. <small>(один підмет і два дієслова через кому — так не можна)</small></li>
        <li><s>Pac-Man is a game who's hero eats dots.</s> → <mark>whose</mark> hero <small>(who's = who is)</small></li></ol>` },
    { title: "Ваші помилки з уроку", html: `
      <p class="hint">Не про relative clauses, а про загальну граматику — те, що повторюється з уроку в урок.</p>
      <table class="mtable"><tr><th>Ви сказали</th><th>Правильно</th><th>Чому</th></tr>
        <tr><td><s>That doesn't alive.</s></td><td>That <mark>isn't</mark> alive.</td><td>alive — прикметник, з ним be, а не do</td></tr>
        <tr><td><s>Maybe yes, but it doesn't correct.</s></td><td>…but it <mark>isn't</mark> correct.</td><td>correct — прикметник → is / isn't</td></tr>
        <tr><td><s>What means defining clause?</s></td><td>What <mark>does</mark> «defining clause» <mark>mean</mark>?</td><td>питання з дієсловом дії → does + mean</td></tr>
        <tr><td><s>It's more easier.</s></td><td>It's <mark>easier</mark>.</td><td>easier вже є порівнянням, more зайве</td></tr>
        <tr><td><s>go to the more easy topic</s></td><td>go to <mark>an easier</mark> topic</td><td>easy → easier; a / an перед прикметником + іменником</td></tr>
        <tr><td><s>It's hard topic for me.</s></td><td>It's <mark>a</mark> hard topic for me.</td><td>злічуваний іменник в однині потребує a</td></tr>
        <tr><td><s>Mario is character…</s> · <s>Subway Surfers is mobile game…</s></td><td>Mario is <mark>a</mark> character · is <mark>a</mark> mobile game</td><td>те саме: a + іменник в однині</td></tr>
        <tr><td><s>because I have variant to choose</s></td><td>because I have <mark>options</mark> to choose from</td><td>варіанти відповіді — options</td></tr>
        <tr><td><s>I need to find mistake</s> · <s>I don't see mistake</s></td><td>find <mark>the</mark> mistake · see <mark>the</mark> mistake</td><td>конкретна помилка в цьому реченні → the</td></tr>
        <tr><td><s>my brain thinking this way now</s></td><td>my brain <mark>is thinking</mark> this way now</td><td>дієслову на -ing потрібне is</td></tr>
        <tr><td><s>thank you for lesson</s></td><td>thank you for <mark>the</mark> lesson</td><td>конкретний урок → the</td></tr></table>` },
    { title: "Домашнє завдання: два способи", html: `
      <p>Перепишіть кожне речення двома способами — вставка <b>в кінці</b> і <b>в середині</b>. Якщо якийсь спосіб звучить дивно, пропустіть його.</p>
      <ol>
        <li>Minecraft is a world. You can build anything there. → Minecraft is a world <mark>where</mark> you can build anything.</li>
        <li>Dota 2 is a popular online game. Its biggest tournament is called The International. → Dota 2 is a popular online game <mark>whose</mark> biggest tournament is called The International. · Dota 2<mark>, whose</mark> biggest tournament is called The International<mark>,</mark> is a popular online game.</li>
        <li>1980 is the year. Pac-Man came out then. → 1980 is the year <mark>when</mark> Pac-Man came out.</li>
        <li>Clash of Clans is a mobile game. Millions of people play it. → Clash of Clans is a mobile game <mark>which / that</mark> millions of people play.</li>
        <li>Silent Hill is a horror series. Its music was written by Akira Yamaoka. → Silent Hill<mark>, whose</mark> music was written by Akira Yamaoka<mark>,</mark> is a horror series.</li></ol>
      <p class="hint">Перевірку цього домашнього завдання дивіться в наступному уроці.</p>` },
    { title: "Оригінальні матеріали", html: `<p class="source-note">Слайди з дошки вчительки на занятті 11 листопада.</p><details><summary>Показати слайди уроку</summary><div class="source-images">${[17, 18, 19, 20].map((n, i) => `<a href="assets/lesson-source-${n}.webp" target="_blank" rel="noopener"><img loading="lazy" src="assets/lesson-source-${n}.webp" alt="Слайд уроку 11 листопада, ${i + 1}"></a>`).join("")}</div></details>` }
  ],
  quiz: RELATIVE2_V1
});
