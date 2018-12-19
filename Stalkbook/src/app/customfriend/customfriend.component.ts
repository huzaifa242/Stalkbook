import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
export interface PeriodicElement {
  name: string;
  username: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Brijesh', username: 'brijesh_1998'},
  { name: 'Huzaifa', username: 'huzaifa242'},
  { name: 'Kishan', username: 'shyam_456'},
];
@Component({
  selector: 'app-customfriend',
  templateUrl: './customfriend.component.html',
  styleUrls: ['./customfriend.component.css']
})
export class CustomfriendComponent {

  states: string[] = [
    'Aalto University', 'Abes Engineering college, Ghaziabad', 'ABES IT Group of Institutions, Ghaziabad', 'ABV - Indian Institute of Information Technology and Management Gwalior', 'Academy of Technology, West Bengal',
    'Acropolis Institute of Technology &amp; Research, Indore', 'Adobe Systems', 'AE high school', 'Affiliated High School of Fujian Normal University', 'AGH University of Science and Technology', 'Ahsanullah University of Science and Technology', 'Ain-shams university', 'Ajay Kumar Garg Engineering College, Ghaziabad', 'Ajou University',
    'Aktobe Kazakh -Turkish High School Aktobe Kazakhstan', 'Al Akhawayn University', 'Al-Baath University', 'Al-Zaytoonah University of Jordan', 'Aleppo University',
    'Alexandru Ioan Cuza University', 'Allame Helli', 'Allame Helli', 'Ambala College of Engineering and Applied Research, Ambala', 'American International University Bangladesh', 'American University in Bulgaria', 'American University of Armenia', 'American University of Beirut',
    'Amity School of Engineering and Technology', 'Amity School of Engineering and Technology', 'Amrita Vishwa Vidyapeetham', 'Amur State University', 'Anil Neerukonda Institute of Technology and Sciences', 'Arab Academy for Science and Technology', 'Army Institute of Technology, Pune',
    'Army Public School, Dighi Pune', 'Ashgabat, Bashkent TTHS', 'Assiut University', 'Astrakhan state university', 'Ateneo de Manila University', 'Atharva College of Engineering , Malad',
    'Atlantik Ahmet Ulusoy College', 'Atlantik College', 'AWH Engineering College, Calicut', 'Azhar University', 'B K Birla Institute of Engineering &amp; Technology, Pilani', 'B P Poddar Institute of Management &amp; Technology, Kolkata', 'Baba Saheb Ambedkar Institute of Technology &amp; Management, Faridabad',
    'Babasaheb Naik College of Engineering, Pusad', 'Babeș-Bolyai University', 'Baddi University of Emerging Sciences and Technologies', 'Baku Turkish Private High School', 'Banasthali University', 'Bangabandhu Sheikh Mujibur Rahman Science and Technology University', 'Bangalore University', 'Bangladesh University', 'Bangladesh University of Engineering and Technology', 'Barazandeh Moghadam', 'Barnaul, Gymnasium 42',
    'Bauman MSTU', 'Dharmsinh Desai University', 'DAIICT', 'IIT,Delhi', 'Nirma University', 'IIT,Mumbai', 'SVNIT',
  ];
  countries: string[] = [
    'Afghanistan', 'Aland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia',
    'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bonaire', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian', 'Brunei Darussalam',
    'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'India', 'Pakistan', 'Dubai', 'Vaticancity', 'SriLanka', 'Span', 'France', 'England', 'Itly', 'Germany', 'Mexico', 'Sweden', 'Norway', 'South-Korea', 'Japan', 'Thailand',
  ];
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  displayedColumns: string[] = [ 'name',  'username'];
  dataSource = ELEMENT_DATA;
}
