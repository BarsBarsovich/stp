import $ from "jquery";

let percentsTotal = 0;
const preloader = $(".preloader");

const imgPaths = $("*").map((ndx, element) => {
  const isImg = $(element).is("img");
  const background = $(element).css("background-image");

  let path = "";

  if (background != "none") {
    path = background.replace('url("', "").replace('")', "");
  }

  if (isImg) {
    path = $(element).attr("src");
  }

  if (path) return path;
});

const setPercents = (total, current) => {
  const percents = Math.ceil((current / total) * 100);

  $(".preloader__percents").text(`${percents}%`);

  if (percents >= 100) preloader.fadeOut();
};

const loadImages = images => {
  if (!images.length) return;

  images.forEach((img, i, images) => {
    const fakeImg = $("<img>", {
      attr: {
        src: img
      }
    });

    fakeImg.on("load error", () => {
      percentsTotal++;
      setPercents(images.length, percentsTotal);
    });
  });
};

const imgs = imgPaths.toArray();

export default () => {
  loadImages(imgs);
};
