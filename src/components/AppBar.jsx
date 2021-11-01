import Navigation from './Navigation';
import AuthNav from './AuthNav';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '3px solid #2A363B',
  },
};

export default function AppBar() {
  
    return (
    <header style={styles.header}>
      <Navigation />
      <AuthNav />
    </header>
  );
}