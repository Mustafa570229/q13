import styles from "@/styles/Footer.module.css"
import Link from 'next/link';


const Footer = () => {
   
  return (
    <div className={styles.footer}>
        <h2>Read to in this Chains about Islam</h2>
        <div>
        <Link href="/The-journey-of-certainty">The Journey of Certainty</Link>
            <Link href="/chains">Chains</Link>
            <Link href="/Stories">Stories</Link>
            <Link href="/Mix">mix</Link>
        </div>
        <div>
            <Link href="https://mustafaalabohasne.online/" target="_blank">mustafa Alabohasne</Link>
            
        </div>
    
    </div>
  )
}

export default Footer