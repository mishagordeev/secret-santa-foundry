Hooks.once("ready", async () => {
    console.log("Macro Compendium Module | Готово!");

    const pack = game.packs.get("secret-santa-foundry.secret-santa-macros");
    if (!pack) {
        console.error("Macro Compendium Module | Компедиум не найден.");
        return;
    }

    const alreadyCreated = await pack.getDocuments();
    if (alreadyCreated.length > 0) {
        console.log("Macro Compendium Module | Макросы уже добавлены.");
        return;
    }

    const macros = [
        {
            name: "Send Anonymous Chat",
            type: "script",
            command: `
let message = "Ваше сообщение";
ChatMessage.create({
    content: message,
    speaker: { alias: "Gamemaster" },
    whisper: ChatMessage.getWhisperRecipients("GM")
});
            `,
            img: "icons/svg/dice-target.svg",
            permission: { default: 2 }
        }
    ];

    await pack.createDocuments(macros);
    console.log("Macro Compendium Module | Макросы успешно добавлены.");
});