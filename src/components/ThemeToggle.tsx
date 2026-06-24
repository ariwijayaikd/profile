interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <label className="theme-toggle" aria-label="Ubah tema tampilan">
      <input
        type="checkbox"
        className="theme-toggle__input"
        checked={isDark}
        onChange={onToggle}
      />
      <span className="theme-toggle__track">
        <span className="theme-toggle__icons" aria-hidden="true">
          <i className="fas fa-sun" />
          <i className="fas fa-moon" />
        </span>
        <span className="theme-toggle__thumb" />
      </span>
    </label>
  )
}
