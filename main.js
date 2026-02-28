// Importe as funções do Firebase que você precisa dos SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// TODO: Adicione a configuração do seu projeto Firebase aqui
// Você pode obter essa configuração no console do Firebase do seu projeto:
// Acesse as configurações do projeto (ícone de engrenagem) -> Geral -> Seus aplicativos -> Aplicativo da Web
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

console.log("Firebase configurado e pronto para usar!");

// Em breve, adicionaremos os Web Components aqui :)
