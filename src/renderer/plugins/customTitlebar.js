
import { Titlebar, Color } from 'custom-electron-titlebar'

export default {
    install(Vue, options) {
        Vue.prototype.$customTitlebar = new Titlebar({
            icon: "/static/logo.png",
            backgroundColor: Color.fromHex('#365550'),
            unfocusEffect: true,
            hideWhenClickingClose: true,
            shadow: true
        });
    }
}