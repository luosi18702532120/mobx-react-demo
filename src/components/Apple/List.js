import Item from './Item'
import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../stores/RootStore'

const List = () => {
  const { listStore } = useRootStore()
  return (
    <div className='contain_box'>
      <div className='inner_contain'>
        <div className='contain_title'>
          苹果篮子
        </div>
        <div className='contain_count'>
          <div className='count_left'>
            <div className='count_top'>
              当前
            </div>
            <div className='count_bottom'>
              {listStore.currentApple}个苹果，{listStore.currentCount}克
            </div>
          </div>
          <div className='count_left'>
            <div className='count_top'>
              已吃掉
            </div>
            <div className='count_bottom'>
              {listStore.eatenApple}个苹果，{listStore.eatenCount}克
            </div>
          </div>
        </div>
        <div className='contain_list'>
          {
            listStore.list.map(item => {
              return (
                <Item
                  key={item.id}
                  item={item}
                />
              )
            })
          }
        </div>
        <div className='contain_footer'>
          <button className='contain_footer_button' onClick={() => listStore.addApple()}>摘苹果</button>
        </div>
      </div>
    </div>
  )
}

export default observer(List)