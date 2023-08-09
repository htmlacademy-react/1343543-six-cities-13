import { useState } from "react"

const Filters = {
  'popular': 'Popular',
  'low-to-high': 'Price: low to high',
  'high-to-low': 'Price: high to low',
  'top-rated': 'Top rated first'
} as const;

type FilterProps = {
  selectedFilter: string
  setSelectedFilter: (key: string) => void
}

function Filter({selectedFilter, setSelectedFilter}: FilterProps) {
  const [isOpened, setIsOpened] = useState(false)
  
  const handleMouseEnter = () => {
    setIsOpened(true)
  }

  const handleMouseLeave = () => {
    setIsOpened(false)
  }

  const handleFilterSelect = (key: string): void => {
    setSelectedFilter(key)
  }

  const makeFilterList = () => {
    return(
      Object.keys(Filters).map((key) => {
        return (
          <li
            key={key}
            value={key}
            className={`places__option ${selectedFilter === Filters[key as keyof typeof Filters] ? `places__option--active` : ``}`}
            tabIndex={0}
            onClick={() => handleFilterSelect(key)}
          >
            {Filters[key as keyof typeof Filters]}
          </li>
        )
      })
    )
  }

  return (
    <form 
      className="places__sorting" 
      action="#" 
      method="get"
      onMouseEnter={handleMouseEnter}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {Filters[selectedFilter as keyof typeof Filters]}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? ` places__options--opened` : ''}`} onMouseLeave={handleMouseLeave}>
        {makeFilterList()}
      </ul>
    </form>
  )
}

export default Filter
export { Filters }