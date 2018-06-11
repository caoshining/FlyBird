// 初始化整个游戏的精灵，作为游戏入口
import {ResourceLoader} from './js/base/ResoureceLoader.js'
import {Director} from './js/Director.js'
import {BackGround} from './js/runtime/BackGround.js'
import {DataStore} from './js/base/DataStore.js'
export class Main{
    constructor(){
      console.log(111)
      new ResoureceLoader()
      this.canvas = document.getElementById('game_canvas');
      this.ctx = this.canvas.getContext('2d');
      this.dataStore = DataStore.getInstance();
      const loader = ResoureceLoader.create();
      loader.onLoader(map=>this.onResoureFirstLoaded(map))

      // let image = new Image() ;
      // image.src = '../res/background.png';
      // image.onload = () =>{
      //   this.ctx.drawImage(
      //     image,
      //     0,
      //     0,
      //     image.width,
      //     image.height,
      //     0,
      //     0,
      //     image.width,
      //     image.height
      //   )
      // }
      
    }
    onResoureFirstLoaded(map){
      console.log(map)
      this.dataStore.ctx = this.ctx;
      this.dataStore.res = map;
      this.init()
      
    }
    init(){
      this.dataStore.put('background',new BackGround(this.ctx,this.dataStore.get('background')))
      Director.getInstance().run()
      // let background = new BackGround(this.ctx,map.get('background'));
      // background.draw()
    }
}