const app = document.getElementById('app'),
        appContainer = document.createElement('div'),
        // Формирую шапку
        appHeader = document.createElement('div'),
        appPlayGame = document.createElement('button'),
        appWallet = document.createElement('button'),
        appMenu = document.createElement('button')
        appHeader.append(appPlayGame, appWallet, appMenu)
        appContainer.append(appHeader)
        // Добовляю классы
        appHeader.className = 'appHeader'
        appPlayGame.className = 'appButton'
        appWallet.className = 'appWallet'
        appMenu.className = 'appMenu'
        // Добавляю описание
        appPlayGame.textContent = 'Play Game'
        appWallet.textContent = 'WalletConnect'
        appMenu.textContent = 'Menu'
        // Формирую основу
        const appMain = document.createElement('div'),
            appMainButton = document.createElement('button'),
            appMainButtonStart = document.createElement('button')
            appMainButtonStart.textContent = 'Start'
            appMainButtonStart.className = 'appMainButtonStart'
            appMain.className = 'appMain'
            appMainButton.className = 'appMainButton'
                appMain.append(appMainButtonStart)
console.log('asdasd')
let tg = window.Telegram.WebApp
tg.expand()
tg.MainButton.textColor = '#FFFFFF'
tg.MainButton.color = '#2cab37'
let count = 0
appMainButtonStart.addEventListener('click', function(event) {
    appMainButtonStart.textContent = count
    count = 1
})
Telegram.WebApp.onEvent('mainButtonClicked', function() {
    tg.sendData(count)
})
app.append(appContainer, appMain)