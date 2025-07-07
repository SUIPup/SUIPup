const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const baseImage = new Image();
baseImage.src = 'images/sp_base.png';

function generateImage() {
  const handle = document.getElementById('handleInput').value.trim() || '@SuiPup';
  const bgColor = document.getElementById('bgColorPicker').value;

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#000";
  ctx.font = "bold 32px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(handle, canvas.width / 2, canvas.height - 40);
}

function downloadImage() {
  const link = document.createElement('a');
  link.download = 'suipup.png';
  link.href = canvas.toDataURL();
  link.click();
}
