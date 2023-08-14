import Link from 'next/link';
import HomeLayout from '../components/Layout/HomeLayout';

const Teamin = () => {
  return (
    <div className="pagebannercustom">
      <center><h1>Our Team</h1></center>
      <div >
          
                       <img  src='images/ourteam1.jpg'></img>
                       <img  src='images/ourteam2.jpg'></img>
                       <img  src='images/ourteam3.jpg'></img>
           <div>
            <br/>
            <br/>
			</div>
        </div>
    </div>
  );
};

export default Teamin;
Teamin.getLayout = function(page) {
  return <HomeLayout>{page}</HomeLayout>;
};