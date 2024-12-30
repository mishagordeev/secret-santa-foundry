Hooks.on('init', async function() {
    console.log("Module loaded! Добавляем макросы...");
  
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
  
    const macroCompendium = game.packs.get('secret-santa-foundry.secret-santa-macros');   
    await macroCompendium.importDocuments(macrosData);
  });
  