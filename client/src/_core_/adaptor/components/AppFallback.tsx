import css from './AppFallback.module.css'

interface IAppFallback {
  img: string
  title: string
  desc: string
  width: string
  height: string
}

const AppFallback: React.FC<IAppFallback> = ({ img, title, desc, width, height }) => {
  return (
    <div className={css.wrap} style={{ width, height }}>
      <div className={css.inner}>
        <div className={css.cont_img}>
          <img src={img} alt="fallback image" />
        </div>
        <div className={css.cont_txt}>
          <strong>{title}</strong>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export const AppFallbackLoading: React.FC = () => (
  <AppFallback
    img={'https://dummyimage.com/512x512/000/fff&text=loading...'}
    title={'로딩 중입니다'}
    desc={'컨텐츠를 불러오는 동안 잠시 기다려주세요.'}
    width={'100%'}
    height={'100%'}
  />
)

export const AppFallbackError: React.FC = () => (
  <AppFallback
    img={'https://dummyimage.com/512x512/000/fff&text=error...'}
    title={'Unexpected Error occured'}
    desc={'plz try agian later'}
    width={'100%'}
    height={'100%'}
  />
)
export const AppFallbackDummy: React.FC<{ idx: number }> = ({ idx }) => (
  <div
    style={{
      width: '100%',
      height: '50vh',
      border: '1px solid',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    children={idx + 1}
  />
)
