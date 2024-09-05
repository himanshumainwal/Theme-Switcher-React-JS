import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import { useEffect } from 'react'
import Card from './components/card'
import Button from './components/button'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    document.body.className = themeMode === "light"? "bg-white" : "bg-gray-800"
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)

  },[themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          </div>
        <Button/>
          <div className="w-full max-w-sm mx-auto">
        <Card/>

          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
