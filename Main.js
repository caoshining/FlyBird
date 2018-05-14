// 初始化整个游戏的精灵，作为游戏入口
import {ResourceLoader} from './js/base/ResoureceLoader.js'
export class Main{
    constructor(){
      console.log(111)
      new ResourceLoader()
      this.canvas = document.getElementById('game_canvas');
      this.ctx = this.canvas.getContext('2d');
      const loader = ResourceLoader.create();
      loader.onLoader(map=>this.onResoureFirstLoaded(map))
    }
    onResoureFirstLoaded(map){
      console.log(map)
    }
}