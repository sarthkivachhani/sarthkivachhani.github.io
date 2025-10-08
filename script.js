  const lines = [
    "Hey! I'm Sarthki, a CSE student who loves turning ideas into code.",
    "On a journey through algorithms, design, and innovation as a Computer Science student.",
    "From algorithms to web apps, I enjoy creating projects that matter.",
    "Always curious, always learning, and always coding!"
  ];
const textElement = document.getElementById("introText");
  let currentLine = 0;

  function showNextLine() {
    // Fade out text
    textElement.style.opacity = 0;

    setTimeout(() => {
      // Update text
      textElement.textContent = lines[currentLine];
      // Fade in text
      textElement.style.opacity = 1;

      // Move to next line
      currentLine = (currentLine + 1) % lines.length;
    }, 500); // matches CSS transition
  }

  // Show first line immediately
  textElement.textContent = lines[currentLine];
  currentLine = (currentLine + 1) % lines.length;

  // Repeat every 3 seconds
  setInterval(showNextLine, 3000);