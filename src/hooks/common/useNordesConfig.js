import { NordesConfigContext } from '../../components/provider/ConfigProvider'
import React, { useContext } from 'react'

/**
 * A custom React hook that returns the Nordes configuration data from the `ConfigProvider` context.
 *
 * @returns {{ config , setConfig }} An object containing the Nordes configuration data and the `setConfig` function.
 */
const useNordesConfig = () => {
  const data = useContext(NordesConfigContext)
  return data
}

export default useNordesConfig
