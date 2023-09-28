
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return (

  <div className={styles.container}>
    <section className={styles.titulo}>
        <span>PraFazê</span>
         <img className={styles.imgPraFaze}></img>
     


    </section>
    <div className={styles.telaPrincipal}>
      <form action="" method="">
        <input className={styles.button}  name="incluir" type="submit" value=" Incluir " />
        <div className={styles.input}><input name="tarefa" type="text" placeholder="Digite uma nova tarefa :)" />
        </div>
      </form>
      <div className={styles.traco}></div>
      <section className={styles.box}>
        <input type="checkbox" id="tarefa1" name="tarefa1" />&nbsp;&nbsp;
        <label for="tarefa1">Sou uma tarefa :)</label>
      </section>
      <div>
        <input type="checkbox" id="tarefa2" name="tarefa2" />&nbsp;&nbsp;
        <label for="tarefa2">Sou uma tarefa :)</label>
      </div>
      <div>
        <input type="checkbox" id="tarefa3" name="tarefa3" />&nbsp;&nbsp;
        <label for="tarefa3">Sou uma tarefa :)</label>
      </div>
      <div>
        <input type="checkbox" id="tarefa5" name="tarefa5" />&nbsp;&nbsp;
        <label for="tarefa5">Sou uma tarefa :)</label>
      </div>
      <div>
        <input type="checkbox" id="tarefa6" name="tarefa6" checked />&nbsp;&nbsp;
        <label for="tarefa6">Sou uma tarefa :)</label>
      </div>
      <div className={styles.traco}></div> 

      <section className={styles.button2}>
          <span>4 itens restantes</span>
      </section>  
      <section className={styles.button2}>
          <span>Tudo</span>
      </section>  
      <section className={styles.button2}>
          <span>Ativas</span>
      </section> 
      <section className={styles.button2}>
          <span>Completas</span>
      </section> 
      <section className={styles.button2}>
          <span>Limpar Completas</span>
      </section> 

    </div>
  </div>

  )
}
