import M from '../source/VanNho-TuanHung-4044663.mp3'
import { Player } from './Player';
import { SideBar } from './SideBar'
import { NavBar } from './NavBar';
export function Album() {
    return (
        <>
            <div className="container-fluid overflow-hidden" style={{ backgroundColor: '#170f23' }}>
                <div className="row">
                    <SideBar />
                    <div className="col-2" style={{ backgroundColor: '#170f23' }}/>
                    <div className="col-10 p-0 m-0 min-vh-100 ">
                        <NavBar/>
                        <div className="container-fluid p-5 h-100" >
                            <div className="card mt-4">
                                <div className="card-header">List album</div>
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
                        <Player className="sticky-bottom" source={M} />
                    </div>
                </div>
            </div>
        </>
    );
}