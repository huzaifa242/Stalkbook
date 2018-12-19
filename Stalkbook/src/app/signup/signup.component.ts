import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {Istalkbook_user} from "../interfaces/Istalkbook_user";
import {LoadprofileService} from "../loadprofile.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  states: string[] = [
    'Aalto University','Abes Engineering college, Ghaziabad','ABES IT Group of Institutions, Ghaziabad','ABV - Indian Institute of Information Technology and Management Gwalior','Academy of Technology, West Bengal',
    'Acropolis Institute of Technology &amp; Research, Indore','Adobe Systems','AE high school','Affiliated High School of Fujian Normal University','AGH University of Science and Technology','Ahsanullah University of Science and Technology','Ain-shams university','Ajay Kumar Garg Engineering College, Ghaziabad','Ajou University',
    'Aktobe Kazakh -Turkish High School Aktobe Kazakhstan','Al Akhawayn University','Al-Baath University','Al-Zaytoonah University of Jordan','Aleppo University',
    'Alexandru Ioan Cuza University','Allame Helli','Allame Helli','Ambala College of Engineering and Applied Research, Ambala','American International University Bangladesh','American University in Bulgaria','American University of Armenia','American University of Beirut',
    'Amity School of Engineering and Technology','Amity School of Engineering and Technology','Amrita Vishwa Vidyapeetham','Amur State University','Anil Neerukonda Institute of Technology and Sciences','Arab Academy for Science and Technology','Army Institute of Technology, Pune',
    'Army Public School, Dighi Pune','Ashgabat, Bashkent TTHS','Assiut University','Astrakhan state university','Ateneo de Manila University','Atharva College of Engineering , Malad',
    'Atlantik Ahmet Ulusoy College','Atlantik College','AWH Engineering College, Calicut','Azhar University','B K Birla Institute of Engineering &amp; Technology, Pilani','B P Poddar Institute of Management &amp; Technology, Kolkata','Baba Saheb Ambedkar Institute of Technology &amp; Management, Faridabad',
    'Babasaheb Naik College of Engineering, Pusad','Babeș-Bolyai University','Baddi University of Emerging Sciences and Technologies','Baku Turkish Private High School','Banasthali University','Bangabandhu Sheikh Mujibur Rahman Science and Technology University','Bangalore University','Bangladesh University','Bangladesh University of Engineering and Technology','Barazandeh Moghadam','Barnaul, Gymnasium 42',
    'Bauman MSTU','Dharmsinh Desai University','DAIICT','IIT,Delhi','Nirma University','IIT,Mumbai','SVNIT',
  ];
  countries: string[] = [
    'Afghanistan','Aland Islands','Albania','Algeria','American Samoa','Andorra','Angola','Anguilla','Antarctica','Antigua and Barbuda','Argentina','Armenia','Aruba','Australia',
    'Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bonaire','Bosnia and Herzegovina','Botswana','Bouvet Island','Brazil','British Indian','Brunei Darussalam',
    'Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Cayman Islands','Central African Republic','Chad','Chile','China','India','Pakistan','Dubai','Vaticancity','SriLanka','Span','France','England','Itly','Germany','Mexico','Sweden','Norway','South-Korea','Japan','Thailand',
  ];
  formdata: FormGroup;
  tmp:String;
  public newuser: Istalkbook_user;
  //notsame= true;
  onSubmit(){
     //console.log(this.formdata.controls.fname.value);
     this.newuser = {
       fname:this.formdata.controls.fname.value,
       lname:this.formdata.controls.lname.value,
       email:this.formdata.controls.email.value,
       password:this.formdata.controls.password.value,
       institute:this.formdata.controls.institute.value,
       codeforces_handle:this.formdata.controls.codeforces_handle.value,
       country:this.formdata.controls.country.value,
       _id:this.formdata.controls._id.value,
     };
     this.auth.register(this.newuser).subscribe(data => console.log(data));
     window.alert("Registered Successfully!!!!");
     window.alert("Have some Patience Until we get Some Sneak-Peak into your Account");
     this.router.navigate(['home']);
     //console.log(this.newuser);

  }
  constructor(private auth:AuthService , private router:Router, private fb:FormBuilder){

  }
  ngOnInit() {
    this.formdata = this.fb.group({
        password: new FormControl( '',[Validators.required]),
        cpassword: new FormControl( '',[Validators.required]),
        email:new FormControl('',[Validators.email]),
        _id :new FormControl('', [Validators.required]),
        fname:new FormControl('', [Validators.required]),
        lname:new FormControl('', [Validators.required]),
        institute:new FormControl('', [Validators.required]),
        country:new FormControl('', [Validators.required]),
        codeforces_handle:new FormControl('', [Validators.required])
      }, {
        validator: [this.MatchPassword, this.NameMatch]
      }
    );
    if(this.auth.isLoggedIn()){
      window.alert("You are already Logged in");
      this.router.navigate(['home']);
    }
    console.log("in signup on init");

    console.log("HI");
  }
  NameMatch(AC:AbstractControl)
  {
    const uname = AC.get('_id').value;
    if (uname === 'shyam_456')
    {
      AC.get('_id').setErrors({NameMatch: false})
    }
  }
  MatchPassword(AC:AbstractControl)
  {
    const password = AC.get('password').value;
    const cpassword = AC.get('cpassword').value;
    if (password != cpassword)
    {
      AC.get('cpassword').setErrors({MatchPassword : false})
      //this.notsame = true;
    }
  }

}


