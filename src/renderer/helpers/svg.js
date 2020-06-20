export default {
    getSvgUrl(svgImg) {
        try {
            let url = ('static/svg/' + svgImg);
            return url;
        }
        catch (e) {
            console.error("SVG Image [" + svgImg + "] was called but not found");
        }
    }
}