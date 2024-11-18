export async function handleCommand(command, waSocket, pesan) {
  const from = pesan.key.remoteJid;

  if (command === ".menu") {
    const teks = `Halo, aku bot baimdevelop!\n\n⏳ Runtime: ${process.uptime().toFixed(2)} detik.`;
    await waSocket.sendMessage(from, { text: teks });
    console.log("Perintah .menu diproses.");
  } else {
    console.log(`Perintah tidak dikenal: ${command}`);
  }
}
