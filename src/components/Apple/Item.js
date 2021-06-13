import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../stores/RootStore'

const Item = ({ item }) => {
  const { listStore } = useRootStore()
  return (
    <div className='item_contain'>
      <div className='apple_img'>
        <img src='./apple.png' alt='apple' />
      </div>
      <div className='apple_content'>
        <div className='apple_content_top'>{item.title}</div>
        <div className='apple_content_bottom'>{item.count}克</div>
      </div>
      <div className='apple_right'>
        <button className='apple_btn' onClick={() => { listStore.removeApple(item.id) }}>吃掉</button>
      </div>
    </div>
  )
}

export default observer(Item)