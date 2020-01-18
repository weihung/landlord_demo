window.__require=function t(e,a,n){function o(r,i){if(!a[r]){if(!e[r]){var s=r.split("/");if(s=s[s.length-1],!e[s]){var l="function"==typeof __require&&__require;if(!i&&l)return l(s,!0);if(c)return c(s,!0);throw new Error("Cannot find module '"+r+"'")}}var d=a[r]={exports:{}};e[r][0].call(d.exports,function(t){return o(e[r][1][t]||t)},d,d.exports,t,e,a,n)}return a[r].exports}for(var c="function"==typeof __require&&__require,r=0;r<n.length;r++)o(n[r]);return o}({Button:[function(t,e,a){"use strict";cc._RF.push(e,"07400bD5/BFRoHutZPDTt/K","Button"),cc.Class({extends:cc.Component,properties:{pressedScale:1,transDuration:0},onLoad:function(){var t=this;function e(e){this.stopAllActions(),this.runAction(t.scaleUpAction)}t.initScale=this.node.scale,t.button=t.getComponent(cc.Button),t.scaleDownAction=cc.scaleTo(t.transDuration,t.pressedScale),t.scaleUpAction=cc.scaleTo(t.transDuration,t.initScale),this.node.on("touchstart",function(e){this.stopAllActions(),this.runAction(t.scaleDownAction)},this.node),this.node.on("touchend",e,this.node),this.node.on("touchcancel",e,this.node)},start:function(){}}),cc._RF.pop()},{}],Call:[function(t,e,a){"use strict";cc._RF.push(e,"b55eaQqpg9PQaLmNKmfgZvr","Call");var n=t("./Global"),o=t("./Ws");cc.Class({extends:cc.Component,properties:{button1:cc.Button,button2:cc.Button,button3:cc.Button,passButton:cc.Button},onLoad:function(){this.button1.node.on("click",this.callback1,this),this.button2.node.on("click",this.callback2,this),this.button3.node.on("click",this.callback3,this),this.passButton.node.on("click",this.callbackPass,this)},start:function(){},init:function(){this.button1.node.active=n.Odds<1,this.button2.node.active=n.Odds<2,this.passButton.node.active=0!==n.Odds},callback1:function(){o.send({cmd:"Grab",grab:1})},callback2:function(){o.send({cmd:"Grab",grab:2})},callback3:function(){o.send({cmd:"Grab",grab:3})},callbackPass:function(){o.send({cmd:"Grab",grab:0})}}),cc._RF.pop()},{"./Global":"Global","./Ws":"Ws"}],Card:[function(t,e,a){"use strict";cc._RF.push(e,"0e2f6MveopExoInjSima0Ox","Card");var n=t("./Global"),o=["A","2","3","4","5","6","7","8","9","10","J","Q","K"];cc.Class({extends:cc.Component,properties:{cardButton:cc.Button,joker:cc.Label,point:cc.Label,redTextColor:cc.Color.WHITE,blackTextColor:cc.Color.WHITE,suitSmall:cc.Sprite,suitBig:cc.Sprite,diamondBig:cc.SpriteFrame,diamondSmall:cc.SpriteFrame,cloubsBig:cc.SpriteFrame,cloubsSmall:cc.SpriteFrame,heartsBig:cc.SpriteFrame,heartsSmall:cc.SpriteFrame,spadesBig:cc.SpriteFrame,spadesSmall:cc.SpriteFrame,jokerBig:{default:[],type:cc.SpriteFrame}},onLoad:function(){this.cardButton.node.on("click",this.callback,this),this.moveable=!0},start:function(){this.add=0,this.position=this.node.position},callback:function(t){this.add++,this.add=this.add%2,this.node.position=cc.v2(this.position.x,this.position.y+50*this.add),0==this.add?n.SecectedCard.remove(this.data.card):n.SecectedCard.push(this.data.card)},init:function(t){this.data=t;var e={D:this.diamondBig,H:this.heartsBig,C:this.cloubsBig,S:this.spadesBig},a={D:this.diamondSmall,H:this.heartsSmall,C:this.cloubsSmall,S:this.spadesSmall};this.moveable=t.moveable;var n=t.card.substring(0,1),c=parseInt(t.card.substring(1));if("J"==n)return this.point.node.active=!1,this.joker.node.active=!0,this.suitSmall.node.active=!1,this.suitBig.spriteFrame=this.jokerBig[c],void(this.joker.node.color=0==c?this.blackTextColor:this.redTextColor);this.point.node.active=!0,this.joker.node.active=!1,this.suitSmall.node.active=!0,this.suitSmall.spriteFrame=a[n],this.suitBig.spriteFrame=e[n],this.point.string=o[c],this.point.node.color="H"==n||"D"==n?this.redTextColor:this.blackTextColor},moveable:function(t){this.moveable=t}}),Array.prototype.remove=function(){for(var t,e,a=arguments,n=a.length;n&&this.length;)for(t=a[--n];-1!==(e=this.indexOf(t));)this.splice(e,1);return this},cc._RF.pop()},{"./Global":"Global"}],Config:[function(t,e,a){"use strict";cc._RF.push(e,"5746eJn0lJHNbB0n1aAQxrT","Config");e.exports={webSocketUrl:"wss://demogameserver.ddns.net/landlord/v1"},cc._RF.pop()},{}],Continue:[function(t,e,a){"use strict";cc._RF.push(e,"4ba6a6B+hJFOI1vNRBtghcn","Continue");var n=t("./Ws");cc.Class({extends:cc.Component,properties:{button:cc.Button},start:function(){this.button.node.on("click",this.callback,this)},callback:function(t){n.send({cmd:"Join"})}}),cc._RF.pop()},{"./Ws":"Ws"}],CountDown:[function(t,e,a){"use strict";cc._RF.push(e,"945b3agOflFAJEJmTtDRgKW","CountDown");var n=t("./Global");cc.Class({extends:cc.Component,properties:{countDownLabel:{default:[],type:cc.Label},landlordLabel:{default:[],type:cc.Label},oddsLabel:cc.Label,callLayer:cc.Node,grabLayer:cc.Node},start:function(){},showCountDown:function(t){var e=t.turn,a=t.landlord;2===n.Index?(e=(t.turn+2)%3,a=(t.landlord+2)%3):0===n.Index&&(e=(t.turn+1)%3,a=(t.landlord+1)%3);for(var o=0;o<this.countDownLabel.length;o++)o!=e&&(this.countDownLabel[o].string=""),o!=a&&(this.landlordLabel[o].string="");if(this.countDownLabel[e].string=t.seconds>0?t.seconds:"",this.landlordLabel[a].string=t.odds>3?"\u62a2\u5730\u4e3b":"\u5730\u4e3b",this.oddsLabel.string=t.odds,n.Odds=t.odds,t.turn!=n.Index)return this.callLayer.active=!1,void(this.grabLayer.active=!1);(this.grabLayer.active=n.Odds>=3,this.callLayer.active=!this.grabLayer.active,this.callLayer.active)&&this.callLayer.getComponent("Call").init()}}),cc._RF.pop()},{"./Global":"Global"}],Global:[function(t,e,a){"use strict";cc._RF.push(e,"80af5y1NF9HeaqSE2eZBkg3","Global"),e.exports={},cc._RF.pop()},{}],Grab:[function(t,e,a){"use strict";cc._RF.push(e,"76f65bkMh9J+KjOsJHXqmN9","Grab");var n=t("./Ws");cc.Class({extends:cc.Component,properties:{grabButton:cc.Button,passButton:cc.Button},onLoad:function(){this.grabButton.node.on("click",this.callbackGrab,this),this.passButton.node.on("click",this.callbackPass,this)},start:function(){},callbackGrab:function(){n.send({cmd:"Grab",grab:4})},callbackPass:function(){n.send({cmd:"Grab",grab:0})}}),cc._RF.pop()},{"./Ws":"Ws"}],Hit:[function(t,e,a){"use strict";cc._RF.push(e,"fbfd1h5kq1DXJL4p/DkzBU+","Hit");var n=t("./Ws"),o=t("./Global");cc.Class({extends:cc.Component,properties:{playButton:cc.Button,passButton:cc.Button},start:function(){this.playButton.node.on("click",this.callbackHit,this),this.passButton.node.on("click",this.callbackPass,this)},showPass:function(t){this.passButton.node.active=t},callbackHit:function(t){if(!(o.SecectedCard.length<1)){var e={cmd:"PlayCard",table:o.Table,cards:o.SecectedCard};console.log(e),n.send(e)}},callbackPass:function(t){var e={cmd:"Pass",table:o.Table};n.send(e)}}),cc._RF.pop()},{"./Global":"Global","./Ws":"Ws"}],PlayCards:[function(t,e,a){"use strict";cc._RF.push(e,"4dee8Y3POZEcorH3/Rlti3u","PlayCards");var n=t("./Global");cc.Class({extends:cc.Component,properties:{cardPrefab:cc.Prefab,player1Layer:cc.Node,player2Layer:cc.Node,player3Layer:cc.Node},start:function(){},showCards:function(t,e){if(this.removeAllCards(),t){var a=(n.Index+2)%3,o=(n.Index+1)%3;e!=a?e!=o?this.showCard2(t):this.showCard3(t):this.showCard1(t)}},showCard1:function(t){for(var e=0;e<t.length;e++){var a={card:t[e],moveable:!0},n=cc.instantiate(this.cardPrefab);this.player1Layer.addChild(n),n.position=cc.v2(50*e,0),n.getComponent("Card").init(a)}},showCard2:function(t){for(var e=t.length,a=-50*(e-1)/2,n=0;n<e;n++){var o={card:t[n],moveable:!0},c=cc.instantiate(this.cardPrefab);this.player2Layer.addChild(c),c.position=cc.v2(a+50*n,0),c.getComponent("Card").init(o)}},showCard3:function(t){for(var e=t.length,a=-50*(e-1),n=0;n<e;n++){var o={card:t[n],moveable:!0},c=cc.instantiate(this.cardPrefab);this.player3Layer.addChild(c),c.position=cc.v2(a+50*n,0),c.getComponent("Card").init(o)}},removeAllCards:function(){this.player1Layer.removeAllChildren(),this.player2Layer.removeAllChildren(),this.player3Layer.removeAllChildren()}}),cc._RF.pop()},{"./Global":"Global"}],Player1:[function(t,e,a){"use strict";cc._RF.push(e,"ff0be8l1FJPtJgZi4un7wtA","Player1"),cc.Class({extends:cc.Component,properties:{cardPrefab:cc.Prefab},start:function(){},showCard:function(t){for(var e=0;e<t.length;e++){var a={card:t[e],moveable:!0},n=cc.instantiate(this.cardPrefab);this.node.addChild(n),n.position=cc.v2(50*e,0),n.getComponent("Card").init(a)}},removeAllCards:function(){this.node.removeAllChildren()}}),cc._RF.pop()},{}],Player2:[function(t,e,a){"use strict";cc._RF.push(e,"626dak9Gu5P8IYiEU5T92q1","Player2"),cc.Class({extends:cc.Component,properties:{cardPrefab:cc.Prefab},start:function(){},showCard:function(t){for(var e=t.length,a=-50*(e-1)/2,n=0;n<e;n++){var o={card:t[n],moveable:!0},c=cc.instantiate(this.cardPrefab);this.node.addChild(c),c.position=cc.v2(a+50*n,0),c.getComponent("Card").init(o)}},removeAllCards:function(){this.node.removeAllChildren()}}),cc._RF.pop()},{}],Player3:[function(t,e,a){"use strict";cc._RF.push(e,"2ad72RlGzJNpJs4qNsG/gZI","Player3"),cc.Class({extends:cc.Component,properties:{cardPrefab:cc.Prefab},start:function(){},showCard:function(t){for(var e=t.length,a=-50*(e-1),n=0;n<e;n++){var o={card:t[n],moveable:!0},c=cc.instantiate(this.cardPrefab);this.node.addChild(c),c.position=cc.v2(a+50*n,0),c.getComponent("Card").init(o)}},removeAllCards:function(){this.node.removeAllChildren()}}),cc._RF.pop()},{}],ShowCards:[function(t,e,a){"use strict";cc._RF.push(e,"bd08amX8jNM65+RwdsZha5d","ShowCards");var n=t("./Global");cc.Class({extends:cc.Component,properties:{cardPrefab:cc.Prefab},start:function(){},showCards:function(t){if(t&&0!=t.length){var e=JSON.stringify(t);if(this.last!=e){n.SecectedCard=[],this.last=e;var a={J:0,D:1,H:2,C:3,S:4};t.sort(function(t,e){var n=a[t.substring(0,1)];return a[e.substring(0,1)]-n}),t.sort(function(t,e){var n=parseInt(t.substring(1)),o=parseInt(e.substring(1)),c=a[t.substring(0,1)],r=a[e.substring(0,1)];return(0==c||0==r)&&c+r>0?0:n-o}),this.node.removeAllChildren();for(var o=0;o<t.length;o++){var c={card:t[o],moveable:!0},r=cc.instantiate(this.cardPrefab);this.node.addChild(r),r.position=cc.v2(50*o,0),r.getComponent("Card").init(c)}}}else this.node.removeAllChildren()},removeAllCards:function(){this.node.removeAllChildren()}}),cc._RF.pop()},{"./Global":"Global"}],Table:[function(t,e,a){"use strict";cc._RF.push(e,"59331fFqShP3bDihoJU/fzx","Table");var n=t("./Global"),o=t("./Ws");cc.Class({extends:cc.Component,properties:{nameLabel:cc.Label,balanceLabel:cc.Label,player1Label:cc.Label,player3Label:cc.Label,threeCardLayer:cc.Node,cardsLayer:cc.Node,countDownLayer:cc.Node,grabButtonLayer:cc.Node,playButtonLayer:cc.Node,playCardLayer:cc.Node,winnerLayer:cc.Node,landlordLayer:cc.Node,continueLayer:cc.Node},onLoad:function(){var t=this,e=new URLSearchParams(window.location.search);n.Token=e.get("t"),n.Cards=[],o.on("Logout",function(){window.alert("\u4f60\u5df2\u767b\u51fa\uff0c\u8bf7\u91cd\u65b0\u767b\u9646\u3002"),window.history.back()}),o.on("Login",function(e){n.Token=e.token,t.nameLabel.string=e.username,o.send({cmd:"Join"})}),o.on("Join",function(t){n.Table=t.table,n.Index=t.index}),o.on("Balance",function(e){t.balanceLabel.string=(e.balance/100).toFixed(2)}),o.on("Wait",function(e){n.Table=e.table,n.Index=e.playerIndex,t.playCardLayer.active=!1,t.grabButtonLayer.active=!1,t.playButtonLayer.active=!1,t.continueLayer.active=!1,t.winnerLayer.active=!1,t.threeCardLayer.active=!1,t.landlordLayer.active=!1,t.countDownLayer.active=!1,t.showPlayerCards([]),t.player1Label.string=e.players[(n.Index+2)%3].username,t.player3Label.string=e.players[(n.Index+1)%3].username}),o.on("GrabCountdown",function(e){n.Table=e.table,n.Index=e.playerIndex,t.playCardLayer.active=!0,t.grabButtonLayer.active=!0,t.playButtonLayer.active=!1,t.continueLayer.active=!1,t.winnerLayer.active=!1,t.threeCardLayer.active=!0,t.landlordLayer.active=!0,t.countDownLayer.active=!0,t.player1Label.string=e.players[(n.Index+2)%3].username,t.player3Label.string=e.players[(n.Index+1)%3].username,t.showThreeCard(e.threeCards),t.showPlayerCards(e.cards),t.countDownLayer.getComponent("CountDown").showCountDown(e)}),o.on("PlayCountdown",function(e){n.Table=e.table,n.Index=e.playerIndex,t.playCardLayer.active=!0,t.grabButtonLayer.active=!1,t.continueLayer.active=!1,t.winnerLayer.active=!1,t.threeCardLayer.active=!0,t.landlordLayer.active=!0,t.countDownLayer.active=!0,t.playButtonLayer.active=e.turn==e.playerIndex,t.showPlayerCards(e.playerCards),t.showThreeCard(e.threeCards),t.countDownLayer.getComponent("CountDown").showCountDown(e),t.playButtonLayer.getComponent("Hit").showPass(e.pass),t.playCardLayer.getComponent("PlayCards").showCards(e.cards,e.lastPlayerTurn)}),o.on("GameEnd",function(e){t.playCardLayer.active=!0,t.countDownLayer.active=!1,t.playButtonLayer.active=!1,t.continueLayer.active=!1,t.winnerLayer.active=!0,t.threeCardLayer.active=!0,t.landlordLayer.active=!0,t.showPlayerCards(e.playerCards),t.winnerLayer.getComponent("Winner").showWinner(e),t.playCardLayer.getComponent("PlayCards").showCards(e.cards,e.lastPlayerTurn)}),o.on("NewGame",function(e){t.playCardLayer.active=!0,t.countDownLayer.active=!1,t.playButtonLayer.active=!1,t.continueLayer.active=!0,t.winnerLayer.active=!0,t.threeCardLayer.active=!0,t.landlordLayer.active=!0}),o.connect()},start:function(){},showThreeCard:function(t){this.threeCardLayer.getComponent("ThreeCard").showCards(t)},showPlayerCards:function(t){this.cardsLayer.getComponent("ShowCards").showCards(t)},update:function(t){}}),cc._RF.pop()},{"./Global":"Global","./Ws":"Ws"}],ThreeCard:[function(t,e,a){"use strict";cc._RF.push(e,"f4ee4tx04BDRLcxfZMpU1ln","ThreeCard"),cc.Class({extends:cc.Component,properties:{cardPrefab:cc.Prefab},start:function(){},showCards:function(t){if(this.node.removeAllChildren(),3==t.length)for(var e=0;e<t.length;e++){var a={card:t[e],moveable:!1},n=cc.instantiate(this.cardPrefab);this.node.addChild(n),n.position=cc.v2(200*(e-1),0),n.getComponent("Card").init(a)}},removeAllCards:function(){this.node.removeAllChildren()}}),cc._RF.pop()},{}],Winner:[function(t,e,a){"use strict";cc._RF.push(e,"8c5c8FztRtJ3LIKLKCRvrxt","Winner");var n=t("./Global");cc.Class({extends:cc.Component,properties:{WinnerLabel:{default:[],type:cc.Label}},start:function(){},showWinner:function(t){var e=(n.Index+2)%3,a=(n.Index+1)%3,o=1;t.winner==e?o=0:t.winner==a&&(o=2);for(var c=0;c<this.WinnerLabel.length;c++)this.WinnerLabel[c].node.active=c==o}}),cc._RF.pop()},{"./Global":"Global"}],Ws:[function(t,e,a){"use strict";cc._RF.push(e,"66528gxEYVNU4xtwruKfNgu","Ws");var n,o,c=t("./Global"),r=t("./config").webSocketUrl,i={},s=!0;e.exports={on:function(t,e){i[t]=e},send:function(t){t.token=c.Token,n.send(JSON.stringify(t))},reset:function(){i={}},connect:function t(){(n=new WebSocket(r)).onopen=function(){if(console.log("connection open"),clearTimeout(o),s){var t={cmd:"Login",token:c.Token};n.send(JSON.stringify(t))}},n.onclose=function(){console.log("close connection"),clearTimeout(o),o=setTimeout(function(){t()},2e3)},n.onmessage=function(t){var e;console.log(t),s=!1;try{if((e=JSON.parse(t.data)).status<1){if(-20===e.status){var a="Logout";i[a]&&null!==i[a]&&i[a](e)}return}i[e.cmd]&&null!==i[e.cmd]&&i[e.cmd](e)}catch(t){console.log(t)}}}},cc._RF.pop()},{"./Global":"Global","./config":"Config"}]},{},["Button","Call","Card","Config","Continue","CountDown","Global","Grab","Hit","PlayCards","Player1","Player2","Player3","ShowCards","Table","ThreeCard","Winner","Ws"]);