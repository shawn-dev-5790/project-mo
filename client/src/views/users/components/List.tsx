import style from './List.module.css'

import { IResGetUserList } from '../../../_core_/managers/network/endpoints/getUsers'

export const List: React.FC<{ data: IResGetUserList; lang: null; opts: null }> = (props) => {
  return (
    <div className={style.list_wrap}>
      <strong className={style.list_tit}>유저 목록</strong>
      <div className={style.list_page}>페이지</div>
      <ul className={style.list_cont}>
        {props.data.data.map((user) => (
          <Item key={user.id} data={user} />
        ))}
      </ul>
      {/* <pre>{JSON.stringify(props.data, null, 2)}</pre> */}
    </div>
  )
}

const Item: React.FC<{ data: IResGetUserList['data'][number] }> = (props) => {
  const { id, email, first_name, last_name, avatar } = props.data

  return (
    <li className={style.item_wrap}>
      <div className={style.item_img}>
        <img src={avatar} alt={`${first_name}'s avatar`} />
      </div>
      <div className={style.item_info}>
        <b>
          {first_name}, {last_name}
        </b>
        <p>
          {email}

          {email}
          {email}

          {email}
          {email}

          {email}
          {email}
          {email}
          {email}
        </p>
      </div>
    </li>
  )
}
