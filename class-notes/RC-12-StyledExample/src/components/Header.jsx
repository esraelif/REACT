import ButtonSSS, { DetayButon } from "./styles/ButonSSS";
import DisplaySSS from "./styles/DisplaySSS";
import IMG, { LogoSSS } from "./styles/ImageSSS";



const Header = () => {
  return (
    <div>
      <DisplaySSS>
        <IMG src="./images/logo.png" alt="logo" />

        <div>
          <ButtonSSS kadir="007F73">Apply Courses</ButtonSSS>
          <ButtonSSS omer>Talk to Adviser</ButtonSSS>
        </div>
      </DisplaySSS>

      <DisplaySSS>
        <div>
          <h1>The IT Career of Your Dreams Starts Here!</h1>
          <p>Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.</p>
          <ButtonSSS omer>Start Your New Career</ButtonSSS>
          <DetayButon>Details</DetayButon>
        </div>

        <LogoSSS src="./images/hero.jpg" alt="hero" />
      </DisplaySSS>
    </div>
  );
};

export default Header;
