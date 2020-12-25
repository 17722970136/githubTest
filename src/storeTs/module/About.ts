// storeTs/module/Abouts.ts

import {Module,VuexModule,Mutation,Action,getModule} from 'vuex-module-decorators';
import store from '../index';

export interface IAboutState {
    count:number;
    list:Array<number>;

}


const testAction = (delay: number) =>{
    return new Promise<Array<number>>((resolve,reject)=>{
       return setTimeout(()=>{
            resolve([6,7,8,9,10])
        },delay)
    })
}


@Module({
    name:'about',
    dynamic:true,
    store
})

export default class About extends VuexModule implements IAboutState {
    
    count:number = 0;
    list: Array<number> = [1,2,3,4,5];

    @Mutation
    addCount(payload: number) {
        this.count += payload
    }
    @Mutation

    updateList(payload: Array<number>) {
        this.list = payload
    }
    @Action
    async getList() {
        let result: Array<number> = await testAction(1000);
        this.updateList(result)
    }

    // get ComputedList() {
    //     return this.list;
    // }


}

export const aboutStore = getModule(About);