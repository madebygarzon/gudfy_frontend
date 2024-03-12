import useToggleState from "@lib/hooks/use-toggle-state"
import { searchClient, SEARCH_INDEX_NAME } from "@lib/search-client"
import Modal from "@modules/common/components/modal"
import Search from "@modules/common/icons/search"
import DesktopHit from "@modules/search/components/desktop-hit"
import DesktopHits from "@modules/search/components/desktop-hits"
import SearchBox from "@modules/search/components/search-box"
import { InstantSearch } from "react-instantsearch-hooks-web"
import Image from "next/image"

const DesktopSearchModal = () => {
  const { state, close, open } = useToggleState()

  return (
    <>
      <div className="flex max-w-[100%] h-[48px] border rounded-[5px] items-center px-5 gap-x-3">
        <Image alt="icon-search" src="/header/icon-search.svg" width={16.69} height={16.69}/>
        <input type="text" className=" w-full bg-transparent border-none text-white focus:outline-none " placeholder="Buscar..."/>
      </div>
      {/* 
        Original
      <button onClick={open} className="flex items-center gap-x-2 h-full">
        <Search />
        Search
      </button> */}

      <Modal isOpen={state} close={close} size="large">
        <Modal.Body>
          <InstantSearch
            indexName={SEARCH_INDEX_NAME}
            searchClient={searchClient}
          >
            <div className="flex flex-col h-full">
              <div className="w-full flex items-center gap-x-2 bg-gray-50 p-4">
                <Search />
                <SearchBox />
              </div>

              <div className="overflow-y-scroll flex-1 no-scrollbar mt-6">
                <DesktopHits hitComponent={DesktopHit} />
              </div>
            </div>
          </InstantSearch>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default DesktopSearchModal
