Hooks.once('ready', async function () {
    // Получаем компедиум
    const pack = game.packs.get('secret-santa-foundry.secret-santa-macros');
    if (!pack) {
      console.error('Не удалось найти компедиум "secret-santa-macros".');
      return;
    }
  
    // Проверяем, есть ли уже данные в компедиуме
    const existingMacros = await pack.getDocuments();
    if (existingMacros.length > 0) {
      console.log('Компедиум уже содержит данные, добавление пропущено.');
      return;
    }
  
    // Данные макросов
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
  
    // Импортируем данные в компедиум
    await pack.importDocuments(macrosData);
    console.log('Макросы успешно добавлены в компедиум.');
  });
  