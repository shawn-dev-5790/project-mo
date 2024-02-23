import { useParams } from 'react-router-dom'
import { LinkedImage } from './components/LinkedImage'

const GalleryView: React.FC = () => {
  return (
    <>
      <Content />
    </>
  )
}

export default GalleryView

const Content: React.FC = () => {
  const { galleryId = '' } = useParams()

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '600px',
        margin: '0 auto',
        background: '#efefef',
      }}
    >
      <h2>gallery for {galleryId}</h2>
      <LinkedImage />
      <section>
        <strong>이미지에 들어간 상품 목록</strong>
      </section>
      <section>
        <strong>상품 조합 이름</strong>
        <p>상품 조합 설명</p>
      </section>
      <section>
        <strong>판매자 정보</strong>
        <p>판매자 글</p>
      </section>
      <section>
        <strong>리뷰 목록</strong>
        <ul>
          <li>
            <b>리뷰어 이름</b>
            <p>리뷰 내용</p>
          </li>
        </ul>
      </section>
    </div>
  )
}
