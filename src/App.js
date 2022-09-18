//1. Tao app bang create-react-app
//Step1: cài nodejs
//Step2: di chuyen toi folder muon tao app
//Step3: npx create-react-app project_name
//Step4: di chuyen vao project vua duoc tao
//Step5: Mo terminal tren vscode ctrl+`, sau do chay: npm run start de start project

//2. create-react-app la gi? Tai sao dung?
// la framework danh cho reactjs
// khi dung create-react-app se tao 1 project voi 1 template reactjs app

//reactjs la 1 library


//3. Git
// Git la gi? Tai sao can dung?
// Git la quy trinh de quan ly code, va cac version cua code
// Tai sao can dung? Giup cho viec quan ly code, cung nhu lam viec nhom tot hon

//Config git 
//git config user.name "name"
//git config user.email "email"

//git remote add origin url_repo ---> add schema git repo
//git remote -v ----> list tat ca cac remote
//git add . ---> add tat ca file change vao stage changes
//git commit -m "message" --> Dung de tao commit voi 1 message
//git push origin master







import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
