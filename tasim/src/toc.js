function execute(url) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let repsonse = fetch(url, {
            headers: {
                'user-agent': UserAgent.android()
            }
    });
    if(repsonse.ok){
        let doc = repsonse.html();
        let el = doc.select(".listmain dl dd")
        let data = [];
        for (let i=0;i < el.length; i++) {
            let e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: "https://www.tasim.net" + e.select("a").attr("href"),
                host: BASE_URL 
            })
        }
        return Response.success(data);
    }
    return null;
}