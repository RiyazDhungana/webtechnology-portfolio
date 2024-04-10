const images = [
  "FoodieDelight.png",
  "JavaIIS1.png",
  "JavaIIS2.png",
  "Portfolio.png",
  "AquaScape.png",
  "burgrr.png",
];
const title = [
  "Foodie Delight- A Resturant Website",
  "Student IMS in Java- Entering Data",
  "Student IMS in Java- Viewing Data",
  "Portfolio Website",
  "AquaScape-Wordpress Ecommerce Website",
  "Burgrr- A Burger Store",
];
let count = 0;
let img = document.getElementById("Image");
let pname = document.getElementById("projectName");
function changeImage(x) {
  if (x == 0) {
    if (count == 0) {
      alert("There are no images before this..");
    } else {
      pname.innerHTML = title[count - 1];
      img.src = images[count - 1];
      count--;
    }
  } else if (x == 1) {
    if (count == images.length - 1) {
      alert("There are no images after this");
    } else {
      pname.innerHTML = title[count + 1];
      img.src = images[count + 1];
      count++;
    }
  }
}
var typed = new Typed("#element", {
  strings: [
    "IT Student.",
    "Diligient Learner.",
    "Frontend Learnee.",
    "Web Developer.",
  ],
  typeSpeed: 100,
  loop: true,
});

function changeContent(a) {
  if (a == 0) {
    document.getElementById("Heading").innerHTML = "About Me";
    document.getElementById("text").innerHTML =
      "Greetings! <br>My name is Reyaz Dhungana, and I am delighted to welcome you to my corner of the web. At the age of 20, I am on a journey of exploration and growth in the vast realm of technology.<br>                Currently pursuing a Bachelor's degree in Information Technology (BIT), I am deeply immersed in the world of bits and bytes, seeking to unravel the mysteries of the digital universe. My academic pursuits have equipped me with a strong foundation in various facets of IT, laying the groundwork for my professional endeavors.<br>                                However, my passion extends far beyond the confines of the classroom. I am a fervent advocate for frontend development, where creativity converges with functionality to craft captivating user experiences. As a self-proclaimed frontend learner, I thrive on the challenge of mastering new techniques and staying abreast of the latest trends in web design.<br>                                Driven by an insatiable thirst for knowledge, I approach every project as an opportunity to expand my skill set and refine my craft. Whether it's breathing life into a static webpage or architecting a seamless user interface, I take pride in delivering solutions that resonate with both aesthetics and functionality.<br>                                Beyond the lines of code, I am a fervent believer in the power of perseverance and diligence. Each hurdle I encounter serves as a stepping stone towards personal and professional growth, reinforcing my resolve to overcome obstacles with unwavering determination.                                As you navigate through my digital portfolio, I invite you to embark on this journey with me—a journey fueled by curiosity, passion, and an unwavering commitment to excellence.";
  } else if (a == 1) {
    document.getElementById("Heading").innerHTML = "Education";
    document.getElementById("text").innerHTML = "<section><article><h3>MidSchool-HighSchool</h3> <p><strong>Sagarmatha Educational Academy, Kathmandu</strong></p> <p><em>2007-2020</em></p> <p><em>Obtained GPA : 3.90</em></p>  <p> <strong>Texas Educational Academy, Kathmandu</strong> </p> <p><em>2020-2022</em></p>  </p> <p><em>Obtained GPA: 3.70</em></p> </p> <p><em>Learned Course: Computer Science</em></p> <p> <strong>Texas College of Management and IT, Kathmandu</strong> </p> <p><em>2022-Present</em></p> <p><em>Obtaind GPA: -</em></p><p><em>Applied Course: Bachelors Information Technology</em></p>  </article>"
  } else if (a == 2) {
    document.getElementById("Heading").innerHTML = "Skills and experience";
    document.getElementById("text").innerHTML = "<section> <h2>Skills</h2> <article> <p><strong>C Programming</strong></p> <p><em>Logic Building <br> Program Building<br> File Handling. </em></p> <p><strong>Java</strong></p> <p><em>Logic Building<br> Programming<br> File Handling<br> Information Handling. </em></p> <p><strong>FrontEnd Development: HTML, CSS and JS</strong></p> <p><em>Website Development<br> Website Logic Handling<br> Responsive Design.</em></p> <p><strong>WordPress</strong></p> <p><em>Responsive Website Creation<br> Electronic Payment System Integration<br> Shipment Processing. </em></p> </article> <section> <h2>Work Experience</h2> <article> <h3>Freelancer</h3> <p><strong>Fiverr</strong></p> <p><em>Duration: 2023/08/10 - Present</em></p> <p><em>Logic Building<br>Website Development<br>Graphics Designing</em></p> </article> </section>";
  } else if (a == 3) {
    document.getElementById("Heading").innerHTML = "Vision";
    document.getElementById("text").innerHTML = "<section> <h1>My Vision</h1> <article> <p>As an IT student, my vision is to become a proficient and innovative professional, leveraging cutting-edge technologies to create impactful solutions that address real-world challenges. I strive to be a leader in the field of technology, driving positive change and contributing to the advancement of society through my expertise and dedication.<p> <p><em>Continuous Learning:</em> I am committed to lifelong learning, staying updated with the latest developments in technology and acquiring new skills to enhance my capabilities.<br><br></p> <p><em>Innovation:</em> I aim to push the boundaries of innovation, exploring novel ideas and approaches to solve complex problems and improve efficiency in various domains.<br><br></p> <p><em>Collaboration:</em> I believe in the power of collaboration and teamwork, working closely with colleagues, clients, and stakeholders to deliver high-quality solutions that exceed expectations.<br><br></p> <p> <em>Ethical Practices:</em> I adhere to ethical standards and principles in all aspects of my work, ensuring integrity, transparency, and accountability in every project I undertake.<br><br></p> <p><em>Global Impact:</em> I aspire to make a positive impact on a global scale, leveraging technology to address societal issues, promote sustainability, and foster inclusivity and diversity in the digital age.<br><br></p> <p> <em>Personal Growth:</em> I am dedicated to personal growth and self-improvement, embracing challenges as opportunities for development and constantly striving for excellence in everything I do.</p> </article> </section>";
  }
}
