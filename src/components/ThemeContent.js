import React, { useState } from "react"

export const ThemeContext = React.createContext({
  name: "light",
  updateTheme: () => {},
})