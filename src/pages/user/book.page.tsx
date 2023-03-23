import styled from "styled-components";
import DataGrid, {Column} from "devextreme-react/data-grid";

const mockData = [
  {
    no: '1',
    category: '개발',
    title: '제목1',
    author: '고금필',
    publisher: '00출판사',
    publicationDate: '2023-03-23',
    isbn: '123DKDL1235',
    availability: 'Y',
  }, {
    no: '2',
    category: '개발',
    title: '제목2-가나다라마바사',
    author: '고금필',
    publisher: '00출판사',
    publicationDate: '2023-03-23',
    isbn: '123DKDL1234',
    availability: 'Y',
  }, {
    no: '3',
    category: '개발',
    title: '제목3',
    author: '고금필',
    publisher: '00출판사',
    publicationDate: '2023-03-23',
    isbn: '123DKDL1232',
    availability: 'Y',
  }
]

export const UserBookPage = () => {


  return (
    <BackgroundWrap>
      <CustomDataGrid
        dataSource={mockData}
        showBorders={true}
        columnAutoWidth={true}
        allowColumnResizing={true}
        paging={{enabled: true, pageSize: 20, pageIndex: 1}}
        searchPanel={{visible: true, placeholder: '검색어를 입력해주세요', highlightSearchText: true}}
        groupPanel={{visible: true, emptyPanelText: '이곳으로 컬럼을 드래그 드롭하여 그룹핑 할 수 있습니다.'}}
      >
        <Column dataField='no' caption='No' minWidth={75} width={75} alignment='center'/>
        <Column dataField='category' caption='분류' width={150} alignment='left'/>
        <Column dataField='title' caption='제목' alignment='left'/>
        <Column dataField='author' caption='저자' width={150} alignment='left'/>
        <Column dataField='publisher' caption='출판사' width={120} alignment='left'/>
        <Column dataField='publicationDate' caption='출판일' width={120} alignment='center'/>
        <Column dataField='isbn' caption='ISBN' width={130} alignment='center'/>
        <Column dataField='availability' caption='대출 가능 여부' width={100} alignment='center'/>
      </CustomDataGrid>
    </BackgroundWrap>
  )
}

export default UserBookPage;


const BackgroundWrap = styled.div`
  display: flex;
  height: 100%;
  background-color: #001529;
`;

const CustomDataGrid = styled(DataGrid)`
  margin: 10px;
`

