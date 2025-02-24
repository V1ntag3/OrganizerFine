import type { CardProps } from 'tamagui'
import { Card, H2, H6 } from 'tamagui'

type CardBalanceProps = CardProps & {
  value: number
}

export default function CardBalance({ value, ...props }: CardBalanceProps) {
  return (
    <Card bordered {...props} padding={10}>
      <Card.Header>
        <H6 fontWeight={300}>Balanço Geral</H6>
        <H2 fontWeight={900}>
          
          {value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </H2>
      </Card.Header>
    </Card>
  )
}
