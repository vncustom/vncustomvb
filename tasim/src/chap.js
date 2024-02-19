load('libs.js')
load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        // let el = doc.select(".Readarea.ReadAjax_content").text()
        var htm = $.Q(doc, 'div.Readarea.ReadAjax_content', {remove: ['h1', 'div']}).html();

        htm = cleanHtml(htm)
            .replace(/^ *第\d+章.*?<br>/, '') // Ex: '  第11745章 大结局，终<br>'
            .replace('(本章完)', '')
            ;
        
        log(htm);
        return Response.success(htm);
    }
    return null;
}