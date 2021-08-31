export default {
    data() {
        return {

        }
    },
    computed: {
        isMobile: function () {
            return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
        },
        isScreenMaxSm: function() {
            return window.matchMedia("(max-width: 576px)").matches
        },
        isScreenMaxMd: function() {
            return window.matchMedia("(max-width: 768px)").matches
        },
    }
}
