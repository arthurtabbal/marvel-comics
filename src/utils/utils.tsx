export function formatCurrency(price: number) {
  return (Math.round(100 * price) / 100).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
}
