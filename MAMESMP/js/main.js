fetch("https://api.mcstatus.io/v2/status/java/play.mamesmp.ir")
  .then(res => res.json())
  .then(data => {
    const status = document.getElementById("server-status");
    if (data.online) {
      status.textContent = `✅ آنلاین | بازیکنان: ${data.players.online}/${data.players.max}`;
    } else {
      status.textContent = "❌ آفلاین";
    }
  });
