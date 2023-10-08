import Img from'../img/Login.jpg';
import Logo from'../img/Logo.png';
export function Login() {
    return (
        <>
            <div style={{ backgroundColor: '#170f23' }} className="d-flex justify-content-center min-vh-100 align-items-center ">
                <section className="bg-light-subtle w-50 rounded-5">
                    <div className="row">
                        <div className="col-6 p-0 m-0 p-5">
                            <form className="w-100 h-100">
                                <div className="mb-3 d-flex justify-content-center overflow-hidden">
                                    <img className="h-100 w-100" src={Logo} alt />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label" style={{ color: '#6040ab' }}>Tên đăng nhập</label>
                                    <input type="text" className="form-control" id="username" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label" style={{ color: '#6040ab' }}>Mật khẩu</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <button type="submit" style={{}} className="btn btn-primary">Đăng nhập</button>
                            </form>
                        </div>
                        <div className="col-6 p-0 m-0">
                            <img className="h-100 w-100 object-fit-cover rounded-end-5" src={Img} />
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}