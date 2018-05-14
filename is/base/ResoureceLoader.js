/**
 * 资源加载器，确保canvas图片渲染加载结束后才进行渲染
 */
import {Resources} from './Resources.js'
export class ResoureceLoader {
    constructor(){
         this.map = new Map(Resources)
         for (let [key, value] of this.map){
             console.log(key)
             const image = new Image();
             //wx.createImage() =>wx game
             image.src = value;
             this.map.set(key,image)
         }
         
    }
    
    onLoader(callback){
        let loadedCount = 0;
        for(let value of this.map.values()){
            value.onload = () => {
                loadedCount++;
                if(loadedCount>=this.map.size){
                    callback(this.map)
                }
            }
        }

        
    }

    static create(){
        return new ResoureceLoader()
    }
}