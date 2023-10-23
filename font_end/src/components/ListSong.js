export async function ListSong() {
    return (
        <div style={{ backgroundColor: '#170f23' }} className="container-fluid">
            <div className="row">
                <SideBar />
                <div className="col-2" />
                <div className="col-10 p-0 m-0">
                    <NavBar handleSearchKeyWord={handleSearchKeyWord} handlePageNumber={handlePageNumber} />
                    <div className="container-fluid p-5 min-vh-100">
                        <h1 className="display-6 my-5 fw-bold" style={{ color: '#6040ab' }}>Danh sách tìm kiếm</h1>

                        <ul class="list-group list-group-flush mb-3">
                            {
                                listSearched.map(item => (
                                    <li class="list-group-item bg-transparent position-relative">
                                        <img src={item.image}
                                            style={{ height: "3rem", width: "3rem" }} className="float-start rounded mx-auto d-inline" />
                                        <div className='float-start mx-2'>
                                            <div className='text-light'>{item.name}</div>
                                            <div className='text-light-emphasis'>{item.singerName}</div>
                                        </div>
                                        <div className='position-absolute pb-2 bottom-0 end-0'><button className='btn btn-primary'><BsMusicNoteList /> Thêm vào Album</button></div>
                                    </li>
                                ))
                            }
                        </ul>
                        < Pagination totalPages={totalPages} handlePageNumber={handlePageNumber} pageNumber={pageNumber} />
                    </div>
                </div>
            </div>
        </div >
    );
}