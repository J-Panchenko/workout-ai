'use client'

import { useTheme } from 'next-themes'
import { Button } from './ui/button'

const ThemeChanger = () => {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <div>
      <p>The current theme is: {resolvedTheme || 'loading...'}</p>
      <Button onClick={() => setTheme('light')} className="mr-4">
        Light Mode
      </Button>
      <Button onClick={() => setTheme('dark')} variant="secondary">
        Dark Mode
      </Button>
    </div>
  )
}

export default ThemeChanger
