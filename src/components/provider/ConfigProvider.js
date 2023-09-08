import { getNordesConfig } from '@/services/Requests'
import React, { createContext, useEffect, useState } from 'react'
 

/**
 * Context provider for the Nordes configuration data.
 *
 * @param {object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered context provider component.
 */

export const NordesConfigContext = createContext()

const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState({})

  /**
   * Fetches the Nordes configuration data from the server and updates the local state.
   * If the cached data is still valid (less than 2 hours old), it will be used instead of making a new request.
   */
  useEffect(() => {
    let cachedConfig = JSON.parse(localStorage.getItem('NordesConfig'))
    let lastUpdate = JSON.parse(localStorage.getItem('lastUpdate'))
    let now = new Date().getTime()

    // Refetch every 2 hours from last fetch request
    if (!cachedConfig || now - lastUpdate >= 60 * 60 * 0.5 * 1000) {
      // Fetch the configuration data from the server and update the state and cache
      getNordesConfig().then((res) => {
        setConfig(res.data.results)
        localStorage.setItem('lastUpdate', new Date().getTime())
        localStorage.setItem('NordesConfig', JSON.stringify(res.data.results))
      })
    } else {
      // Use the cached configuration data
      setConfig(cachedConfig)
    }
  }, [])

  return (
    <NordesConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </NordesConfigContext.Provider>
  )
}

export default ConfigProvider
