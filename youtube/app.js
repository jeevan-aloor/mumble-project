let videoDeatilObject = JSON.parse(localStorage.getItem("yData"));
const { id, snippet } = videoDeatilObject;
function playFunc() {
  let container = document.getElementById("container");
  let div = document.createElement("div");
  let iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${id.videoId}`;
  iframe.width = "100%";
  iframe.height = "60%";
  iframe.allow = "fullscreen";
  let name=document.createElement("h3");
  name.innerText=snippet.title
  div.append(iframe,name);
  container.append(div);
}
playFunc();
