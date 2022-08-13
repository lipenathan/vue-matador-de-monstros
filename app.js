new Vue({
    el: '#game',
    data: {
        playerLife: 100,
        monsterLife: 100,
        playerLifeStr: "100%",
        monsterLifeStr: "100%",
        winner: "",
        flagEngGame: true,
        textEndGame: "",
        logList: {msg: "", style:""}
    },
    methods: {
        lifeUpdate(player, monster) {
            this.playerLife -= player
            this.monsterLife -= monster
            if (this.playerLife <= 0) {
                this.playerLife = 0
                this.winner = "O Monstro venceu"
                this.flagEngGame = true
            } else if (this.playerLife >= 100) {
                this.playerLife = 100
            }
            if (this.monsterLife <= 0) {
                this.monsterLife = 0
                this.winner = "O Jogador venceu"
                this.flagEngGame = true
            }
            this.playerLifeStr = this.playerLife + "%"
            this.monsterLifeStr = this.monsterLife + "%"
        },
        log(player, monster, heal) {
            if(!heal) {
            this.logList.push({msg:"Jogador atacou monstro com " + player + " pontos!", style: 'player-log'}, {msg: "Monstro atacou jogador com " + monster + " pontos!", style: "monster-log"})
            } else {
                this.logList.push({msg: "Jogador se curou com " + player + " pontos!", style: "player-log"}, {msg: "Monstro atacou jogador com " + monster + " pontos!", style:"monster-log"})
            }
        },
        startGame() {
            this.flagEngGame = false
            this.playerLife = 100
            this.monsterLife = 100
            this.playerLifeStr = "100%"
            this.monsterLifeStr = "100%"
            this.winner = ""
            this.logList = []
        },
        atack() {
            let monsterAtack = Math.random() * (10 - 1) + 1;
            let playerAtack = Math.random() * (8 - 1) + 1;
            monsterAtack = Math.floor(monsterAtack)
            playerAtack = Math.floor(playerAtack)
            this.log(playerAtack, monsterAtack)
            this.lifeUpdate(monsterAtack, playerAtack, false)
        },
        specialAtack() {
            let monsterAtack = Math.random() * (10 - 1) + 1;
            let playerAtack = Math.random() * (15 - 1) + 1;
            monsterAtack = Math.floor(monsterAtack)
            playerAtack = Math.floor(playerAtack)
            this.log(playerAtack, monsterAtack, false)
            this.lifeUpdate(monsterAtack, playerAtack)
        },
        heal() {
            let lifeHeal = Math.random() * (10 - 1) + 1;
            let monsterAtack = Math.random() * (10 - 1) + 1;
            lifeHeal = Math.floor(lifeHeal)
            monsterAtack = Math.floor(monsterAtack)
            this.log(lifeHeal, monsterAtack, true)
            lifeHeal = monsterAtack - lifeHeal
            this.lifeUpdate(lifeHeal, 0)
        }
    },
    watch: {
        flagEngGame(n, o) {
            this.textEndGame = this.winner
        }
    }
});