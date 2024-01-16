<template>
  <div>
    <section class="our-courses" id="courses">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <br/> <br/> 
                <div>
                    <p style="color: purple; font-size: 70px; text-align: center;"><strong>FurCare</strong> <em>Guide</em></p>
                    <p style="font-size: 30px; white-space: nowrap; text-align: center;">Be a responsible pet owner and learn more about them.</p>
                </div>
            <br/> <br/> <br/>
          </div> 
          <div class="col-lg-12">
            <div class="naccs">
              <div class="tabs">
                <div class="row">
                  <div class="col-lg-3">
                    <div class="menu">
                      <div
                        v-for="(tab, index) in tabs"
                        :key="index"
                        @click="changeTab(index)"
                        :class="{ 'active gradient-border': activeTab === index }"
                      >
                        <span>{{ tab.title }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-9">
                    <ul class="nacc">
                      <li v-for="(content, index) in tabContents" :key="index" :class="{ active: activeTab === index }">
                        <div>
                          
                          <div class="right-content">
                            <h2>{{ content.title }}</h2>
                            <h4 style="font-size: 20px; text-align: justify;">{{ content.description }}</h4>
                            <div class="text-button">
                              <router-link :to="content.link">Know More</router-link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br/><br/><br/><br/><br/>
   
  </div>
</template>

<script>



export default {
  data() {
    return {


      activeTab: 0,
      tabs: [
        { title: "Cat Adoption Checklist" },
        { title: "Cat Well-Being" },
        { title: "Emergency Preparedness for Cats" },

      ],
      tabContents: [
        {
          title: "Cat Adoption Checklist",
          description: "Congratulations on adopting a cat! You are embarking on a wonderful and rewarding relationship. Because adopting a new cat comes with a lot of change for both cat and cat parent, we've compiled a checklist to help make the transition as smooth as possible. ",
          link: "/Firsttimeadopters",
        },
        // Repeat for other tabs
        {
          title: "Cat's Well-Being",
          description: "Ensuring the well-being of your beloved canine companion involves various aspects of care, from nutrition to exercise and mental stimulation. By prioritizing these key components, you can keep your dog healthy, happy, and thriving.",
          link: "/Wellbeing",
        },
        {
          title: "Emergency Preparedness for Cats",
          description: "As responsible pet owners, ensuring the safety and well-being of our canine companions extends beyond day-to-day care. Just like humans, dogs may encounter unexpected emergencies or disasters that require swift and organized responses. Whether it's a natural disaster, evacuation, or sudden health issue, being prepared...",
          link: "/Tips",
        },
        
      ],
        

    };
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
    },
  },
};
</script>

<style scoped>
/*
---------------------------------------------
our courses
---------------------------------------------
*/

section.our-courses {
  position: relative;
}

section.our-courses .section-heading p {
  padding: 0px 10px;
  
}

section.our-courses:before {
  position: absolute;
  content: '';
  background-image: url(../images/our-courses-left-dec.png);
  left: 45px;
  top: -140px;
  width: 291px;
  height: 231px;
  z-index: 1;
}

section.our-courses:after {
  position: absolute;
  content: '';
  background-image: url(../images/our-courses-right-dec.png);
  right: 45px;
  top: -140px;
  width: 291px;
  height: 231px;
  z-index: 1;
}

section.our-courses .naccs {
  position: relative;
}

section.our-courses .naccs .menu div {
  padding: 15px 30px;
  text-align: center;
  border-radius: 5px !important;
  margin-bottom: 40px;
  font-size: 20px;
  color: #111;
  background-color: #fff;
  cursor: pointer;
  vertical-align: middle;
  font-weight: 900;
  transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);
  border: 3px solid rgba(219,138,222,0.5);
}

section.our-courses .naccs .menu div.active {
  color: #dc8cdb;
  border: 3px solid rgba(219,138,222,1);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
}

section.our-courses ul.nacc {
  margin-left: 100px !important;
  position: relative;
  min-height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1);

}

section.our-courses ul.nacc li {
  background-color: #fff;
  overflow: hidden;
  opacity: 0;
  transform: translateX(50px);
  position: absolute;
  list-style: none;
  transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  padding-right: 50px;
}

section.our-courses ul.nacc li .left-image {
  position: absolute;
  margin-right: 50px;
  top: 50%;
  transform: translateY(-50%);
	margin-top: 100px;
}

section.our-courses ul.nacc li .left-image img {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

section.our-courses ul.nacc li .left-image .price h4 {
  position: absolute;
  background: rgb(219, 138, 222);
  background: linear-gradient(-145deg, rgba(219, 138, 222, 1) 0%, rgba(246, 191, 159, 1) 100%);
  color: #fff;
  top: 20px;
  font-size: 20px;
  font-weight: 700;
  width: 50px;
  height: 50px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

section.our-courses ul.nacc li .right-content {
  padding: 80px 0px;
  margin-left: 50px;
  margin-top: 20px;
   text-align: center; /* Center the content */
}

section.our-courses ul.nacc li .right-content h2 {
  font-size: 45px;
  color: purple;
  margin-bottom: 50px;
  font-weight: 800;
  text-align: center;
}

section.our-courses ul.nacc li .right-content ul {
  margin-top: 20px;
  margin-bottom: 20px;
}

section.our-courses ul.nacc li .right-content span {
  font-size: 14px;
  font-weight: 600;
  margin-right: 30px;
  padding-right: 80px;
  border-right: 2px solid #111;
}

section.our-courses ul.nacc li .right-content .last-span {
  margin-right: 0px;
  padding-right: 0px;
  border-right: none;
}

section.our-courses ul.nacc li .right-content p {
  margin-bottom: 50px;
}

section.our-courses ul.nacc li .right-content .text-button {
  margin-top: 50px;
  display: inline-block;
  width: 150px;
  padding: 10px 15px;
  background-color: purple;
  border-radius: 40px;
  text-align: center;
    transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Add box-shadow transition */
  align-self: center;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6); /* Add box shadow */
}

section.our-courses ul.nacc li .right-content .text-button:hover {
  background-color: #a07dfb; 
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); /* Add box shadow on hover */
}


section.our-courses ul.nacc li .right-content .text-button a {
  color: white;
  text-decoration: none;
}

section.our-courses ul.nacc li.active {
  position: relative;
  transition-delay: 0.3s;
  z-index: 2;
  opacity: 1;
  transform: translateX(0px);
}

section.our-courses ul.nacc li p {
  margin: 0;
}




</style>
