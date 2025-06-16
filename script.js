// CONFIGURAÇÃO DO FIREBASE - vais colar aqui os teus dados do Firebase
const firebaseConfig = {
  apiKey: "TUA_API_KEY",
  authDomain: "teu-projeto.firebaseapp.com",
  databaseURL: "https://teu-projeto-default-rtdb.firebaseio.com",
  projectId: "teu-projeto",
  storageBucket: "teu-projeto.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:abc123"
};

// Inicializar
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Lidar com o formulário
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;

  db.ref('agendamentos/').push({
    nome, telefone, data, hora
  });

  document.getElementById('mensagem').innerText = 'Agendamento feito com sucesso!';
  this.reset();
});
