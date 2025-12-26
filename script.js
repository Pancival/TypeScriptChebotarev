import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

let cropper;

const uploadBtn = document.getElementById("upload-btn");
const cropBtn = document.getElementById("crop-btn");
const downloadBtn = document.getElementById("download-btn");
const fileInput = document.getElementById("file-input");
const image = document.getElementById("image");

uploadBtn.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  if (file.size > 300 * 1024) {
    alert("Размер файла не более 300 Кб");
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    image.src = event.target.result;

    image.onload = () => {
      if (cropper) cropper.destroy();

      cropper = new Cropper(image, {
        viewMode: 1,
        autoCropArea: 0.9,
        background: false
      });
    };
  };

  reader.readAsDataURL(file);
});

cropBtn.addEventListener("click", () => {
  if (!cropper) return;

  const canvas = cropper.getCroppedCanvas();
  downloadBtn.href = canvas.toDataURL("image/png");

  alert("Изображение обрезано. Нажмите 'Download'");
});
