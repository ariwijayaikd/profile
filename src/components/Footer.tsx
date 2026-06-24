export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; {year} ariwijayaikd. All rights reserved.</p>
      </div>
    </footer>
  )
}
