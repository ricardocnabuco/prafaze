import Head from 'next/head';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.container2}>
          PraFazê!<img src="/clipboard-text.png" alt="tarefa">
        </div>
      
        <div className={styles.container}>
           <div className={styles.tela-principal}>
  
           <form action="" method="">
             <input className={styles.button}  name="incluir" type="submit" value=" Incluir " />
              <div className={styles.input}><input name="tarefa" type="text" placeholder="Digite nova tarefa :)" /></div>
           </form>

           <div className={styles.traco}></div>
     
      <div>
        <input type="checkbox" id="tarefa1" name="tarefa1" />
        <label for="tarefa1">Sou uma tarefa :)</label>
      </div>
      <div>
        <input type="checkbox" id="tarefa2" name="tarefa2" />
        <label for="tarefa2">Sou uma tarefa :)</label>
      </div>
      <div>
        <input type="checkbox" id="tarefa3" name="tarefa3" />
        <label for="tarefa3">Sou uma tarefa :)</label>
      </div>
      <div>
        <input type="checkbox" id="tarefa4" name="tarefa4" />
        <label for="tarefa4">Sou uma tarefa :)</label>
      </div>
      <div>
        <input type="checkbox" id="tarefa5" name="tarefa5" />
        <label for="tarefa5">Sou uma tarefa :)</label>
      </div>
      <div>
        <input type="checkbox" id="tarefa6" name="tarefa6" checked />
        <label for="tarefa6">Sou uma tarefa :)</label>
      </div>
      <div>
        <input type="checkbox" id="tarefa7" name="tarefa7" />
        <label for="tarefa7">Sou uma tarefa :)</label>
      </div>
      <div>
        <input type="checkbox" id="tarefa8" name="tarefa8" />
        <label for="tarefa8">Sou uma tarefa :)</label>
      </div>
      <div>
        <input type="checkbox" id="tarefa9" name="tarefa9" />
        <label for="tarefa9">Sou uma tarefa :)</label>
      </div>
      <div className={styles.traco}></div> 

      <div className={styles.footer}>
        <p>5 itens restantes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Tudo</b>&nbsp;&nbsp;&nbsp;&nbsp;Ativas&nbsp;&nbsp;&nbsp;&nbsp;
          Completas&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Limpar completas</p>
      </div>
      
  </div>
</div>
   
   </main>
  );
}
