import React from 'react'
import { Button } from 'antd'

export interface HelloProps { title: string, name: string }

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    const { title, name } = this.props
    return (
      <>
        <h1>{title}{title}</h1>
        <sub>{name}</sub>
        <Button>test</Button>
      </>
    )
  }
}