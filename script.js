(function () {
  document.documentElement.classList.add("js");

  const config = window.siteConfig || {};
  const links = {
    telegram: config.telegramChannel || "https://t.me/Alevtina_designer_Pankova",
    "vk-community": config.vkCommunity || "https://vk.ru/alevtina_kuhni",
    "vk-personal": config.vkPersonal || "https://vk.ru/dizaineralevtina"
  };

  document.querySelectorAll("[data-link]").forEach((element) => {
    const key = element.dataset.link;
    if (links[key]) {
      element.setAttribute("href", links[key]);
    }
  });

  const topics = {
    kitchen: {
      title: "Если вы выбираете кухню",
      lead: "Здесь я помогаю смотреть на кухню не как на набор красивых фасадов, а как на место, где каждый день надо готовить, открывать, доставать и не раздражаться.",
      items: [
        "как не промахнуться с планировкой и рабочими зонами",
        "где фасады, материалы и ручки могут сыграть против вас",
        "что проверить до заказа, пока переделки еще не стоят денег",
        "как смотреть на визуализацию без восторга, который отключает здравый смысл"
      ]
    },
    ai: {
      title: "Если вам интересны нейросети",
      lead: "Я тестирую нейросети на практике, создаю изображения и показываю понятные способы применения ИИ в работе и жизни. Без заумной ерунды и скучной теории.",
      items: [
        "как создавать изображения и не тонуть в настройках",
        "как объяснять нейросети задачу обычными словами",
        "где ИИ помогает в работе, идеях и визуальном поиске",
        "какие эксперименты выглядят красиво, но требуют дизайнерской проверки"
      ]
    },
    all: {
      title: "Если вам нужно всё",
      lead: "Это нормальный сценарий. Мой канал как раз про стык кухонь, ремонта, визуализации, нейросетей и живого опыта дизайнера.",
      items: [
        "кухни, планировки, материалы и честные дизайнерские выводы",
        "нейросети для картинок, идей, настроения и рабочих задач",
        "личные находки, визуальные эксперименты и немного самоиронии",
        "сложное простыми словами, без позы «сейчас я вас научу жить»"
      ]
    }
  };

  const topicPanel = document.getElementById("topic-panel");
  const topicButtons = document.querySelectorAll("[data-topic]");

  function renderTopic(topicKey) {
    const topic = topics[topicKey] || topics.kitchen;
    topicPanel.innerHTML = `
      <h3>${topic.title}</h3>
      <p>${topic.lead}</p>
      <ul>
        ${topic.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;
  }

  topicButtons.forEach((button) => {
    button.addEventListener("click", () => {
      topicButtons.forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-pressed", "false");
      });

      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");
      renderTopic(button.dataset.topic);
    });
  });

  renderTopic("kitchen");

  const quizAnswers = {
    choose: {
      title: "Начните с планировки",
      text: "Сначала не цвет фасада, а сценарии жизни: где готовите, что храните, кто открывает ящики и почему проход в 5 сантиметров «ну почти нормально» потом раздражает каждый день."
    },
    mistake: {
      title: "Вам нужен взгляд дизайнера до оплаты",
      text: "Идите в темы про дорогие ошибки. Там как раз про то, что лучше заметить на проекте, а не после фразы «ой, а это уже изготовили»."
    },
    repair: {
      title: "Сузим хаос до понятных решений",
      text: "Когда глаза разбегаются, помогает не еще 200 картинок, а спокойная логика: планировка, материалы, свет, хранение, потом красота. Именно в таком порядке."
    },
    "ai-start": {
      title: "Нейросети можно начать без стыда",
      text: "Ничего страшного, если пока непонятно. В канале ИИ показывается через практику: что написать, что получится и где результат надо проверить головой."
    },
    images: {
      title: "Вам в визуальные эксперименты",
      text: "Смотрите темы про изображения и нейросети. Там можно поймать настроение, собрать идею и увидеть, что реально получается на практике."
    },
    experiments: {
      title: "Оставайтесь из любопытства",
      text: "Если вы любите смотреть, как идея превращается в картинку, а картинка потом проходит проверку реальностью, канал вам подойдет."
    }
  };

  const result = document.getElementById("quiz-result");
  const quizButtons = document.querySelectorAll("[data-answer]");

  quizButtons.forEach((button) => {
    button.addEventListener("click", () => {
      quizButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      const answer = quizAnswers[button.dataset.answer];

      result.innerHTML = `
        <strong>${answer.title}</strong>
        <span>${answer.text}</span>
      `;
    });
  });

  const reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((element) => observer.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add("is-visible"));
  }
})();
