Hooks.once('init', async function() {
    const macroCompendium = game.packs.get('secret-santa-foundry.secret-santa-macros');  // Укажите правильный путь к вашему компедиуму
    console.log("Module loaded! Добавляем макросы...");
  
    if (!macroCompendium) {
        console.error('Не удалось найти компедиум для макросов.');
        return;
      }
    // Данные для макроса
    const macrosData = [
      {
        name: "Test Macro",
        type: "script",
        command: `game.chatMessage({content: 'Hello, world!'})`,
        flags: { core: { "exported": true } }
      },
      {
        name: "Another Macro",
        type: "script",
        command: `game.chatMessage({content: 'This is another macro!'})`,
        flags: { core: { "exported": true } }
      }
    ];



    // Импортируем макросы в компедиум
    await macroCompendium.importDocuments(macrosData);
});
  