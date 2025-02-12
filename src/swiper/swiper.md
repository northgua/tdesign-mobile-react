:: BASE_DOC ::

## API

### Swiper Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
animation | String | slide | 轮播切换动画效果类型。可选项：slide | N
autoplay | Boolean | true | 是否自动播放 | N
current | Number | 0 | 当前轮播在哪一项（下标） | N
defaultCurrent | Number | 0 | 当前轮播在哪一项（下标）。非受控属性 | N
direction | String | horizontal | 轮播滑动方向，包括横向滑动和纵向滑动两个方向。可选项：horizontal/vertical | N
duration | Number | 300 | 滑动动画时长 | N
height | Number | - | 当使用垂直方向滚动时的高度 | N
interval | Number | 5000 | 轮播间隔时间 | N
loop | Boolean | true | 是否循环播放 | N
navigation | TNode | - | 导航器全部配置。TS 类型：`SwiperNavigation | TNode`。[通用类型定义](https://github.com/TDesignOteam/tdesign-mobile-react/blob/develop/src/common.ts) | N
onChange | Function |  | TS 类型：`(current: number, context: { source: SwiperChangeSource }) => void`<br/>轮播切换时触发。[详细类型定义](https://github.com/TDesignOteam/tdesign-mobile-react/tree/develop/src/swiper/type.ts)。<br/>`type SwiperChangeSource = 'autoplay' | 'touch' | ''`<br/> | N

### SwiperNavigation

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
minShowNum | Number | - | 小于这个数字不会显示导航器 | N
showSlideBtn | Boolean | - | 表示是否显示两侧的滑动控制按钮 | N
type | String | - | 导航器类型，点状(dots)、点条状(dots-bar)、分式(fraction)等。TS 类型：`SwiperNavigationType` `type SwiperNavigationType = 'dots' | 'dots-bar' | 'fraction'`。[详细类型定义](https://github.com/TDesignOteam/tdesign-mobile-react/tree/develop/src/swiper/type.ts) | N
