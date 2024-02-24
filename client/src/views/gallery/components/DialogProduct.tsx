import { useReadProduct } from '../../../_core_/adaptor/managers/network/endpoints/getProduct'

export const DialogProdcut: React.FC<{ productId: string }> = ({ productId }) => {
  const { data: ProductRes = null } = useReadProduct({
    path: { productId },
    query: { lang: 'ko' },
  })
  const data = ProductRes?.data || null
  return (
    <>
      {data && (
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'white',
          }}
        >
          <h3>DialogProduct</h3>
          <pre>{JSON.stringify(data.product, null, 2)}</pre>
        </div>
      )}
    </>
  )
}
