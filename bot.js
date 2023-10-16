import { Composer, InlineKeyboard } from "grammy";

const composer = new Composer();

const mainInlineKeyboard = new InlineKeyboard().text("Замовити роботу", "buy");

const typeInlineKeyboard = new InlineKeyboard()
  .text("Курсові", "course")
  .row()
  .text("Дипломні", "diploma")
  .row()
  .text("Реферати", "referat")
  .row()
  .text("Статті", "article")
  .row()
  .text("Доповіді", "report")
  .row()
  .text("Презентації", "presentation")
  .row()
  .text("Назад", "back");

const backInlineKeyboard = new InlineKeyboard().text(
  "Повернутися назад",
  "back"
);

// Handle the /start command.
composer.command("start", (ctx) =>
  ctx.reply(
    `Вітаю у Foxy Student 🦊
Це сервіс допомоги студентам у ці тяжькі часи. 
Ми робимо:
Курсові
Дипломні
Реферати
Статті
Доповіді 
Презентації
Ціна залежить від багатьох факторів, а саме розмір роботи, терміни та обсяги.
Але ми точно відповідаємо вимогам освіти і саме ваших викладачів. 
Доводимо до здачі роботи. 
Тож успіху вам у навчанні!🧑‍🎓😉`,
    { reply_markup: mainInlineKeyboard }
  )
);

composer.callbackQuery("buy", async (ctx) => {
  await ctx.answerCallbackQuery({ text: "Завантажую види робіт..." });

  await ctx.reply("Виберіть тип роботи", { reply_markup: typeInlineKeyboard });
});

composer.callbackQuery("course", async (ctx) => {
  await ctx.answerCallbackQuery({ text: "Завантажую..." });

  await ctx.replyWithPhoto(
    "https://cdn.midjourney.com/662bf177-9eaf-4fe2-b107-1e9915425ee4/0_1.webp",
    {
      caption: "Курсова робота",
    }
  );

  await ctx.reply(
    `Мені потрібно дізнатися вашу спеціальність, тему роботи і терміни виконання роботи в одне речення`,
    { reply_markup: backInlineKeyboard }
  );
});

// handle the callback query from the inline keyboard that will answer with a photo and then listen to user messages and answer with a text message
composer.callbackQuery("diploma", async (ctx) => {
  await ctx.answerCallbackQuery({ text: "Завантажую..." });

  await ctx.replyWithPhoto(
    "https://cdn.midjourney.com/662bf177-9eaf-4fe2-b107-1e9915425ee4/0_1.webp",
    {
      caption: "Дипломна робота",
    }
  );

  await ctx.reply(
    `Мені потрібно дізнатися вашу спеціальність, тему роботи і терміни виконання роботи в одне речення`,
    { reply_markup: backInlineKeyboard }
  );
});

composer.callbackQuery("referat", async (ctx) => {
  await ctx.answerCallbackQuery({ text: "Завантажую..." });

  await ctx.replyWithPhoto(
    "https://cdn.midjourney.com/662bf177-9eaf-4fe2-b107-1e9915425ee4/0_1.webp",
    { caption: "Реферат" }
  );

  await ctx.reply(
    `Мені потрібно дізнатися вашу спеціальність, тему роботи і терміни виконання роботи в одне речення`,
    { reply_markup: backInlineKeyboard }
  );
});

composer.callbackQuery("article", async (ctx) => {
  await ctx.answerCallbackQuery({ text: "Завантажую..." });

  await ctx.replyWithPhoto(
    "https://cdn.midjourney.com/662bf177-9eaf-4fe2-b107-1e9915425ee4/0_1.webp",
    { caption: "Стаття" }
  );

  await ctx.reply(
    `Мені потрібно дізнатися вашу спеціальність, тему роботи і терміни виконання роботи в одне речення`,
    { reply_markup: backInlineKeyboard }
  );
});

composer.callbackQuery("report", async (ctx) => {
  await ctx.answerCallbackQuery({ text: "Завантажую..." });

  await ctx.replyWithPhoto(
    "https://cdn.midjourney.com/662bf177-9eaf-4fe2-b107-1e9915425ee4/0_1.webp",
    { caption: "Доповідь" }
  );

  await ctx.reply(
    `Мені потрібно дізнатися вашу спеціальність, тему роботи і терміни виконання роботи в одне речення`,
    { reply_markup: backInlineKeyboard }
  );
});

composer.callbackQuery("presentation", async (ctx) => {
  await ctx.answerCallbackQuery({ text: "Завантажую..." });

  await ctx.replyWithPhoto(
    "https://cdn.midjourney.com/662bf177-9eaf-4fe2-b107-1e9915425ee4/0_1.webp",
    { caption: "Презентація" }
  );

  await ctx.reply(
    `Мені потрібно дізнатися вашу спеціальність, тему роботи і терміни виконання роботи в одне речення`,
    { reply_markup: backInlineKeyboard }
  );
});

// handle the callback query from the inline keyboard that will answer with a photo and then listen to user messages and answer with a text message
composer.hears(/.+/, async (ctx) => {
  await ctx.reply("Дякую за замовлення! Ми з вами зв'яжемось найближчим часом");
});

// Handle the /help command.
composer.command("help", (ctx) => ctx.reply("Help message"));

composer.callbackQuery("back", async (ctx) => {
  await ctx.answerCallbackQuery({ text: "Повертаюсь назад..." });

  await ctx.reply(
    `Вітаю у Foxy Student 🦊
  Це сервіс допомоги студентам у ці тяжькі часи. 
  Ми робимо:
  Курсові
  Дипломні
  Реферати
  Статті
  Доповіді 
  Презентації
  Ціна залежить від багатьох факторів, а саме розмір роботи, терміни та обсяги.
  Але ми точно відповідаємо вимогам освіти і саме ваших викладачів. 
  Доводимо до здачі роботи. 
  Тож успіху вам у навчанні!🧑‍🎓😉`,
    { reply_markup: mainInlineKeyboard }
  );
});
// Handle other messages.
composer.on("message", (ctx) => ctx.reply("Got another message!"));

export { composer };
