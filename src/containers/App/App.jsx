import styles from  './App.module.css';
import cn from 'classnames'

const App = () => {
  return (
    <div className={cn(styles.header, styles.text)}>
      app
    </div>
  )
}

export default App;
