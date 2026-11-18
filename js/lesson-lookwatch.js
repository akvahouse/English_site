// Урок 13 на сайті (запис заняття 18.11.2026, «14 lesson»): look / watch / see, розбір тесту з relative clauses,
// з'єднуємо короткі речення як носії (Lumio Studio), розповідь про команду й робоче місце, слова з чату, помилки з уроку.
// Тест (версія 1) вставляється між маркерами; версії 2–5 лежать у variants.js (EXTRA.lookwatch).
const LOOKWATCH_V1 = /*V1_START*/[
  M("I've ___ this film. I know how it ends.", ["seen", "looked", "watched to", "look at"], 0,
    "I've seen this film — це факт і результат: я цей фільм бачив. Третя форма see — seen.",
    "Look — короткий погляд, і з ним потрібне at. Про фільм, який ви вже бачили, кажемо seen.",
    "Watch вживаємо без to: watch a film. «Watch to» — помилка з уроку.",
    "Look at — короткий погляд, і після I've потрібна третя форма дієслова, а не look."),
  M("Hey, ___! There's a tornado!", ["look", "watch", "see", "looking"], 0,
    "Look без at — щоб привернути увагу: Hey, look! (= глянь!).",
    "Watch — довгий процес (дивитися фільм, стежити), а тут миттєвий заклик подивитися.",
    "See — здатність бачити або факт; щоб покликати когось подивитися, кажемо look.",
    "Looking — форма з -ing, вона не може бути закликом (наказом)."),
  M("Every evening my son ___ cartoons.", ["watches", "looks", "sees", "looks at"], 0,
    "Мультики, фільми, серіали — це довгий процес, тому watch: my son watches cartoons.",
    "Look без at не поєднується з cartoons, і це не короткий погляд, а перегляд.",
    "See — бачити (факт, здатність), а дивитися мультики щовечора — це watch.",
    "Look at — короткий погляд на щось, а мультики дивляться довго: watch."),
  M("Do you ___ your mistake? — No, I think everything's correct.", ["see", "watch", "look", "look to"], 0,
    "See — помітити, усвідомити результат: Do you see your mistake? (Ви бачите помилку?)",
    "Watch — довго спостерігати за процесом, а помилку треба просто помітити.",
    "Look без at не має додатка: look your mistake — неправильно.",
    "Look to — помилка: правильно look at, а тут за змістом потрібне see."),
  M("Our studio has a client ___ ads are very popular.", ["whose", "which", "who", "who's"], 0,
    "Ads належать клієнту — це належність, тому whose, а після нього іменник: whose ads.",
    "Which замінює річ, а не показує, чиє щось. Тут питання «чия реклама?» → whose.",
    "Who не показує належність; перед іменником ads потрібне whose.",
    "Who's = who is: «who is ads» не має змісту."),
  M("Яке речення правильне?", ["Olena, who works in the marketing team, wrote the brief.", "Olena works in the marketing team, whose wrote the brief.", "Olena works in the marketing team that wrote the brief."], 0,
    "Вставка про Олену стоїть одразу після її імені, у комах: Olena, who works in the marketing team, wrote the brief.",
    "Whose означає належність (чий?), а писати бриф — не належність. Саме цю помилку ви зробили в тесті.",
    "Граматично можливо, але тоді виходить, що бриф написала вся команда, а не Олена."),
  F("It depends ___ the day.", "on",
    "Стале сполучення: depend on (залежати від). Ця помилка повторилася вже на другому уроці!",
    "Після depend завжди on: it depends on the day."),
  F("My table ___ next to the window.", ["stands"],
    "Про речі, які стоять, кажемо stand: My table stands next to the window. Stay — залишатися (stay in a hotel).",
    "Тут потрібне stand з -s (table = it): stands."),
  F("I'd like a third monitor, but there's no ___ on my table.", ["room", "space"],
    "Room (без артикля) = вільне місце: there's no room on my table. Space теж підходить.",
    "Вільне місце — room або space (не place)."),
  O("Sunday is the day when I cook for my family",
    "When = then, тому в кінці нічого не додаємо. І always не потрібне: Present Simple уже означає звичку."),
  MA("З'єднайте слово з перекладом:",
    [["🌴", "a palm tree", "пальма"], ["🗄️", "a chest of drawers", "комод, тумба з шухлядами"], ["🚪", "an emergency exit", "запасний вихід"], ["🔌", "an electricity outage", "відключення світла"], ["🌍", "an earthquake", "землетрус"], ["✋", "a palm", "долоня"]],
    "Palm tree — пальма, а просто palm — долоня. Chest of drawers — комод, emergency exit — запасний вихід, electricity outage — відключення, earthquake — землетрус."),
  SO("Look, watch чи see?", ["look", "watch", "see"],
    [["___ at the board", 0],
     ["___ after a child", 0],
     ["___ a tutorial", 1],
     ["___ your kids in the park", 1],
     ["I can ___ you well", 2],
     ["Do you ___ your mistake?", 2]],
    "Look — короткий погляд (look at, look after). Watch — довгий процес (tutorial, наглядати за дітьми). See — здатність бачити або помітити результат."),
  G("З'єднайте речення як носії (одне слово зайве):",
    ["who", "which", "where", "whose", "when"],
    ["Max is a VFX artist ___ makes particle effects.",
     "The client sends a brief ___ explains the goal of the ad.",
     "The studio has a small kitchen ___ the team drinks coffee.",
     "Anna is the team lead ___ team has six people."],
    ["who", "which", "where", "whose"],
    "Who — людина, which — річ, where — місце (без there в кінці), whose — належність (чия команда?). When зайве: у цих реченнях немає часу."),
  HP("Look out of the window!",
    [["🧑 🪟 👀", "дивиться у вікно"], ["🧑 📺 🍿", "дивиться фільм"], ["🧑 👶 🧸", "доглядає дитину"]], 0,
    "Look out of the window — визирнути, подивитися у вікно.",
    "Це watch a movie: довгий перегляд, а в реченні — look out of the window.",
    "Це look after a child (доглядати), а в реченні — вікно."),
  SG("🐕 🔊 🪟", "Our dog barks ___ loud noises.", ["at", "to", "on"], 0,
    "Гавкати на щось — bark at: Our dog barks at loud noises.",
    "Bark to — калька з української «гавкає до»; правильно bark at.",
    "Bark on не вживається: потрібне at."),
  VS("🧑‍💻 🖥️ 🖥️ 🪑",
    ["I have a table on which I have two monitors.", "I have a table in which I have two monitors.", "I have table on which I have two monitors."], 0,
    "Монітори стоять НА столі, тому on which. І a table — з артиклем.",
    "In which — «всередині столу». Монітори стоять на столі → on which.",
    "Бракує a: I have a table.")
]/*V1_END*/;

LESSONS.push({
  id: "lookwatch",
  title: "Look, Watch, See",
  short: "Look / watch / see",
  subtitle: "Заняття 18 листопада · look / watch / see, relative clauses у тексті, робоче місце",
  summary: "Різниця look / watch / see, розбір тесту з relative clauses, з'єднуємо короткі речення як носії, розповідаємо про робоче місце й команду, слова з уроку.",
  sections: [
    { title: "Коротко про головне", html: `
      <ul>
        <li><b>Look</b> — короткий погляд або «глянь!» (<i>Look at me. Hey, look!</i>). <b>Watch</b> — довгий процес (<i>watch a movie, a tutorial, your kids</i>). <b>See</b> — здатність бачити, факт або результат (<i>I can see you. I saw a tornado. I've seen this film. Do you see your mistake?</i>).</li>
        <li>Relative clause ставимо одразу після слова, яке пояснюємо, навіть усередині речення: <i>Olena<mark>, who works in the marketing team,</mark> wrote the brief.</i></li>
        <li><b>Whose</b> = належність (чий?), і для людей, і для речей: <i>a project <mark>whose</mark> deadline is next week</i>.</li>
        <li>Носії з'єднують короткі речення словами <b>who / which / where / when / whose</b> і не повторюють <s>there</s>, <s>then</s>, <s>it</s>.</li>
        <li><b>The electricity is off</b> / <b>an electricity outage</b>; <b>I'm afraid of…</b> (afraid — прикметник, потрібне be); <b>stand</b> (стояти, про речі) vs <b>stay</b> (залишатися).</li></ul>` },
    { title: "Look, watch чи see?", html: `
      <table class="mtable"><tr><th></th><th>Коли</th><th>Приклади з уроку</th></tr>
        <tr><td><b>look at</b></td><td>короткий погляд; з предметом — завжди <mark>at</mark></td><td><i>Look at me. Look at the board. I looked at the palm tree. Look at your mistake — let's analyse it.</i></td></tr>
        <tr><td><b>look!</b></td><td>привернути увагу</td><td><i>Hey, look, there's a tornado!</i></td></tr>
        <tr><td><b>look after / look out of</b></td><td>фразові дієслова</td><td><i>look after a child</i> — доглядати; <i>look through the window / look out of the window</i> — дивитися у вікно. <s>watch to the window</s>, <s>look to</s></td></tr>
        <tr><td><b>watch</b></td><td>довгий процес, стежити</td><td><i>watch a movie / a cartoon / a series / a tutorial / a DIY video; watch your kids; We were watching the tornado destroy the city.</i></td></tr>
        <tr><td><b>see</b></td><td>здатність бачити, факт, результат</td><td><i>I can see you well. I saw a tornado. I've seen this movie</i> (= факт: я його бачив). <i>Do you see your mistake? — No, I think everything's correct.</i></td></tr></table>
      <p><b>Пташка:</b> птаха можна <i>see</i> (помітити), <i>look at</i> (глянути) або <i>watch</i> (якщо довго спостерігаєте).</p>
      <div class="pair"><div><div class="tag">Як прозвучало</div><s>Watch from my window and see the strikes.</s></div>
      <div><div class="tag">Як правильно</div><mark>Look out of my window</mark> (look from my window) and <mark>see</mark> the strikes.</div></div>
      <p class="hint"><b>Фразові дієслова:</b> маленьке слово змінює значення. <i>go into</i> — заходити, <i>go out</i> — виходити, <i>go on</i> — продовжувати, <i>go off</i> — вибухати / вимикатися.</p>` },
    { title: "Розбір тесту: Relative Clauses (завдання 4 — з'єднати два речення)", html: `
      <ol>
        <li>Sunday is the day <mark>when</mark> I cook for my family. ✓ <small>без always — Present Simple уже означає звичку; без then в кінці</small></li>
        <li>Olena<mark>, who works in the marketing team,</mark> wrote the brief. / Olena<mark>, who wrote the brief,</mark> works in the marketing team. ✓<br><s>Olena works in the marketing team, whose wrote the brief.</s> <small>whose = належність, а писати бриф ≠ належати. «…the team that wrote the brief» граматично можливо, але тоді бриф написала вся команда, а не Олена.</small></li>
        <li>We have a project <mark>whose</mark> deadline is next week. ✓ <small>дедлайн належить проєкту → whose, і для речей теж. Складніший варіант: …a project <mark>the deadline of which</mark> is next week.</small></li>
        <li>I bought a new laptop <mark>which / that</mark> I use for work. ✓</li>
        <li>Geralt of Rivia<mark>, who travels around the world,</mark> is a monster hunter. ✓ <small>або …a monster hunter who travels around the world</small></li>
        <li>The meeting room <mark>where we have our weekly meetings</mark> is on the second floor. ✓ <small>друге речення вставляємо всередину першого</small></li>
        <li>Mario<mark>, whose brother is Luigi,</mark> is a famous character. ✓ <s>a character that brother is called Luigi</s> <small>питання «чий брат?» = whose brother</small></li>
        <li>…the café <mark>where</mark> we have lunch on Fridays. ✓ <small>без there</small></li></ol>
      <p class="hint">Тести — легко, а скласти речення з нуля — важче. Саме тому в тесті цього уроку є завдання на побудову речень.</p>` },
    { title: "Як говорять носії: з'єднуємо короткі речення", html: `
      <p>Носії не повторюють слово двічі (<i>a brief… The brief…</i>) і рідше ставлять крапку — з двох коротких речень вони роблять одне. Короткі речення підряд звучать так, ніби текст написали для 5-річної дитини.</p>
      <table class="mtable"><tr><th>Було (як для 5-річної дитини)</th><th>Стало</th></tr>
        <tr><td>Max is a VFX artist. He makes particle effects for explosions and magic.</td><td>Max is a VFX artist <mark>who</mark> makes particle effects for explosions and magic.</td></tr>
        <tr><td>The client sends a brief. The brief explains the goal of the ad.</td><td>The client sends a brief <mark>which</mark> explains the goal of the ad.</td></tr>
        <tr><td>The studio has a small kitchen. The team drinks coffee there.</td><td>The studio has a small kitchen <mark>where</mark> the team drinks coffee. <small>без there!</small></td></tr>
        <tr><td>Anna is the team lead. Her team has six people.</td><td>Anna is the team lead <mark>whose</mark> team has six people.</td></tr>
        <tr><td>Friday is a demo day. The team shows the new ads then.</td><td>Friday is a demo day <mark>when</mark> the team shows the new ads.</td></tr></table>
      <p class="hint">На минулому уроці ви повторювали there / then у кінці речення, а тепер — ні. Чудовий прогрес!</p>` },
    { title: "Speak out: моя команда і моє робоче місце", html: `
      <div class="pair"><div><div class="tag">Як прозвучало</div><small>last two years we work on the same project a couple of teams works… six member with Vova…</small></div>
      <div><div class="tag">Як сказати краще</div>We don't have a demo day, but we have <mark>a weekly review</mark> of every project's progress. It's a sync between three teams, because <mark>for the last two years</mark> a couple of teams <mark>have worked</mark> on the same project. We see how each team is doing with its shots, where we have problems and when we need to ask another team for help. Vova is our team lead, <mark>whose</mark> team has six people, <mark>including him</mark>.</div></div>
      <div class="pair"><div><div class="tag">Як прозвучало</div><small>I have table in which I have two monitors… I don't know how to stay or staying near my table… it's my workplace for last five years… if honest… I want to third monitor, but I don't have place for that.</small></div>
      <div><div class="tag">Як сказати краще</div>I have a corner in our only room. There is a table <mark>on which</mark> I have two monitors: a 27-inch one and a 32-inch one. Next to it there is <mark>a chest of drawers</mark> where I keep my computer. It <mark>stands</mark> near my main table. It <mark>has been</mark> my workplace <mark>for the last five years</mark>. A VFX artist needs more than one monitor because he works with different sources of information. <mark>To be honest</mark>, I use my second monitor for watching YouTube. I'd like a third monitor, but <mark>there's no room</mark> on my table.</div></div>
      <p class="hint">Те, що кріпить монітор до столу й тримає його в повітрі, — <b>a monitor arm</b> (кронштейн для монітора).</p>
      <div class="pair"><div><div class="tag">Як прозвучало</div><small>now we need to less usage of energy, I even off my one monitor… this panel have information… it depends from day… yesterday we don't have lights three hours.</small></div>
      <div><div class="tag">Як сказати краще</div>Now we need to <mark>use less energy</mark>, so I even <mark>turn off</mark> one monitor. When we have <mark>an electricity outage</mark>, I work from a power station (EcoFlow). I coded a panel that compares my EcoFlow data with the outage schedule. It <mark>depends on</mark> the day: yesterday we <mark>didn't have</mark> electricity <mark>for</mark> three hours.</div></div>
      <p><b>Фрази, які варто вивчити:</b> <i>to be honest; there's no room for…; it depends on…; for the last five years; including him.</i></p>` },
    { title: "Слова з уроку (з чату)", html: `
      <table class="mtable"><tr><th>Вираз</th><th>Значення</th><th>Приклад</th></tr>
        <tr><td><b>a palm tree</b> / <b>a palm</b></td><td>пальма / долоня</td><td><i>I looked at the palm tree.</i></td></tr>
        <tr><td><b>look through / out of the window</b></td><td>дивитися у вікно</td><td><i>I look out of the window and see the city.</i></td></tr>
        <tr><td><b>look after</b></td><td>доглядати</td><td><i>Can you look after my child?</i></td></tr>
        <tr><td><b>watch a movie, a cartoon, a series</b></td><td>дивитися (довго, процес)</td><td><i>We watch a series every evening.</i></td></tr>
        <tr><td><b>watch your kids / your dog</b></td><td>наглядати, стежити</td><td><i>Watch your dog in the park.</i></td></tr>
        <tr><td><b>a chest of drawers</b></td><td>комод, тумба з шухлядами</td><td><i>I keep my computer in a chest of drawers.</i></td></tr>
        <tr><td><b>an emergency exit / a fire escape</b></td><td>запасний вихід / пожежна драбина, балкон</td><td><i>Where is the emergency exit?</i></td></tr>
        <tr><td><b>be afraid of</b> <s>he don't afraid</s></td><td>боятися; afraid — прикметник, тому be</td><td><i>I am afraid of explosions — my dog isn't afraid of them.</i></td></tr>
        <tr><td><b>stand</b> / <b>stay</b></td><td>стояти (про речі) / залишатися</td><td><i>My table stands next to the window. You can stay in a hotel overnight.</i></td></tr>
        <tr><td><b>a rocket</b> / <b>a missile</b></td><td>ракета (космос, spaceship) / військова ракета</td><td><i>a space rocket; a ballistic / cruise missile</i></td></tr>
        <tr><td><b>off · turn on / turn off · switch on / switch off</b></td><td>вимкнено · вмикати / вимикати</td><td><i>The electricity is off. Switch off the light.</i></td></tr>
        <tr><td><b>an electricity outage</b> / <b>a blackout</b></td><td>відключення / довге, масштабне відключення</td><td><i>Yesterday we had an electricity outage.</i></td></tr>
        <tr><td><b>an earthquake, the epicentre, the magnitude</b></td><td>землетрус, епіцентр, магнітуда (small talk на початку уроку)</td><td><i>The epicentre of the earthquake was far from us.</i></td></tr></table>` },
    { title: "Ваші помилки з уроку", html: `
      <table class="mtable"><tr><th>Як прозвучало</th><th>Як правильно</th><th>Чому</th></tr>
        <tr><td><s>I wake up at 4 o'clock</s> (про сьогодні)</td><td>I <mark>woke up</mark> at four o'clock.</td><td>це вже минуло → Past Simple</td></tr>
        <tr><td><s>our dog is feel / is feeling that</s></td><td>our dog <mark>feels</mark> it</td><td>feel як відчуття стану — Present Simple, без is</td></tr>
        <tr><td><s>my mother also wake up… she also feeling this pushes</s></td><td>my mother also <mark>woke up</mark>… she also <mark>felt the tremors</mark></td><td>Past Simple; поштовхи = tremors</td></tr>
        <tr><td><s>He's only barking to explosions.</s> · <s>he run to the window and bark to the explosions</s></td><td>He only <mark>barks at</mark> explosions. · he <mark>runs</mark> to the window and <mark>barks at</mark> the explosions</td><td>bark at sth; звичка → Present Simple з -s</td></tr>
        <tr><td><s>he don't afraid</s></td><td>he <mark>isn't</mark> afraid</td><td>afraid — прикметник, потрібне be (ви самі виправились — супер)</td></tr>
        <tr><td><s>We also have experience 10 years ago.</s></td><td>We also <mark>had</mark> this experience about ten years ago.</td><td>минуле → had</td></tr>
        <tr><td><s>because it's near distance between Romania when we have epicenter</s></td><td>because it's closer to Romania, <mark>where</mark> the epicentre was</td><td>where — для місця</td></tr>
        <tr><td><s>palma</s></td><td><mark>a palm tree</mark></td><td>palm — долоня</td></tr>
        <tr><td><s>I watching to this plant and she moving</s></td><td>I <mark>was looking at</mark> the plant and <mark>it was</mark> moving</td><td>look at; рослина = it; Past Continuous потребує was</td></tr>
        <tr><td><s>watch to the window</s></td><td><mark>look out of / through</mark> the window</td><td>у вікно — look, без to</td></tr>
        <tr><td><s>I master in tests, not in reproducing</s></td><td>I'm <mark>good at</mark> tests, not at making my own sentences</td><td>be good at</td></tr>
        <tr><td><s>a famous character that brother is called Luigi</s></td><td>a famous character <mark>whose</mark> brother is called Luigi</td><td>чий брат? → whose</td></tr>
        <tr><td><s>I have no experience to read book on English</s></td><td>I have no experience <mark>of reading</mark> books <mark>in</mark> English</td><td>experience of + -ing; in English</td></tr>
        <tr><td><s>that explain the goal</s></td><td>that <mark>explains</mark> the goal</td><td>that = the brief (it) → -s</td></tr>
        <tr><td><s>last two years we work on the same project a couple of teams works</s></td><td><mark>for the last two years</mark> a couple of teams <mark>have worked</mark> on the same project</td><td>Present Perfect з for the last…</td></tr>
        <tr><td><s>six member with Vova</s></td><td>six <mark>members, including</mark> Vova</td><td>множина; including — включно з</td></tr>
        <tr><td><s>I have table in which I have two monitors</s></td><td>I have <mark>a</mark> table <mark>on which</mark> I have two monitors</td><td>монітори стоять НА столі → on which</td></tr>
        <tr><td><s>I don't know how to stay or staying near my table</s></td><td>It <mark>stands</mark> near my table.</td><td>stand = стояти (про речі)</td></tr>
        <tr><td><s>it's my workplace for last five years</s></td><td>It <mark>has been</mark> my workplace <mark>for the last</mark> five years.</td><td>Present Perfect з for the last…</td></tr>
        <tr><td><s>if honest</s></td><td><mark>to be honest</mark></td><td>стала фраза</td></tr>
        <tr><td><s>I want to third monitor, but I don't have place for that</s></td><td>I'd like a third monitor, but <mark>there's no room</mark> for it</td><td>room = вільне місце</td></tr>
        <tr><td><s>before the war is starting</s></td><td>before the war <mark>started</mark></td><td>минуле → Past Simple</td></tr>
        <tr><td><s>now we need to less usage of energy, I even off my one monitor</s></td><td>now we need to <mark>use less energy</mark>, so I even <mark>turn off</mark> one monitor</td><td>off — не дієслово: turn off</td></tr>
        <tr><td><s>this panel have information</s></td><td>this panel <mark>has</mark> information</td><td>panel = it → has</td></tr>
        <tr><td><s>it depends from day</s></td><td>it <mark>depends on</mark> the day</td><td>та сама помилка, що на минулому уроці! depend on</td></tr>
        <tr><td><s>yesterday we don't have lights three hours</s></td><td>yesterday we <mark>didn't have</mark> electricity <mark>for</mark> three hours</td><td>минуле → didn't have; for + період</td></tr>
        <tr><td><s>we want that he moves from the window</s></td><td>we want <mark>him to move</mark> away from the window</td><td>want + sb + to do</td></tr>
        <tr><td><s>I about rockets</s></td><td><mark>I mean</mark> missiles</td><td>I mean — я маю на увазі; військова ракета — missile</td></tr></table>` },
    { title: "Оригінальні матеріали", html: `<p class="source-note">Слайди з дошки вчительки на занятті 18 листопада: «What do relative clauses improve?» (з'єднуємо короткі речення) і текст Lumio Studio із завданнями.</p><details><summary>Показати слайди уроку</summary><div class="source-images">${[[24, "What do relative clauses improve?"], [25, "текст Lumio Studio"]].map(([n, cap]) => `<a href="assets/lesson-source-${n}.webp" target="_blank" rel="noopener"><img loading="lazy" src="assets/lesson-source-${n}.webp" alt="Слайд уроку 18 листопада: ${cap}"></a>`).join("")}</div></details>` }
  ],
  quiz: LOOKWATCH_V1
});
