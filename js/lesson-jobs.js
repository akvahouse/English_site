// Урок 12 на сайті (запис заняття 13.11.2026): перевірка домашнього з relative clauses, Speak out про ігри,
// розповідь про свою роботу, текст Lumio Studio, слова з чату, вимова ch = /k/, помилки з уроку.
// Тест (версія 1) вставляється між маркерами; версії 2–5 лежать у variants.js (EXTRA.jobs).
const JOBS_V1 = /*V1_START*/[
  M("Minecraft is a world where you can build anything ___.", ["there", "нічого не потрібно", "in it", "here"], 1,
    "Where вже означає «там, у цьому світі», тому there в кінці зайве: a world where you can build anything.",
    "There повторює where — саме цю помилку ви зробили в домашньому завданні.",
    "In it теж повторює where (= in it): місце вже назване словом where.",
    "Here теж вказує на місце, тому це той самий повтор."),
  M("Яке речення правильне?", ["Clash of Clans is a mobile game in which millions of people play it.", "Clash of Clans is a mobile game which millions of people play.", "Clash of Clans is a mobile game in which millions of people play."], 1,
    "Which уже замінює гру, тому it не потрібне. І in не потрібне, бо play a game — без прийменника.",
    "Тут дві помилки з вашого домашнього: зайве in (гра — не місце) і зайве it (which уже = game).",
    "Зайве in: in which = where, а гра — не місце, ми кажемо play the game."),
  M("1980 is the year when Pac-Man came out ___.", ["then", "нічого не потрібно", "in it", "that year"], 1,
    "When уже означає «тоді, у цей рік», тому then у кінці зайве.",
    "Then повторює when: обидва слова говорять про час.",
    "In it повторює when (= in that year).",
    "That year — той самий повтор: рік уже названо словом when."),
  M("A team lead is a person who ___ deep knowledge of the work.", ["have", "has", "having", "is have"], 1,
    "Who = a person (він/вона), тому дієслово з -s: who has.",
    "Have — форма для I/you/we/they, а who тут замінює a person (третя особа однини). Ви сказали «a person who have».",
    "Having без допоміжного дієслова не може бути присудком.",
    "Is і have не поєднуються в Present Simple."),
  M("Оберіть правильне речення:", ["Most of people don't see these problems.", "Most people don't see these problems.", "The most people don't see these problems."], 1,
    "Про людей загалом кажемо most people, без of і без the.",
    "Most of вживаємо лише перед the/my/these: most of the people in my team. Перед просто people of не ставимо.",
    "The most — це найвищий ступінь (the most popular), а «більшість людей» — most people."),
  M("It ___ the people who watch the ad.", ["depends of", "depends on", "depends from", "is depend on"], 1,
    "Стале сполучення: depend on (залежати від).",
    "Depend of — калька з української «залежить від»; правильно on.",
    "Depend from — теж калька, в англійській тільки depend on.",
    "Depend — дієслово, тому без is: it depends on."),
  M("Яке слово вимовляємо зі звуком /k/, як у «character»?", ["chair", "cherry", "mechanics", "cheap"], 2,
    "У словах грецького походження ch читається як /k/: mechanics, character, chemistry, technical.",
    "Chair читаємо з /tʃ/ (ч), як у cherry.",
    "Cherry — звичайне ch = /tʃ/ (ч).",
    "Cheap — теж /tʃ/ (ч)."),
  F("We use artificial ___ (AI) for our ads.", ["intelligence"],
    "Intelligence — іменник (інтелект). Intelligent — прикметник (розумний): an intelligent person.",
    "Тут потрібен іменник: artificial intelligence, а не intelligent."),
  F("I have a ___ of mine who works in a Canadian studio.", "friend",
    "A friend of mine — «один мій друг/знайомий»: I have a friend of mine… або просто A friend of mine works…",
    "Стале сполучення: a friend of mine."),
  F("Our department ___ to work with other studios now.", ["needs", "has"],
    "Department — одне ціле (it), тому needs з -s. Ви сказали «our department need».",
    "Department = it, тому дієслово з -s: needs."),
  O("I work for a company where I am responsible for visual effects",
    "Where = in this company; після нього підмет + be + responsible for: where I am responsible for."),
  MA("З'єднайте посаду з тим, що робить людина (Lumio Studio):",
    [["🤝", "producer", "talks to the client and plans the schedule"], ["🎨", "art director", "decides the visual style"], ["👩‍💼", "team lead", "gives tasks to the team"], ["💥", "VFX artist", "makes particle effects"], ["📱", "QA tester", "checks every ad on different phones"], ["📈", "UA manager", "launches the ads and studies the results"]],
    "Це посади з тексту Lumio Studio: producer планує з клієнтом, art director — стиль, team lead — завдання, VFX artist — ефекти, QA tester — перевірка, UA manager — запуск реклами й результати."),
  SO("Правильно чи з помилкою?", ["✓ Правильно", "✗ Помилка"],
    [["the peak of 3D graphics", 0],
     ["the highest peak of 3D graphics", 1],
     ["deep knowledge of VFX", 0],
     ["wide knowledge of VFX", 1],
     ["complete tasks on time", 0],
     ["make tasks in time", 1]],
    "Peak — уже найвища точка, тому без highest. Знання бувають deep / shallow (не wide / narrow). Завдання виконують: complete / do a task on time."),
  G("Вставте слово з тексту Lumio Studio (одне зайве):",
    ["brief", "deadline", "feedback", "client", "schedule"],
    ["The producer talks to the ___ and plans the schedule.",
     "The ___ explains the goal of the ad.",
     "Every project has a tight ___.",
     "On Friday the team shows the new ads and gives ___."],
    ["client", "brief", "deadline", "feedback"],
    "Client — замовник, brief — коротке завдання від клієнта, tight deadline — стислий термін, give feedback — давати відгук. Schedule зайве: воно вже є в першому реченні."),
  HP("Max is a VFX artist who makes effects for explosions.",
    [["🧑‍💻 💥 ✨", "художник робить ефекти вибухів"], ["🧑‍💻 📱 ✅", "тестувальник перевіряє телефони"], ["👩‍💼 📅 🤝", "продюсер планує графік з клієнтом"]], 0,
    "VFX artist робить ефекти: вибухи й магію.",
    "Це QA tester: він перевіряє рекламу на різних телефонах.",
    "Це producer: він говорить з клієнтом і планує графік."),
  VS("🦷 😬 🏥",
    ["I'm going to the dentist today.", "I go to dentist today.", "I going to the dentist today."], 0,
    "Про план на сьогодні: I'm going to the dentist today. До лікаря — to the dentist, з the.",
    "Без the і в Present Simple: так ви сказали на початку уроку, а правильно — I'm going to the dentist.",
    "Бракує am: I'm going.")
]/*V1_END*/;

LESSONS.push({
  id: "jobs",
  title: "Talking About Your Job",
  short: "Your job",
  subtitle: "Заняття 13 листопада · робота, команда, Lumio Studio, relative clauses",
  summary: "Перевірка домашнього (не повторюємо there / then / it), описуємо ігри без заборонених слів, розповідаємо про свою роботу, читаємо про студію Lumio, слова з чату та вимова ch = /k/.",
  sections: [
    { title: "Коротко про головне", html: `
      <ul>
        <li><b>Relative word уже замінює слово</b> — тому не повторюємо <s>there</s> після where, <s>then</s> після when, <s>it</s> після which.</li>
        <li><b>In which</b> — тільки коли в реченні справді є in (місце): <i>a café in which I have lunch</i>. Гра — не місце: <i>a game <mark>which</mark> millions of people play</i>.</li>
        <li>Про роботу говоримо через <b>who / where / which</b>: <i>I work for a company <mark>where</mark> I'm responsible for visual effects. A team lead is a person <mark>who</mark> helps the team work as one.</i></li>
        <li><b>Most people</b> (без of), <b>it depends on</b>, <b>the peak</b> (без highest), <b>deep knowledge</b>, <b>artificial intelligence</b>.</li></ul>` },
    { title: "Перевірка домашнього: що зайве?", html: `
      <p>Relative words підібрані ідеально, але одна помилка повторилася в трьох реченнях — та сама, що в <s>a character who he jumps</s>.</p>
      <ol>
        <li>Minecraft is a world<mark>, where</mark> you can build anything <s>there</s>. <small>where = there, тому there зайве</small></li>
        <li>Dota 2 is a popular online game<mark>, whose</mark> biggest tournament is called The International. ✓ <small>whose для речей — чудово!</small></li>
        <li>1980 is the year<mark>, when</mark> Pac-Man came out <s>then</s>. <small>when = then</small></li>
        <li>Clash of Clans is a mobile game<mark>, <s>in</s> which</mark> millions of people play <s>it</s>. <small>which = it; in не потрібне, бо play a game</small></li>
        <li>Silent Hill is a horror series<mark>, whose</mark> music was written by Akira Yamaoka. ✓</li></ol>
      <p class="hint">Коли in which доречне: <i>This is a café <mark>in which</mark> I have lunch when I work from the office.</i> (= where). Коли просто which: <i>It's a game <mark>which / that</mark> millions of people play.</i></p>` },
    { title: "Speak out! Опиши гру без заборонених слів", html: `
      <table class="mtable"><tr><th>Гра</th><th>Як описали на уроці</th></tr>
        <tr><td>Angry Birds</td><td>It's a game <mark>in which</mark> you have animals <mark>that</mark> live on an island. You use these flying animals as a cannonball to hit their green enemies.</td></tr>
        <tr><td>The Witcher</td><td>It's a game <mark>in which</mark> your main character is a man <mark>who</mark> fights monsters and gets paid for it.</td></tr>
        <tr><td>Silent Hill</td><td>It's a scary game <mark>in which</mark> you need to fight very scary monsters while you are looking for your wife.</td></tr>
        <tr><td>Dota 2</td><td>My boyfriend is a guy <mark>who</mark> plays this game with his friends. It's a game <mark>that</mark> I dislike because people shout bad words.</td></tr>
        <tr><td>Candy Crush</td><td>It's a match-three game <mark>which</mark> my wife plays every day.</td></tr>
        <tr><td>Mahjong</td><td>It's a traditional board game <mark>in which</mark> you have many tiles with different symbols.</td></tr></table>
      <ul>
        <li><s>an animals that lives in the island</s> → animals that <mark>live on</mark> an island</li>
        <li><s>I don't play in this game</s> → I don't play this game <small>(play a game — без in)</small></li>
        <li><s>I don't have friends where… that I can play with</s> → I don't have friends <mark>who I can play with</mark></li>
        <li><s>Many time ago I watched a film</s> → <mark>A long time ago</mark> I watched a film</li>
        <li><s>fight with monsters</s> → fight monsters <small>(fight — без with, коли це вороги)</small></li>
        <li>рогатка = <b>a slingshot</b>; стріляти = <b>to fire / to shoot</b></li></ul>` },
    { title: "Starting point: розкажіть про свою роботу", html: `
      <p><b>Give a little speech about your job</b> (up to 2 minutes): Who do you work with? What do you do? Which tools do you use?</p>
      <p>Ось ваша розповідь з уроку — виправлена, щоб її можна було вивчити й повторювати:</p>
      <div class="pair"><div><div class="tag">Як прозвучало</div><small>I work in the company in which I responsible for visual effects… our last bigger company sell our company to newer bigger company… our department need to work with other studios… we use artificial intelligent… it's maybe main tool for us.</small></div>
      <div><div class="tag">Як краще</div>I work for a company <mark>where I'm responsible for</mark> visual effects. I have five colleagues, but I don't see them in person because we work from home. We have audio meetings every week. We create computer graphics for video production and ads for our games. Last year there was <mark>an acquisition</mark>: a bigger company <mark>bought</mark> our company, so now our department <mark>needs</mark> to help other studios advertise their games. We use <mark>artificial intelligence</mark> — it's <mark>the</mark> main tool for us.</div></div>
      <p><b>Про AI в рекламі</b>: <i>It <mark>depends on</mark> the people who watch the ad. I see problems in these ads, but <mark>most people</mark> don't notice them. I can't watch movies like a normal viewer — I analyse every scene with CGI.</i></p>
      <p><b>Про Marvel</b>: <i>Many people in the 3D community share <mark>a common opinion</mark>: the first Transformers and Iron Man were <mark>the peak</mark> of 3D graphics. Later studios had to make three or four films a year, so the quality went down.</i></p>
      <p><b>Про подругу з Канади</b>: <i>A friend of mine works in a Canadian studio, so I know what happens <mark>behind the scenes</mark>: how many people work on a project and how long it takes.</i></p>` },
    { title: "Reading and comparison: Lumio Studio", html: `
      <p>Lumio Studio is a small company in a big city. It makes video ads for mobile games. The ads appear inside other apps and on social media. People see an ad, tap it, and download the game from the App Store or Google Play.</p>
      <p>The studio has about forty employees. The <b>producer</b> talks to the <b>client</b> and plans the schedule. The client sends a <b>brief</b>. The brief explains the goal of the ad. The <b>art director</b> decides the visual style. Anna is the <b>team lead</b>. Her team has six people. She <b>gives tasks</b> to the team and <b>is responsible for</b> the quality. Max is a <b>VFX artist</b>. He makes particle effects for explosions and magic. He works in Unity and After Effects. A <b>QA tester</b> checks every ad on different phones. The UA manager launches the ads and studies the results.</p>
      <p>Every project has <b>a tight deadline</b>. Usually it is one or two weeks. Sometimes the client asks for changes at the last minute. Then everybody works harder. The studio has a small kitchen. The team drinks coffee there and discusses new ideas. Friday is demo day. The team shows the new ads and <b>gives feedback</b> then.</p>
      <p class="hint"><b>Порівняння з вашою компанією:</b> <i>We also have a VFX artist, but it's a different job. A VFX artist for mobile games works in Unity and makes real-time effects. I'm a VFX artist <mark>who</mark> makes effects for cinematics and ads, not for games. That's why HR people <mark>who</mark> write to me on LinkedIn often offer the wrong jobs.</i></p>
      <h3 style="margin-top:18px">Team lead чи project manager?</h3>
      <div class="pair">
        <div><div class="tag">Team lead</div>a technical specialist <mark>who has deep knowledge</mark> of the work. A team lead is like glue <mark>that helps</mark> everyone understand what to do and <mark>complete their tasks on time</mark>. If there are blockers, the team lead helps to solve them.</div>
        <div><div class="tag">Project manager</div>a person <mark>who plans the budget</mark>, makes estimates and controls the whole project, but doesn't get into the technical process.</div>
      </div>
      <p class="hint">Ваше «you don't have picture of all» → <i>you don't see <mark>the whole picture</mark></i>.</p>` },
    { title: "Слова з чату вчительки", html: `
      <table class="mtable"><tr><th>Вираз</th><th>Значення / коментар</th></tr>
        <tr><td><b>an acquisition</b></td><td>поглинання: велика компанія купує меншу</td></tr>
        <tr><td><b>a common opinion</b></td><td>спільна думка: <i>We have a common opinion that…</i></td></tr>
        <tr><td><b>behind the scenes / backstage</b></td><td>«за лаштунками», те, що зазвичай не показують</td></tr>
        <tr><td><b>AI = artificial intelligence</b></td><td>intelligence — іменник; intelligent — прикметник (an intelligent person)</td></tr>
        <tr><td><b>most people</b> <s>most of people</s></td><td>most people / most time / most money — без of</td></tr>
        <tr><td><b>the peak</b> / <b>the highest point</b> <s>the highest peak</s></td><td>peak — уже найвища точка</td></tr>
        <tr><td><b>it depends on</b> <s>depends of</s></td><td>залежить від</td></tr>
        <tr><td><b>an acquaintance</b> = a friend of mine, someone I know</td><td>знайомий; <i>One guy I know fixed my car last week.</i></td></tr>
        <tr><td><b>deep / shallow knowledge</b> <s>wide / narrow</s></td><td>глибокі / поверхові знання</td></tr>
        <tr><td><b>do / complete a task on time</b></td><td>виконати завдання вчасно</td></tr>
        <tr><td><b>fillings, crowns</b></td><td>пломби, коронки (а не «plombas»); <b>extract a wisdom tooth</b> — видалити зуб мудрості</td></tr>
        <tr><td><b>blockers</b></td><td>те, що зупиняє роботу (технічне слово, підходить для вашої сфери)</td></tr></table>` },
    { title: "Вимова: ch = /k/ і society", html: `
      <p>Зазвичай <b>ch</b> читаємо як «ч» (cherry, chair). Але в деяких словах — як <b>/k/</b>:</p>
      <div class="chips"><span class="chip">chemistry</span><span class="chip">character</span><span class="chip">tech</span><span class="chip">technical issues</span><span class="chip">mechanics</span></div>
      <p><b>society</b> /səˈsaɪəti/ — «сə-са́й-ə-ті», без звука «ш» і без «ц». Пам'ятайте мем «сосаєті» 🙂. Порівняйте: <b>social</b> /ˈsəʊʃl/ — тут «ш» є.</p>
      <p><b>acquaintance</b> /əˈkweɪntəns/ — ви вимовили з першої спроби ідеально!</p>` },
    { title: "Ваші помилки з уроку", html: `
      <table class="mtable"><tr><th>Ви сказали</th><th>Правильно</th><th>Чому</th></tr>
        <tr><td><s>I go to dentist today.</s></td><td>I'm going <mark>to the dentist</mark> today.</td><td>план на сьогодні; to the dentist</td></tr>
        <tr><td><s>In last week I have a problem with teeth.</s></td><td><mark>Last week I had</mark> a problem with my teeth.</td><td>last week без in; минулий час</td></tr>
        <tr><td><s>I have challenge.</s> · <s>I have idea.</s></td><td>I have <mark>a</mark> challenge. · I have <mark>an</mark> idea.</td><td>a / an перед іменником в однині</td></tr>
        <tr><td><s>I have very big experience.</s></td><td>I have <mark>a lot of</mark> experience.</td><td>experience (досвід) — незлічуване</td></tr>
        <tr><td><s>My mother also have bad teeth.</s> · <s>My wife play…</s> · <s>AliExpress have…</s></td><td>My mother <mark>has</mark> · My wife <mark>plays</mark> · AliExpress <mark>has</mark></td><td>he / she / it → дієслово з -s</td></tr>
        <tr><td><s>in which I responsible for</s></td><td>where <mark>I'm</mark> responsible for</td><td>responsible — прикметник, потрібне be</td></tr>
        <tr><td><s>a bigger company sell our company</s></td><td>a bigger company <mark>sold</mark> our company</td><td>минуле → sold</td></tr>
        <tr><td><s>a list of people who works</s> · <s>a person who have</s> · <s>glue that help</s></td><td>people who <mark>work</mark> · a person who <mark>has</mark> · glue that <mark>helps</mark></td><td>who / that бере форму від слова, яке замінює</td></tr>
        <tr><td><s>how much people work on a project</s></td><td>how <mark>many</mark> people</td><td>people — злічуване → many</td></tr>
        <tr><td><s>it's need more time for me</s></td><td><mark>I need</mark> more time for that.</td><td>need — дієслово, без it's</td></tr>
        <tr><td><s>No, it's all clearly.</s></td><td>It's all <mark>clear</mark>.</td><td>після be — прикметник, не прислівник</td></tr></table>` },
    { title: "Оригінальні матеріали", html: `<p class="source-note">Слайди з дошки вчительки на занятті 13 листопада.</p><details><summary>Показати слайди уроку</summary><div class="source-images">${[21, 22, 23].map((n, i) => `<a href="assets/lesson-source-${n}.webp" target="_blank" rel="noopener"><img loading="lazy" src="assets/lesson-source-${n}.webp" alt="Слайд уроку 13 листопада, ${i + 1}"></a>`).join("")}</div></details>` }
  ],
  quiz: JOBS_V1
});
