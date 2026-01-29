const PASSWORD = "admin123"; // byt detta

if (!sessionStorage.getItem("auth")) {
  const pw = prompt("Lösenord krävs för redigering");
  if (pw === PASSWORD) {
    sessionStorage.setItem("auth", "true");
  } else {
    alert("Ingen behörighet");
    window.location.href = "index.html";
  }
}
