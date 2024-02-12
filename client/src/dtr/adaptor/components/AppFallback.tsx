import style from './App.module.css'

export const AppFallback: React.FC<{ img: string; title: string; desc: string }> = (props) => {
  return (
    <div className={style.app_fallback}>
      <div className={style.app_fallback_inner}>
        <div className={style.app_fallback_img_frame}>
          <img src={props.img} alt="fallback image" />
        </div>
        <div className={style.app_fallback_info}>
          <strong className={style.app_fallback_tit}>{props.title}</strong>
          <p className={style.app_fallback_desc}>{props.desc}</p>
        </div>
      </div>
    </div>
  )
}
