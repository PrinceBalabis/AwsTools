import svg from '@/helpers/svg';

export default {
    install(Vue, options) {
        Vue.prototype.$svg = svg;
    }
}
