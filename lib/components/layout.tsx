import React from 'react'
import Header from './header'
import Menu from './menu'
import { Page, Grid, Spacer } from '@zeit-ui/react'
import dynamic from 'next/dynamic'
const ToggleThemeWithNoSSR = dynamic(() => import('lib/components/toggle-theme'), { ssr: false })

const Layout: React.FC<React.PropsWithChildren<any>> = ({ meta, children }) => {
  return (
    <Page>
      <Page.Header>
        <Header meta={meta} />
      </Page.Header>
      <Page.Content>
        <Grid.Container justify="center" gap={1}>
          <Grid xs={24} sm={4}>
            <Menu />
            <ToggleThemeWithNoSSR />
          </Grid>
          <Grid xs={24} sm={20}>
            {children}
          </Grid>
        </Grid.Container>
        <Spacer y={2.5} />
      </Page.Content>
    </Page>
  )
}

export default Layout
