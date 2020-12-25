// storeTs/index.ts

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import {IAboutState} from './module/About';

export default new Vuex.Store<IAboutState>({})