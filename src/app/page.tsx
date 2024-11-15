import Cadastro from './componentes/formCadastro/cadastro';
import Login from './componentes/formLogin/login'
import style from './style.module.css'
export default function Home() {
  // function toggleForms() {
  //   const container = document.querySelector('container');
  //   container.classList.toggle('signup-mode');
  // }
  
  return (
    <>
    <div className={style.container}>
      <div className={style.imagem}></div>
      <div>
        <div>
          <Cadastro/>
        </div>
        <div>
          <Login/>
        </div>
      </div>
    </div>
    </>
  );
}
