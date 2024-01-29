let API_KEY = "AIzaSyCPv_4bGP9tBWXOkFwEXFhnSkinBxLOclE";

let getData = async () => {
  try {
    let query = document.getElementById("query").value;
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=${query}&key=${API_KEY}&maxResults=20`
    );

    let { items } = await res.json();

    let array_of_vedios = items;
    console.log("array_of_vedios:", array_of_vedios);
    appendVedios(array_of_vedios);
    localStorage.setItem("popular", JSON.stringify(array_of_vedios));
  } catch (error) {
    console.log("error:", error);
  }
};
let popularArr = JSON.parse(localStorage.getItem("popular"));
console.log("popuarArr:", popularArr);

let appendVedios = (popularArr) => {
  let container = document.getElementById("search_results");
  container.innerHTML = " ";

  popularArr.forEach(({ snippet: { title }, id,snippet:{categoryId} }, index) => {
    console.log("videoId:", id);
    // let title=el.snippet.title
    // let vedioId=el.id.vedioId
    let div = document.createElement("div");
    div.setAttribute("id", "dis");
    // div.addEventListener("click",function(){
    //     localStorage.setItem("yData",JSON.stringify(data[index]))
    //     window.location.href="play.html"
    //     // localStorage.setItem("yData",JSON.stringify(videoId))

    // })
    // let image=document.createElement("img");
    // image.src=url

    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${id}`;
    iframe.width = "100%";
    iframe.height = "60%";
    iframe.allow = "fullscreen";

    let head = document.createElement("h4");
    head.innerText = title;
    head.style.margin = "20px";
    head.style.lineHeight = "25px";
    let channel=document.createElement("p");
    channel.innerText=categoryId
    div.append(iframe, head);
    container.append(div);
  });
};
appendVedios(popularArr)
