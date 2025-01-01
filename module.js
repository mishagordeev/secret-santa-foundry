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
        img: 'icons/svg/dice-target.svg',
        flags: { core: { exported: true } }
      },
      {
        name: 'Показать подарки',
        type: 'script',
        command: 
        `
        let gifts = [];

        game.users.forEach(user => {
            let data = user.getFlag("world", "savedGiftData");
            if (data) {
              gifts.push(data);
            }
        });

        for (let i = gifts.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [gifts[i], gifts[j]] = [gifts[j], gifts[i]];
        }

        gifts.forEach(element => {
          ChatMessage.create({
              content: element,
              speaker: { alias: "Gamemaster" },  
          });
        });
        `,
        flags: { core: { exported: true } }
      }
    ];
  
    // Создаём новые документы и добавляем их в компедиум
    for (const macroData of macrosData) {
      const macro = await Macro.create(macroData, { pack: pack.collection });
      console.log('Макрос добавлен:', macro);
    }
  });
  