import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className="pagebannercustom">
      <h1>Contact Us</h1>
      <div >
          
                    <p><span class="icon icon-Plaine"></span>Address : 44 New Design Street, Melbourne 005</p>
			              <p><span class="icon icon-Phone2"></span>Phone : <a title="01800433633" href="tel:+01800433633">(01) 800 433 633</a></p>
			              <p><span class="icon icon-Mail"></span>Email : <a title="info@Example.com" href="mailto:info@Example.com">info@Example.com</a></p>
           <div>
            <br/>
            <br/>
			</div>
        </div>
    </div>
  );
};

export default ContactPage;