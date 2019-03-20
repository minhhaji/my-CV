import React, {Component} from "react";

class Main extends Component {    
    
    render() {
        return(
            <div className="container">
            <div className="row">
                <div className="col-sm-4">
                <h2>About Me</h2><hr className="d-none d-sm-block"/>
                <h5>Photo of me:</h5>
                <img src="./asset/images/cvavt.jpg" className="avtimg rounded-circle mx-auto d-block" />
                <p className="text-justify mt-3">Tôi bắt đầu học lập trình ngay sau kì thi vào Trung học phổ thông. Người chỉ đường dẫn lối cho tôi bắt đầu vào con đường học lập trình là anh trai. Mỗi ngày học một chút, mỗi khi rảnh đọc và tìm hiểu trên internet. Dần dần tôi đã học và hiểu được lập trình là như thế nào và IT (Công nghệ thông tin) đích thực là điều gì. Quyết định học lập trình web trước là của tôi, với mục đích nhanh chóng tìm được công việc và có khả năng tự lo cho bản thân để tiếp tục con đường học về Công nghệ cũng như học tập ở trường. Ước mơ của tôi rất lớn, đầy tham vọng và để đạt được ước mơ ấy tôi nhất định phải nỗ nực!</p>
                <h2>Projects đã hoàn thành</h2><hr className="d-none d-sm-block"/>
                <p>Đây là những projects mà tôi đã hoàn thành trong quá trình học lập trình.</p>
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                    <a className="nav-link" target="blank" href="https://intecavn.github.io/batch1/minh/project2.html">Intruduction to HTML & CSS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" target="blank" href="https://intecavn.github.io/batch1/minh/project3.html">Introduction to Bootstrap</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" target="blank" href="https://intecavn.github.io/batch1/minh/index.html">Personal Profile</a>
                    </li>
                </ul>
                <hr className="d-sm-none"/>
                </div>
                <div className="col-sm-8">
                <h2>Thông tin liên hệ</h2><hr className="d-none d-sm-block"/>
                <p><i class="fa fa-birthday-cake"></i> Ngày sinh: 8/1/2003.</p>
                <p><i class="fa fa-male"></i> Giới tính: Nam.</p>
                <p><i class="fa fa-phone-square"></i> Số điện thoại: 0353167258.</p>
                <p><i class="fa fa-address-card"></i> Địa chỉ: thôn Hội Xá, xã Tân Quang, huyện Ninh Giang, tỉnh Hải Dương</p>
                <br/>
                <h2>Các kỹ năng</h2><hr className="d-none d-sm-block"/>
                <b><p>Lập trình web đơn giản</p>
                <p>Lập trình Single page application với ReactJS</p>
                <p>Lập trình Ruby on Rails cơ bản</p></b>
                    <img className="col-6" src="./asset/images/react.png" alt="react"/>
                    <img className="col-6" src="./asset/images/rails.png" alt="rails"/>
                <br/>
                <h2 className="mt-5">Trình độ học vấn</h2><hr className="d-none d-sm-block"/>
                <b><h4>Lớp 10 Trung học phổ thông.</h4></b>
                <br/>
                <h2 className="mt-3">Mục tiêu hiện tại</h2><hr className="d-none d-sm-block"/>
                <h5>Là một người đam mê công nghệ, những mục tiêu của tôi tự đặt ra cho bản thân là:</h5>
                <p>- Mong muốn tìm được các công việc remote để có thể vừa học tập vừa rèn luyện kinh nghiệm làm việc.</p>
                <p>- Mục tiêu trở thành một Game Developer trong 3 năm tới.</p>
                <br/>
                <h2>Sở thích</h2><hr className="d-none d-sm-block"/>
                <h5>Không chỉ đam mê công nghệ, tôi còn rất thích khám phá và tham gia nhiều hoạt động cũng như những điều thú vị của cuộc sống.</h5>
                <p>Chơi đàn và nghe nhạc lúc rảnh rỗi. <i class="fa fa-music"></i><br/>
                Đọc tiểu thuyết<br/>.v.v...</p>
                <img className="col-6" src="./asset/images/guitar.jpg" alt="hobby-1"/>
                <img className="col-6" src="./asset/images/book.jpg" alt="hobby-2"/>
                <br/>                
                </div>
            </div>
            </div>
        )
    }
}
export default Main