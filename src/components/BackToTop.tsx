import { useEffect, useState } from 'react'

const BOTTOM_THRESHOLD = 80

function isScrolledToBottom() {
  return (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - BOTTOM_THRESHOLD
  )
}

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(isScrolledToBottom())
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)

    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      className="back-to-top back-to-top--visible"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </button>
  )
}
