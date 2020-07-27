import React from 'react'

export interface ConfigsContextParams {
  onThemeChange?: Function
}

export const ConfigsContext = React.createContext<ConfigsContextParams>({})

export const useConfigs = () => React.useContext<ConfigsContextParams>(ConfigsContext)
