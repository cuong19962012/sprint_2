import { SideBar } from './SideBar'
import { NavBar } from './NavBar';
import { Player } from './Player';
import M from '../source/VanNho-TuanHung-4044663.mp3'
import { BsFillHouseFill, BsList, BsMusicNoteList } from 'react-icons/bs';

export function Detail() {
    return (
        <>
            <div className="container-fluid overflow-hidden" style={{ backgroundColor: '#170f23' }}>
                <div className="row">

                    <SideBar />
                    <div className="col-2" />
                    <div className="col-10 p-0 m-0">
                        <NavBar />
                        <div className="container-fluid p-5 ">
                            <div className="row h-auto">
                                <div className="col-8 d-flex justify-content-center align-items-center">
                                    <div className="card bg-transparent border-0 d-flex flex-column gap-2 align-items-center flex-grow-1">
                                        <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/0/1/1/101112c380993dacfd37836080b463dc.jpg" className="h-50 w-50 object-fit-cover card-img-top rounded-circle spinner-border" alt="..." />
                                        <h5 className="card-title text-decoration-underline text-light">Thêm một ai dư thừa</h5>
                                        <p style={{ color: '#6c757d' }}>JUUN D,Bảo Anh, ERIK, Mui Lê</p>
                                        <div className="card-body p-0 w-100">
                                            <Player className='bg-transparent' style={{ width: '100%' }} source={M} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="bg-transparent text-light overflow-auto" style={{ height: '30rem' }}>
                                        <p style={{ color: '#dddddd' }}>
                                            Giấc mộng năm ấy ta có
                                            Nhẹ nhàng như cơn gió
                                            Giờ đã hoá tàn tro
                                            Anh là người em từng yêu
                                            Tim rơi trong một chiều
                                            Hoàng hôn thời niên thiếu
                                            Dẫu là luôn thấy đôi mắt
                                            Buồn làm tim đau thắt
                                            Vẫn hoài yêu
                                            Bao năm tháng
                                            Cũng chẳng thể đo được hết
                                            Nhớ thương đã trao
                                            Ngày mà mình nằm hàng giờ
                                            Nhìn mây bay trên trời xanh
                                            Ngày mà một lời tỏ tình
                                            Rơi theo mưa nhanh nhanh
                                            Từng lần hẹn hò
                                            Giờ lại thành ký ức vẽ lên bức tranh
                                            Tháng năm đã qua
                                            Đẹp như thước phim chúng ta
                                            Hay tua chậm
                                            Nhiều năm về sau tình cờ thấy nhau
                                            Đôi mắt người vẫn một màu sẫm nâu
                                            Cà phê trên tay anh đưa tay em cầm lấy
                                            Có thể được xem như
                                            Mình vừa cầm tay nhau
                                            Xin lỗi vì đã chẳng thể tốt hơn
                                            Xin lỗi chẳng thể trưởng thành sớm hơn
                                            Anh nói điều ấy
                                            Khi trái tim em tan nát từ lâu
                                            Và đã phải học cách gượng cười
                                            Chỉ tiếc
                                            Cô ấy giờ đây
                                            Cô ấy của anh
                                            Chỉ tiếc
                                            Cô ấy của anh
                                            Không phải là em
                                            Gió của những tháng năm ấy
                                            Thổi qua đáy thung lũng
                                            Tận cùng những ngày yêu
                                            Anh là nụ hôn đầu tiên
                                            Chỉ xuất hiện một lần
                                            Ngỡ người thân yêu nhất
                                            Dẫu là luôn thấy đôi mắt
                                            Buồn làm tim đau thắt
                                            Vẫn hoài yêu
                                            Bao năm tháng
                                            Cũng chẳng thể đo được hết
                                            Nhớ thương đã trao
                                            Ngày mà mình nằm hàng giờ
                                            Nhìn mây bay trên trời xanh
                                            Ngày mà một lời tỏ tình
                                            Rơi theo mưa nhanh nhanh
                                            Từng lần hẹn hò
                                            Giờ lại thành ký ức vẽ lên bức tranh
                                            Tháng năm đã qua
                                            Đẹp như thước phim chúng ta
                                            Hay tua chậm
                                            Nhiều năm về sau tình cờ thấy nhau
                                            Đôi mắt người vẫn một màu sẫm nâu
                                            Cà phê trên tay anh đưa tay em cầm lấy
                                            Có thể được xem
                                            Như mình vừa cầm tay nhau
                                            Xin lỗi vì đã chẳng thể tốt hơn
                                            Xin lỗi chẳng thể trưởng thành sớm hơn
                                            Anh nói điều ấy
                                            Khi trái tim em tan nát từ lâu
                                            Và ta đâu còn là gì của nhau
                                            Cô ấy giờ là cô ấy của anh
                                            Cô ấy của anh giờ không phải em
                                            Anh vốn luôn có cô ấy cạnh bên
                                            Chỉ là giờ đây
                                            Em không còn được là cô ấy
                                            Xin lỗi vì đã chẳng thể tốt hơn
                                            Xin lỗi chẳng thể trưởng thành sớm hơn
                                            Anh nói điều ấy
                                            Khi trái tim em tan nát từ lâu
                                            Và ta đâu còn là gì của nhau
                                            Chỉ tiếc
                                            Cô ấy giờ đây
                                            Cô ấy của anh
                                            Chỉ tiếc
                                            Cô ấy của anh
                                            Không phải là em
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}