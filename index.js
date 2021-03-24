* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 2800px;
  font-family: serif;
  font-size: 10px;
  -webkit-text-size-adjust: 100%;
}

h2 {
  font-size: 3.5rem;
}

p {
  font-size: 1.8rem;
  letter-spacing: 0.5rem;
}

a {
  text-decoration: none;
}

header {
  background-color: white;
  width: 100%;
  height: 1px;
  position: absolute;
  top: 0;
}

.menu-container {
  width: 100%;
  height: 60px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  z-index: 999;
  position: fixed;
}

.menu-container span {
  display: block;
  height: 5px;
  width: 40px;
  margin: 5px 10px;
  border-radius: 2px;
  background: black;
  transition: 300ms;
}

.top.open {
  transform: rotate(45deg);
  top: 15px;
  position: relative;
  background-color: #fff;
}

.middle.open {
  opacity: 0;
}

.bottom.open {
  transform: rotate(-45deg);
  bottom: 15px;
  position: relative;
  background-color: #fff;
}

.nav-wrapper {
  position: fixed;
  right: -100%;
  width: 100%;
  background-color: rgba(31, 31, 32, 0.527);
  transition: 300ms;
  align-items: flex-end;
  z-index: 100;
  height: 100vh;
}

.nav-wrapper ul {
  margin: 0;
  padding: 0;
}

.nav-wrapper.open {
  right: 0;
}

li {
  list-style: none;
  height: 100%;
  text-align: center;
  line-height: 80px;
  margin: 5%;
}

li a {
  display: block;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 3rem;
  font-family: fantasy;
}

li a:hover {
  background-color: white;
  color: black;
}

.introduction {
  background-image: url(../image/myphoto.jpeg);
  background-repeat: no-repeat;
  background-size: 100%;
  height: 150vh;
  position: sticky;
}

.introduction .name {
  color: white;
  font-size: 8rem;
  font-family: "Times New Roman", Times, serif;
  position: absolute;
  top: 50%;
  left: 18%;
}

.main-container {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100%;
}

#profile-section {
  background-image: url(../image/introduction.jpg);
  background-size: cover;
  background-position: center;
  height: 130vh;
  background-repeat: no-repeat;
}

#profile-section .my-profile {
  top: 2%;
  display: flex;
  position: absolute;
  left: 42%;
}

#profile-section .my-profile h2 {
  margin-left: 10px;
}

#profile-section .my-profile h2:hover {
  color: blue;
}

.profile-image {
  position: absolute;
  top: 4%;
  left: 45%;
  opacity: 0;
  transition: 1s;
  transform: translateX(5%);
}

.profile-image img {
  border-radius: 5px;
}

.subtitle-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 11%;
  left: 50%;
}

.subtitle-1 h2 {
  margin-left: 10px;
}

.size1 {
  color: #f8a473;
}

.size2 {
  color: white;
}

.size3 {
  color: #8bd5f8;
}

.size4 {
  color: #03fd89;
}

.introduction-1 {
  position: relative;
  top: 50%;
  left: 30%;
  width: 52vw;
  display: flex;
  background-color: whitesmoke;
  border-radius: 15px;
  opacity: 0;
  transition: 1s;
  transform: translateX(-10%);
}

.subtitle-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 17%;
  left: 48%;
}

.subtitle-2 h2 {
  margin-left: 10px;
}

.introduction-2 {
  position: absolute;
  top: 18.5%;
  left: 32%;
  display: flex;
  background-color: whitesmoke;
  border-radius: 15px;
  opacity: 0;
  transition: 1s;
  transform: translateX(10%);
}

#skill-section {
  background-image: url(../image/skill.jpg);
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
}

.skill-title {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 5%;
  left: 5%;
}

.skill-title h2 {
  margin-left: 30px;
}

.skill-wrapper {
  width: 100%;
  display: flex;
  position: relative;
  top: 15%;
  align-content: space-around;
  opacity: 0;
  transform: translateY(7%);
  transition: 1s;
}

.skill-wrapper .skill {
  width: 100%;
  height: 40vh;
}

.skill-wrapper .skill img {
  width: 35%;
  height: 35vh;
}

.revel-wrapper {
  font-size: 3.5rem;
  position: relative;
  top: 22%;
  display: flex;
  opacity: 0;
  transform: translateX(7%);
  transition: 1s;
}

.revel-wrapper .revel {
  width: 25%;
  height: 8vh;
  border: 2px solid #000;
  box-sizing: border-box;
  border-radius: 20px;
  margin-right: 20px;
  color: white;
  padding-top: 0.5%;
}

.revel-wrapper .revel:hover {
  color: #00eaff;
}

.inner {
  background-color: black;
  height: 100%;
  width: 0.0001vw;
  position: absolute;
  bottom: 0;
  transition: 1.5s;
  border-radius: 20px;
}

#portfolio-section {
  background-image: url(../image/portfolio.jpg);
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
}

#portfolio-section .portfolio-title {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 5%;
  left: 1%;
}

#portfolio-section .portfolio-title h2 {
  margin-left: 1%;
}

#works-section {
  background-image: url(../image/works.jpg);
  background-size: cover;
  height: 120vh;
  background-repeat: no-repeat;
}

#works-section .works-title {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 5%;
  left: 1%;
}

#works-section .works-title h2 {
  margin-left: 30px;
}

.works {
  height: 90vh;
  display: flex;
  opacity: 0;
  transform: translateY(7%);
  transition: 1s;
}

.works .work {
  width: 100%;
  position: relative;
  top: 10%;
}

.works .work img {
  width: 65%;
  height: 35vh;
  border-radius: 45%;
}

.works .work .work-text {
  width: 95%;
  background-color: #666666;
  color: azure;
  opacity: 0.9;
  border-radius: 20px;
  margin-top: 5%;
}

.works .work-message {
  display: block;
  height: 90px;
  position: absolute;
  top: 80%;
  right: 30%;
  font-size: 2rem;
  letter-spacing: 1px;
  color: whitesmoke;
  transform: translateY(7px);
  transition: 1s;
}

#contact-section {
  background-image: url(../image/contact.jpeg);
  background-size: cover;
  background-position: 40% 50%;
  height: 90vh;
  background-repeat: no-repeat;
}

#contact-section .contact-title {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 5%;
  left: 1%;
}

#contact-section .contact-title h2 {
  margin-left: 2%;
}

#contact-section .contact-text {
  width: 100%;
  position: relative;
  top: 15%;
}

#contact-section .contact-nav {
  position: relative;
  top: 20%;
}

#contact-section .contact-nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

#contact-section .contact-nav ul li {
  display: inline-block;
  margin-right: 70px;
}

.copyright {
  font-size: 3.5rem;
  position: relative;
  top: 70%;
}

.move {
  opacity: 1;
  transform: none;
}
/*# sourceMappingURL=style.css.map */
