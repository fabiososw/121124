document.addEventListener("DOMContentLoaded", function () {
  // aspetto che la pagina sia completamente caricata prima di partire con il codice
  // recupero il nome salvato da localStorage
  const savedName = localStorage.getItem("name");
  // se c'è un nome salvato, lo mostro nella pagina
  if (savedName) {
    document.getElementById("savedName").textContent = `nome salvato: ${savedName}`;
  }
  // quando clicco su "salva nome"
  document.getElementById("saveButton").addEventListener("click", function () {
    const nameInput = document.getElementById("nameInput").value; // prendo il valore che hai scritto nell'input
    if (nameInput) {
      // se non è vuoto
      localStorage.setItem("name", nameInput); // salvo il nome in localStorage
      document.getElementById("savedName").textContent = `nome salvato: ${nameInput}`; // mostro il nome
    }
  });
  // quando clicco su "rimuovi nome"
  document.getElementById("removeButton").addEventListener("click", function () {
    localStorage.removeItem("name"); // rimuovo il nome da localStorage
    document.getElementById("savedName").textContent = ""; // tolgo il nome dalla pagina
  });
});
//secondo
// Aspetto che l'intera pagina sia caricata prima di far partire il codice
document.addEventListener("DOMContentLoaded", function () {
  // Con 'DOMContentLoaded' mi assicuro che tutti gli elementi HTML siano già pronti e accessibili.
  // Così evito errori tipo cercare di usare elementi che ancora non sono stati caricati.
  // Controllo se esiste già un valore salvato del contatore in sessionStorage
  let counter = sessionStorage.getItem("counter")
    ? parseInt(sessionStorage.getItem("counter")) // Se esiste lo prendo e lo converto in numero
    : 0; // Se non c’è, parto da zero
  // `sessionStorage` salva tutto come stringa anche se ci metto un numero
  // `parseInt` serve a convertirlo da stringa a numero così posso sommarci 1 ogni secondo
  // Mostro subito il valore iniziale del contatore sull'elemento HTML (che sarà 0 o il valore salvato)
  document.getElementById("counterDisplay").textContent = counter;
  // Funzione per aggiornare il contatore ogni secondo
  function updateCounter() {
    counter += 1; // Aumento di 1 ogni volta che chiamo questa funzione
    document.getElementById("counterDisplay").textContent = counter; // Aggiorno il display con il nuovo valore
    // Salvo il nuovo valore in sessionStorage, così non lo perdo quando aggiorno la pagina
    sessionStorage.setItem("counter", counter);
  }
  // Imposto un timer che chiama `updateCounter` ogni secondo (1000 millisecondi)
  setInterval(updateCounter, 1000);
  // Quindi in pratica ogni secondo questa funzione aumenta il contatore di 1, aggiorna
  // il testo nella pagina e salva il nuovo valore in sessionStorage. Se aggiorno la pagina,
  // `sessionStorage` ha ancora l'ultimo valore salvato, così il contatore continua da lì.
});
