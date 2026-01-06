function send() {
  const event = document.getElementById("event").value;
  const payload = {
    event,
    timestamp: new Date().toISOString(),
    data: { id: Math.floor(Math.random() * 1000) }
  };

  document.getElementById("output").innerText =
    JSON.stringify(payload, null, 2);
}
