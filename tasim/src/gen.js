function execute(url, page) {
    load('config.js');
    if (!page) page = '1';
	//const doc = fetch(BASE_URL + "/" + url + ".html").html();
    let response = fetch(BASE_URL + url,{
        method : "GET",
       headers: {
                'user-agent': UserAgent.android()
            },
        queries : {
            page : page
        }
    });
    if(response.ok){
        let doc = response.html();
        let next = doc.select(".pagination").select("li.active + li").text()
        let el = doc.select(".wrap .hot .item")
        let data = [];
        el.forEach(e =>{
            data.push({
                name: e.select("dt a").text(),
                link: "https://www.tasim.net"+ e.select("a").first().attr("href"),
                cover: e.select("a img").attr("src"),
      
                description: e.select("dd").text(),
                host: BASE_URL
            })
        })
        // let namee = el.get(1).select(".hot .item dt a").text()
        return Response.success(data)
    }
    return null
}