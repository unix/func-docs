import React from 'react'
import Sun from '@zeit-ui/react-icons/sun'
import Moon from '@zeit-ui/react-icons/moon'
import { useTheme, Button } from '@zeit-ui/react'
import { useConfigs } from 'lib/config'

const ToggleTheme = () => {
  const { type } = useTheme()
  const { onThemeChange } = useConfigs()
  const handler = () => {
    onThemeChange && onThemeChange()
  }

  return (
    <div>
      <Button
        style={{ width: 'var(--zeit-ui-button-height)', padding: 0 }}
        auto
        size="mini"
        onClick={handler}
        icon={type !== 'light' ? <Sun /> : <Moon />}
      />
      <style jsx>{`
        div {
          position: fixed;
          bottom: 20px;
        }
      `}</style>
    </div>
  )
}

export default ToggleTheme
