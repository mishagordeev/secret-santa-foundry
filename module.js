Hooks.once('ready', async function () {
    const pack = game.packs.get('secret-santa-foundry.secret-santa-macros');
    
    if (!pack) {
      console.error('Компедиум не найден.');
      return;
    }
  
    console.log('Компедиум найден:', pack);
  
    // Загружаем документы из компедиума
    const documents = await pack.getDocuments();
    console.log('Существующие документы:', documents);
  
    // Добавляем новые макросы в компедиум
    const macrosData = [
      {
        name: 'Test Macro',
        type: 'script',
        command: `console.log('Hello, Secret Santa!');`,
        flags: { core: { exported: true } }
      },
      {
        name: 'Another Macro',
        type: 'script',
        command: `game.chatMessage({content: 'This is another test macro!'});`,
        flags: { core: { exported: true } }
      }
    ];
  
    // Создаём новые документы и добавляем их в компедиум
    for (const macroData of macrosData) {
      const macro = await Macro.create(macroData, { pack: pack.collection });
      console.log('Макрос добавлен:', macro);
    }
  });
  